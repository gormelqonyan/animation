import React, {forwardRef} from "react"
import {motion} from "framer-motion";
import "./film.scss"

const Film = forwardRef(({id, selectedId, activeId, onClick, filmData, index, ...props}, ref) => {
    const hiddenVariant = +selectedId !== index && +selectedId < index ? "hiddenLeft" : "hiddenRight"

    const boxesVariants = {
        static: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {delay: 0}
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
            ref={ref}
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
                transition={{duration: 0.5}}
            >
                <motion.img src={filmData.image} alt="film" className={"film--image-wrapper"}/>
            </motion.div>
            <motion.p
                transition={{duration: 0.5}}
                className={"film--title"}
                layoutId={`film-title-${id}`}
            >
                {filmData.title}
            </motion.p>
            <motion.p
                transition={{duration: 0.5}}
                className={"film--year"}
                layoutId={`film-year-${id}`}
            >
                year: {filmData.year}
            </motion.p>
        </motion.div>
    )
})

export default Film