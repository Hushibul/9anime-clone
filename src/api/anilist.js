// Client for the AniList GraphQL API (https://anilist.co) — public, no API key.
//
// Why GraphQL here: the home page needs eight different lists. A REST API means
// eight round-trips against a rate limit; AniList aliases them into one request.

const ENDPOINT = 'https://graphql.anilist.co';

const CACHE_TTL_MS = 10 * 60 * 1000;
const CACHE_KEY = 'anilist-cache-v1';

const inFlight = new Map();

const loadCache = () => {
  try {
    return new Map(JSON.parse(sessionStorage.getItem(CACHE_KEY) || '[]'));
  } catch {
    return new Map();
  }
};

const cache = loadCache();

const persistCache = () => {
  try {
    sessionStorage.setItem(CACHE_KEY, JSON.stringify([...cache]));
  } catch {
    // Storage full or disabled — the in-memory Map still serves this session.
  }
};

const gql = async (query, variables = {}) => {
  const key = JSON.stringify({ query, variables });

  const cached = cache.get(key);
  if (cached && Date.now() - cached.at < CACHE_TTL_MS) return cached.body;

  if (inFlight.has(key)) return inFlight.get(key);

  const pending = (async () => {
    const response = await fetch(ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({ query, variables }),
    });

    if (!response.ok) {
      throw new Error(`AniList responded ${response.status}`);
    }

    const json = await response.json();
    if (json.errors?.length) {
      throw new Error(json.errors[0].message);
    }

    cache.set(key, { at: Date.now(), body: json.data });
    persistCache();
    return json.data;
  })();

  inFlight.set(key, pending);
  try {
    return await pending;
  } finally {
    inFlight.delete(key);
  }
};

// Every media list we request shares these fields.
const MEDIA_FIELDS = `
  id
  title { romaji english native }
  coverImage { large extraLarge }
  bannerImage
  description(asHtml: false)
  episodes
  format
  status
  genres
  averageScore
  popularity
  season
  seasonYear
  duration
  startDate { year month day }
  studios(isMain: true) { nodes { name } }
  trailer { id site }
  nextAiringEpisode { episode airingAt }
`;

const FORMAT_LABELS = {
  TV: 'TV',
  TV_SHORT: 'TV',
  MOVIE: 'Movie',
  SPECIAL: 'Special',
  OVA: 'OVA',
  ONA: 'ONA',
  MUSIC: 'Music',
};

const STATUS_LABELS = {
  RELEASING: 'Currently Airing',
  FINISHED: 'Finished Airing',
  NOT_YET_RELEASED: 'Not Yet Aired',
  CANCELLED: 'Cancelled',
  HIATUS: 'On Hiatus',
};

const SEASON_LABELS = {
  WINTER: 'Winter',
  SPRING: 'Spring',
  SUMMER: 'Summer',
  FALL: 'Fall',
};

// AniList descriptions carry <br> and <i> tags even with asHtml:false.
const stripTags = (text) =>
  text ? text.replace(/<[^>]*>/g, '').trim() : 'No synopsis available.';

const formatDate = (date) => {
  if (!date?.year) return 'Unknown';
  const month = date.month
    ? new Date(date.year, date.month - 1).toLocaleString('en', {
        month: 'short',
      })
    : '';
  return [month, date.day, date.year].filter(Boolean).join(' ');
};

