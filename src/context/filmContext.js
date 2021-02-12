import {createContext, useState} from "react";
import GetFilm from "../hooks/getFilms";

const FilmContext = createContext();

const FilmContextProvider = ({children, values}) => {

    return <FilmContext.Provider value={{...values }}>{children}</FilmContext.Provider>
}

export {
    FilmContext,
    FilmContextProvider
}