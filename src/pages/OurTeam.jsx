import { Link } from "react-router-dom"

import "../styles/OurTeam.css"
import Aditya from "../../assets/pictures/Aditya.jpeg"
import Sarthak from "../../assets/pictures/Sarthak.jpg"

export default function OurTeam(){
    return(
        <>
        <section className="team-member">
            <img className="member-img" src={Sarthak} alt="" />
            <div className="member-text">
                <div className="member-name">SARTHAK JINDAL</div>
                <div className="member-info">
                    <div className="member-degree">B.tech Student in VIT, Vellore</div>
                    <Link className="member-linkedin" to="https://github.com/sarthak23j">GitHub</Link>
                </div>
            </div>
        </section><section className="team-member">
            <img className="member-img" src={Aditya} alt="" />
            <div className="member-text">
                <div className="member-name">ADITYA SINGH</div>
                <div className="member-info">
                    <div className="member-degree">B.tech Student in VIT, Vellore</div>
                    <Link className="member-linkedin" to="https://www.linkedin.com/in/aditya-singh-8a1953235">LinkedIn</Link>
                </div>
            </div>
        </section>
        </>
    )
}