// Flattens AniList's nested media object into the one shape every component
// in this app consumes.
export const normalizeAnime = (media) => {
  if (!media) return null;

  return {
    id: media.id,
    name: media.title?.english || media.title?.romaji || 'Untitled',
    japaneseName: media.title?.native || media.title?.romaji || '',
    image: media.coverImage?.extraLarge || media.coverImage?.large || '',
    banner: media.bannerImage || media.coverImage?.extraLarge || '',
    description: stripTags(media.description),
    type: FORMAT_LABELS[media.format] || media.format || 'TV',
    studio: media.studios?.nodes?.map((s) => s.name).join(', ') || 'Unknown',
    dateAired: formatDate(media.startDate),
    broadcast: media.nextAiringEpisode
      ? `Episode ${media.nextAiringEpisode.episode} airs ${new Date(
          media.nextAiringEpisode.airingAt * 1000
        ).toLocaleString()}`
      : 'Not scheduled',
    status: STATUS_LABELS[media.status] || media.status || 'Unknown',
    genre: media.genres || [],
    country: 'Japan',
    // AniList scores out of 100; the UI expects the familiar x/10.
    score: media.averageScore ? (media.averageScore / 10).toFixed(2) : 'N/A',
    rating: media.averageScore ? `${media.averageScore}%` : 'Not rated',
    premiered:
      media.season && media.seasonYear
        ? `${SEASON_LABELS[media.season]} ${media.seasonYear}`
        : media.seasonYear || 'Unknown',
    duration: media.duration ? `${media.duration} min per ep` : 'Unknown',
    views: media.popularity ?? 0,
    numberOfEpisode: media.episodes ?? media.nextAiringEpisode?.episode ?? '?',
    trailerUrl:
      media.trailer?.site === 'youtube' && media.trailer?.id
        ? `https://www.youtube.com/watch?v=${media.trailer.id}`
        : null,
  };
};

const mapMedia = (page) => (page?.media || []).map(normalizeAnime);

const currentSeason = () => {
  const month = new Date().getMonth();
  const season = ['WINTER', 'SPRING', 'SUMMER', 'FALL'][Math.floor(month / 3)];
  return { season, year: new Date().getFullYear() };
};

const nextSeason = () => {
  const { season, year } = currentSeason();
  const order = ['WINTER', 'SPRING', 'SUMMER', 'FALL'];
  const index = order.indexOf(season);
  return index === 3
    ? { season: 'WINTER', year: year + 1 }
    : { season: order[index + 1], year };
};

// The entire home page — eight lists — in a single round-trip.
const HOME_QUERY = `
  query Home($season: MediaSeason, $seasonYear: Int, $nextSeason: MediaSeason, $nextYear: Int) {
    trending: Page(perPage: 24) {
      media(type: ANIME, sort: TRENDING_DESC, isAdult: false) { ${MEDIA_FIELDS} }
    }
    suggested: Page(perPage: 12) {
      media(type: ANIME, sort: POPULARITY_DESC, isAdult: false) { ${MEDIA_FIELDS} }
    }
    day: Page(perPage: 5) {
      media(type: ANIME, status: RELEASING, sort: TRENDING_DESC, isAdult: false) { ${MEDIA_FIELDS} }
    }
    week: Page(perPage: 5) {
      media(type: ANIME, sort: POPULARITY_DESC, isAdult: false) { ${MEDIA_FIELDS} }
    }
    month: Page(perPage: 5) {
      media(type: ANIME, sort: SCORE_DESC, isAdult: false) { ${MEDIA_FIELDS} }
    }
    newRelease: Page(perPage: 12) {
      media(type: ANIME, season: $season, seasonYear: $seasonYear, sort: POPULARITY_DESC, isAdult: false) { ${MEDIA_FIELDS} }
    }
    newAdded: Page(perPage: 12) {
      media(type: ANIME, season: $nextSeason, seasonYear: $nextYear, sort: POPULARITY_DESC, isAdult: false) { ${MEDIA_FIELDS} }
    }
    justCompleted: Page(perPage: 12) {
      media(type: ANIME, status: FINISHED, sort: END_DATE_DESC, isAdult: false) { ${MEDIA_FIELDS} }
    }
  }
`;

export const getHomeData = async () => {
  const season = currentSeason();
  const next = nextSeason();

  const data = await gql(HOME_QUERY, {
    season: season.season,
    seasonYear: season.year,
    nextSeason: next.season,
    nextYear: next.year,
  });

  return {
    recentlyUpdate: mapMedia(data.trending),
    suggested: mapMedia(data.suggested),
    day: mapMedia(data.day),
    week: mapMedia(data.week),
    month: mapMedia(data.month),
    newRelease: mapMedia(data.newRelease),
    newAdded: mapMedia(data.newAdded),
    justCompleted: mapMedia(data.justCompleted),
  };
};

