import {useContext, useEffect} from "react";
import {useParams} from "react-router-dom";
import Helmet from "react-helmet";
import {motion} from "framer-motion"
import {FilmContext} from "../../context/filmContext";
import "./film-page.scss"


const FilmPage = () => {
    const params = useParams()
    const {setActiveId, filmsData, loading} = useContext(FilmContext)
    useEffect(() => {
        setActiveId(params.id)
    }, [params.id, setActiveId]);

    const selectedFilm = filmsData.find(({id}) => params.id === id );

    if (loading) {
        return <div>Loading...</div>
    }

    return (
        <>
            <Helmet>
                <title>{selectedFilm?.title}</title>
            </Helmet>
            <motion.div
                className={"film-page"}
                layout
            >
                <motion.div
                    className={"film film-page--left-content"}
                >
                    <motion.div
                        layoutId={`film-image-${params.id}`}
                        className={"film--image-conatiner"}
                    >
                        <motion.img src={selectedFilm?.image} alt="film" className={"film--image-wrapper"}/>
                    </motion.div>
                    <motion.p className={"film--title"} layoutId={`film-title-${params.id}`}>
                        {selectedFilm?.title}
                    </motion.p>
                    <motion.p className={"film--year"} layoutId={`film-year-${params.id}`}>
                        year: {selectedFilm?.year}
                    </motion.p>
                </motion.div>

                <motion.div>
                    <div className={"film-page--slider-box"}>
                        {
                            new Array(4).fill("").map((_, index, arr) => {
                                return (
                                    <motion.div
                                        initial={{opacity: 0, x: `${(arr.length - index - 1) * 100}%`}}
                                        animate={{opacity: 0.7, x: 0}}
                                        exit={{opacity: 0, x: `${(arr.length - index - 1) * 100}%`}}
                                        transition={{duration: 0.4}}
                                        className={"film--image-conatiner film-page--slider-box-item"}
                                    >
                                        <motion.img src={selectedFilm?.image} alt="film" className={"film--image-wrapper"}/>
                                    </motion.div>
                                )
                            })
                        }
                    </div>

                    {
                        new Array(3).fill("").map((_, index) => {
                            return (
                                <motion.div
                                    initial={{opacity: 0, y: 150 }}
                                    animate={{opacity: 1, y: 0, transition: {duration: 0.4, delay: (index + 2) / 10}}}
                                    exit={{opacity: 0, y: 150, transition: {duration: 0.4}}}
                                >
                                    <motion.h3 className={"film-page--about-title"}>About {selectedFilm.title}</motion.h3>
                                    <motion.p className={"film-page--about-text"}>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus quae quis ratione vel vitae. Atque expedita explicabo fuga harum minima modi nulla placeat quaerat repellendus voluptate. Fuga hic maiores voluptatem?
                                    </motion.p>
                                    <motion.p className={"film-page--about-text"}>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus quae quis ratione vel vitae. Atque expedita explicabo fuga harum minima modi nulla placeat quaerat repellendus voluptate. Fuga hic maiores voluptatem?
                                    </motion.p>
                                </motion.div>
                            )
                        })
                    }
                </motion.div>
            </motion.div>
         </>
    )
}

export default FilmPage