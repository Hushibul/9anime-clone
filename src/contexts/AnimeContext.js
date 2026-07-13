import { createContext, useEffect, useState } from 'react';
import { getHomeData } from '../api/anilist';

export const AnimeContext = createContext();

export const AnimeProvider = (props) => {
  const [animeData, setAnimeData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    // One GraphQL request fills every list on the home page.
    getHomeData()
      .then((data) => {
        if (!cancelled) setAnimeData(data);
      })
      .catch((err) => {
        if (cancelled) return;
        console.error('Error fetching anime data:', err);
        setError(err.message);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <AnimeContext.Provider value={{ animeData, loading, error }}>
      {props.children}
    </AnimeContext.Provider>
  );
};
