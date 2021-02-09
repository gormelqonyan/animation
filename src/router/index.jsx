import {Route, Switch, useLocation} from "react-router-dom";
import {AnimatePresence} from "framer-motion";
import {FilmContextProvider} from "../context/filmContext";
import {useState} from "react"
import Films from "../components/Films";
import FilmPage from "../components/FilmPage";

const Router = () => {
    const location = useLocation()
    const [activeId, setActiveId] = useState(null)
    return (
        <FilmContextProvider values={{activeId, setActiveId}}>
            <AnimatePresence>
                <Switch location={location} key={location.pathname}>
                    <Route path={"/"}  exact component={Films} />
                    <Route path={"/:id"} component={FilmPage} />
                </Switch>
            </AnimatePresence>
        </FilmContextProvider>
    )
}

export default Router