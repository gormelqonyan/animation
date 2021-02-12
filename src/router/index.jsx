import {Route, Switch, useLocation} from "react-router-dom";
import {AnimatePresence} from "framer-motion";
import {FilmContextProvider} from "../context/filmContext";
import {createRef, useEffect, useState} from "react"
import Films from "../components/Films";
import FilmPage from "../components/FilmPage";
import Container from "../components/Container";
import GetFilm from "../hooks/getFilms";

const Router = () => {
    const location = useLocation()
    const [activeId, setActiveId] = useState(null)
    const [elRefs, setElRefs] = useState([]);
    const {filmsData, loading} = GetFilm()

    useEffect(() => {
        setElRefs(elRefs => (
            Array(filmsData.length).fill().map((_, i) => elRefs[i] || createRef())
        ));
    }, [filmsData]);

    return (
        <Container>
            <FilmContextProvider values={{activeId, setActiveId, elRefs, setElRefs, loading, filmsData}}>
                <AnimatePresence>
                    <Switch location={location} key={location.pathname}>
                        <Route path={"/"}  exact component={Films} />
                        <Route path={"/:id"} component={FilmPage} />
                    </Switch>
                </AnimatePresence>
            </FilmContextProvider>
        </Container>

    )
}

export default Router