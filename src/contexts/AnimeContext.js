import { createContext, useState } from "react";
import data from "../assets/data/data";

export const AnimeContext = createContext();

export const AnimeProvider = (props) => {
  const [animeData] = useState(data);
  return (
    <AnimeContext.Provider value={{ animeData }}>
      {props.children}
    </AnimeContext.Provider>
  );
};
