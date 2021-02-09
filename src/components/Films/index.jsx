import {useContext, useState} from "react";
import {useHistory} from "react-router-dom";
import {motion} from "framer-motion";
import Helmet from "react-helmet";
import {FilmContext} from "../../context/filmContext";
import Film from "./film";
import "./films.scss";


const Films = () => {
    const history = useHistory();
    const [selectedId, setSelectedId] = useState(null);
    const {activeId, filmsData, loading} = useContext(FilmContext)

    if (loading) {
        return <div>Loading...</div>
    }

    return (
        <>
            <Helmet>
                <title>Films</title>
            </Helmet>
            <motion.div
                exit={false}
                initial={{position: "absolute"}}
                animate={{position: "static"}}
                className={"films"}>
                <motion.div
                    className="films--count"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                >
                    {filmsData.length} <span>Films</span>
                </motion.div>
                <div className={"films--items"}>
                    {
                        filmsData.map(({id, ...filmData}, index) => {
                            return (
                                <Film
                                    key={id}
                                    id={id}
                                    index={index}
                                    selectedId={selectedId}
                                    activeId={activeId}
                                    filmData={filmData}
                                    onClick={() => {
                                        setSelectedId(index)
                                        history.push(`/${id}`)
                                    }}
                                />
                            )
                        })
                    }
                </div>
            </motion.div>
        </>
    )
}

export default Films