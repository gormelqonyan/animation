import Header from "../Header";

const Container = ({children}) => {
    return (
        <div className="container">
            <Header/>
            <div className={"wrapper"}>
                {children}
            </div>
        </div>
    )
}

export default Container