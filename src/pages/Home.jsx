import "../styles/Home.css"

// import HomeCar from "../../assets/pictures/MercedesSuv.png"
import HomeVideo from "/pictures/cardrive.mp4"
import Review1 from "/pictures/cars1.png"
import Review2 from "/pictures/cars2.png"
import Reviewer1 from "/pictures/Harry.png"
import Reviewer2 from "/pictures/Ron.png"

import FrontWelcome from "../components/FrontWelcome"

// function FrontWelcome(){
//     return(
//         <section className="front-welcome">
//             <div className="front-text">
//                 <h3 className="front-text-header">Unlock Your Next Journey: Drive With Confidence, Rent with <span className="blue-text">Ease!</span></h3>
//                 <p className="front-text-info">Embark on Your Next Adventure with Confidence: Wherever You Go, Whatever You Need, Renting with Us is Your Passport to Seamless Travel Experiences!</p>
//             </div>
//             <img className="front-car" src={HomeCar} alt="merc" /> 
//         </section>
//     )
// }

function VideoPlayer(){
    return(
        <section className="home-video-player-section">
            <video muted autoPlay loop id="home-video-player">
                <source src={HomeVideo} />
            </video>

            <section className="pointers-home">
                <div className="each-pointer-home">
                    <div className="home-pointer-header">BEST PRICE GUARANTEE</div>
                    <div className="home-pointer-info">If you find a lower price, we'll refund the difference</div>
                </div>
                <div className="each-pointer-home">
                    <div className="home-pointer-header">NO CANCELLATION FEES</div>
                    <div className="home-pointer-info">Up to 2 days before collecting your vehicle</div>
                </div>
                <div className="each-pointer-home">
                    <div className="home-pointer-header">NO HIDDEN EXTRAS TO PAY</div>
                    <div className="home-pointer-info">Theft and damage cover included</div>
                </div>
            </section>
        </section>
    )
}

function Reviews(){
    return(
        <section className="home-reviews-tab">
            <div className="home-reviews-header">
                <div className="home-reviews-header-header1">REVIEWED BY PEOPLE</div>
                <div className="home-reviews-header-header2">CLIENT'S TESTIMONIALS</div>
                <div className="home-reviews-header-text">Discover the positive impact we've made on our clients by reading through their testimonials. Our clients have experienced our service and results, and they're eager to share their positive experiences with you.</div>
            </div>

            <div className="home-reviews">
                <div className="home-review-text">
                    <div className="home-review-header">Enjoy your holidays with the best rental cars</div>
                    <div className="home-review-info">"We rented a car from this website and had an amazing experience! The booking was easy and the rental rates were very affordable."</div>
                    <div className="home-reviewer">
                        <img src={Reviewer1} alt="Reviewer 1" className="home-reviewer-pic" />
                        <div className="home-reviewer-name">Parry Hotter</div>
                    </div>
                </div>
                <img src={Review1} alt="Review 1" className="home-review-pic" />
            </div>

            <div className="home-reviews">
                <img src={Review2} alt="Review 2" className="home-review-pic" />
                <div className="home-review-text">
                    <div className="home-review-header">Your satisfaction is our main aim</div>
                    <div className="home-review-info">"The car was in great condition and made our trip even better. Highly recommend for this car rental website!"</div>
                    <div className="home-reviewer">
                        <img src={Reviewer2} alt="Reviewer 2" className="home-reviewer-pic" />
                        <div className="home-reviewer-name">Ron Rizzly</div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default function Home(){
    return(
        <main>
            <FrontWelcome />
            {VideoPlayer()}
            {Reviews()}
        </main>
    )
}