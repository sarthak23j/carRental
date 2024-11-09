import { useLocation, Link } from "react-router-dom"
import "../styles/Header.css"

import logo from "/pictures/logo.jpg"

export default function Header() {

    const location = useLocation();

    return (
        <header>

            <Link to="/">
                <img className="logo" src={logo} alt="logo" />
            </Link>
            
            <nav className="nav-bar">
                <Link to="/">
                    <div className={location.pathname == "/" ?
                    "nav-items blue-text" :
                    "nav-items"}>Home</div>
                </Link>

                <Link to="/vehicles">
                    <div className={location.pathname == "/vehicles" ?
                    "nav-items blue-text" :
                    "nav-items"}>Vehicles</div>
                </Link>

                <Link to="/our-team">
                    <div className={location.pathname == "/our-team" ?
                    "nav-items blue-text" :
                    "nav-items"}>Our Team</div>
                </Link>

                <Link to="/contact-us">
                    <div className={location.pathname == "/contact-us" ?
                        "nav-items blue-text" :
                        "nav-items"}>Contact Us</div>
                </Link>
            </nav>
        </header>
    )
}