import React from "react"
import {motion} from "framer-motion";
import "./film.scss"

const Film = ({id, selectedId, activeId, onClick, filmData, index, ...props}) => {
    const hiddenVariant = +selectedId !== index && +selectedId < index ? "hiddenLeft" : "hiddenRight"

    const boxesVariants = {
        static: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {delay: 0.2}
        },
        show: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: { type: "Inertia"}
        },
        hiddenLeft: {
            opacity: 0,
            x: 60,
            y: 200,
            transition: {duration: 0.4}
        },
        hiddenRight: {
            opacity: 0,
            x: -60,
            y: 200,
            transition: {duration: 0.4}
        }
    }

    return (
        <motion.div
            initial={selectedId === id || activeId === id ? "static" : hiddenVariant}
            animate={selectedId === id || activeId === id ? false :"show"}
            exit={selectedId === id || activeId === id ? "static" : hiddenVariant}
            variants={boxesVariants}
            className={"film"}
        >
            <motion.div
                layoutId={`film-image-${id}`}
                className={"film--image-conatiner"}
                onClick={onClick}
            >
                <motion.img src={filmData.image} alt="film" className={"film--image-wrapper"}/>
            </motion.div>
            <motion.p className={"film--title"} layoutId={`film-title-${id}`}>
                {filmData.title}
            </motion.p>
            <motion.p className={"film--year"} layoutId={`film-year-${id}`}>
                year: {filmData.year}
            </motion.p>
        </motion.div>
    )
}

export default Film