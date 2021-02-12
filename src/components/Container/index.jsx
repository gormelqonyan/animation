import {forwardRef} from "react"

import Header from "../Header";

const Container = forwardRef(({children}, ref) => {
    return (
        <div className="container" ref={ref}>
            <Header/>
            <div className={"wrapper"}>
                {children}
            </div>
        </div>
    )
})

export default Container