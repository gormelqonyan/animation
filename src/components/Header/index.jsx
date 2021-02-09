import {useHistory} from "react-router-dom"
import "./header.scss"

const Header = () => {
    const history = useHistory()
    return (
        <div className="header">
            <nav className="header--nav">
                <ul className="header--nav__menu">
                    <li className="header--nav__menu-item active" onClick={() => history.push("/")}>Films Room</li>
                    <li className="header--nav__menu-item">Contact Us</li>
                </ul>
            </nav>
            <h3 className="header--logo">MUSICROOM</h3>
            <div className="header--menu">
                <span className="header--menu__title">MENU</span>
                <div className="header--menu__bar">
                    <span/>
                    <span/>
                    <span/>
                </div>
            </div>
        </div>
    )
}

export default Header