import { createContext, useState, useEffect } from "react";

export const AnimeContext = createContext();

export const AnimeProvider = (props) => {
  const [animeData, setAnimeData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAnimeData = async () => {
      try {
        const [
          recentlyUpdateRes,
          suggestedRes,
          dayRes,
          weekRes,
          monthRes,
          newReleaseRes,
          newAddedRes,
          justCompletedRes,
        ] = await Promise.all([
          fetch("https://api.jikan.moe/v4/top/anime"),
          fetch("https://api.jikan.moe/v4/recommendations/anime"),
          fetch("https://api.jikan.moe/v4/top/anime?filter=airing&limit=5"),
          fetch("https://api.jikan.moe/v4/top/anime?filter=upcoming&limit=5"),
          fetch("https://api.jikan.moe/v4/top/anime?filter=favorite&limit=5"),
          fetch("https://api.jikan.moe/v4/seasons/now"),
          fetch("https://api.jikan.moe/v4/seasons/upcoming"),
          fetch("https://api.jikan.moe/v4/seasons/later"),
        ]);

        const [
          recentlyUpdateData,
          suggestedData,
          dayData,
          weekData,
          monthData,
          newReleaseData,
          newAddedData,
          justCompletedData,
        ] = await Promise.all([
          recentlyUpdateRes.json(),
          suggestedRes.json(),
          dayRes.json(),
          weekRes.json(),
          monthRes.json(),
          newReleaseRes.json(),
          newAddedRes.json(),
          justCompletedRes.json(),
        ]);

        const formattedData = {
          recentlyUpdate: recentlyUpdateData.data.map((anime) => ({
            id: anime.mal_id,
            name: anime.title,
            image: anime.images.jpg.large_image_url,
            description: anime.synopsis,
            type: anime.type,
            studio: anime.studios.map((s) => s.name).join(", "),
            dateAired: anime.aired.string,
            status: anime.status,
            genre: anime.genres.map((g) => g.name),
            country: "Japan",
            score: anime.score,
            premiered: anime.season,
            duration: anime.duration,
            views: anime.members,
            numberOfEpisode: anime.episodes,
            viewStatus: "WATCHING",
            episodeNo: 1,
            viewing: 1,
          })),
          suggested: suggestedData.data.flatMap((rec) => rec.entry).map((anime) => ({
            id: anime.mal_id,
            name: anime.title,
            image: anime.images.jpg.large_image_url,
          })),
          day: dayData.data.map((anime) => ({
            id: anime.mal_id,
            name: anime.title,
            image: anime.images.jpg.large_image_url,
            views: anime.members,
            numberOfEpisode: anime.episodes,
          })),
          week: weekData.data.map((anime) => ({
            id: anime.mal_id,
            name: anime.title,
            image: anime.images.jpg.large_image_url,
            views: anime.members,
            numberOfEpisode: anime.episodes,
          })),
          month: monthData.data.map((anime) => ({
            id: anime.mal_id,
            name: anime.title,
            image: anime.images.jpg.large_image_url,
            views: anime.members,
            numberOfEpisode: anime.episodes,
          })),
          newRelease: newReleaseData.data.map((anime) => ({
            id: anime.mal_id,
            name: anime.title,
            image: anime.images.jpg.large_image_url,
            numberOfEpisode: anime.episodes,
            type: anime.type,
            premiered: anime.season,
          })),
          newAdded: newAddedData.data.map((anime) => ({
            id: anime.mal_id,
            name: anime.title,
            image: anime.images.jpg.large_image_url,
            numberOfEpisode: anime.episodes,
            type: anime.type,
            premiered: anime.season,
          })),
          justCompleted: justCompletedData.data.map((anime) => ({
            id: anime.mal_id,
            name: anime.title,
            image: anime.images.jpg.large_image_url,
            numberOfEpisode: anime.episodes,
            type: anime.type,
            premiered: anime.season,
          })),
        };
        setAnimeData(formattedData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching anime data:", error);
        setLoading(false);
      }
    };

    fetchAnimeData();
  }, []);

  return (
    <AnimeContext.Provider value={{ animeData, loading }}>
      {props.children}
    </AnimeContext.Provider>
  );
};