const DETAIL_QUERY = `
  query Detail($id: Int) {
    Media(id: $id, type: ANIME) {
      ${MEDIA_FIELDS}
      streamingEpisodes { title thumbnail }
    }
  }
`;

export const getAnimeById = async (id) => {
  const data = await gql(DETAIL_QUERY, { id: Number(id) });
  const media = data.Media;

  return {
    ...normalizeAnime(media),
    // AniList lists episode titles for anything that has aired.
    episodeList: (media?.streamingEpisodes || []).map((episode, index) => ({
      id: index + 1,
      number: index + 1,
      title: episode.title || `Episode ${index + 1}`,
      thumbnail: episode.thumbnail,
    })),
  };
};

const RECOMMENDATIONS_QUERY = `
  query Recommendations($id: Int) {
    Media(id: $id, type: ANIME) {
      recommendations(sort: RATING_DESC, perPage: 12) {
        nodes {
          rating
          mediaRecommendation { ${MEDIA_FIELDS} }
        }
      }
    }
  }
`;

// "If you liked this, watch that" — community-voted, specific to one title.
export const getRecommendations = (id) =>
  gql(RECOMMENDATIONS_QUERY, { id: Number(id) }).then((data) =>
    (data.Media?.recommendations?.nodes || [])
      .map((node) => node.mediaRecommendation)
      .filter(Boolean)
      .map(normalizeAnime)
  );

const SEARCH_QUERY = `
  query Search($search: String) {
    Page(perPage: 24) {
      media(type: ANIME, search: $search, sort: SEARCH_MATCH, isAdult: false) { ${MEDIA_FIELDS} }
    }
  }
`;

export const searchAnime = (search) =>
  gql(SEARCH_QUERY, { search }).then((data) => mapMedia(data.Page));

const GENRE_QUERY = `query { GenreCollection }`;

export const getGenres = () =>
  gql(GENRE_QUERY).then((data) =>
    // AniList exposes genres as plain strings and filters by name.
    (data.GenreCollection || []).filter((name) => name !== 'Hentai')
  );

const BY_GENRE_QUERY = `
  query ByGenre($genre: String) {
    Page(perPage: 24) {
      media(type: ANIME, genre: $genre, sort: POPULARITY_DESC, isAdult: false) { ${MEDIA_FIELDS} }
    }
  }
`;

export const getAnimeByGenre = (genre) =>
  gql(BY_GENRE_QUERY, { genre }).then((data) => mapMedia(data.Page));

const BY_FORMAT_QUERY = `
  query ByFormat($format: MediaFormat) {
    Page(perPage: 24) {
      media(type: ANIME, format: $format, sort: POPULARITY_DESC, isAdult: false) { ${MEDIA_FIELDS} }
    }
  }
`;

export const getAnimeByType = (format) =>
  gql(BY_FORMAT_QUERY, { format }).then((data) => mapMedia(data.Page));

const SCHEDULE_QUERY = `
  query Schedule($start: Int, $end: Int) {
    Page(perPage: 20) {
      airingSchedules(airingAt_greater: $start, airingAt_lesser: $end, sort: TIME) {
        episode
        airingAt
        media { ${MEDIA_FIELDS} }
      }
    }
  }
`;

// Real airing times for a given weekday of the current week.
export const getSchedule = async (dayIndex) => {
  const now = new Date();
  const monday = new Date(now);
  monday.setDate(now.getDate() - ((now.getDay() + 6) % 7));
  monday.setHours(0, 0, 0, 0);

  const start = new Date(monday);
  start.setDate(monday.getDate() + dayIndex);
  const end = new Date(start);
  end.setDate(start.getDate() + 1);

  const data = await gql(SCHEDULE_QUERY, {
    start: Math.floor(start.getTime() / 1000),
    end: Math.floor(end.getTime() / 1000),
  });

  return (data.Page?.airingSchedules || [])
    .filter((entry) => entry.media && !entry.media.isAdult)
    .map((entry) => ({
      ...normalizeAnime(entry.media),
      airingEpisode: entry.episode,
      airTime: new Date(entry.airingAt * 1000).toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      }),
    }));
};
