import {createContext} from "react";
import GetFilm from "../hooks/getFilms";

const FilmContext = createContext();

const FilmContextProvider = ({children, values}) => {
    const {filmsData, loading} = GetFilm()
    return <FilmContext.Provider value={{...values, filmsData, loading }}>{children}</FilmContext.Provider>
}

export {
    FilmContext,
    FilmContextProvider
}