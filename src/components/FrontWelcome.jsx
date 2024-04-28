import HomeCar from "../../assets/pictures/MercedesSuv.png"

export default function FrontWelcome(){
    return(
        <section className="front-welcome">
            <div className="front-text">
                <h3 className="front-text-header">Unlock Your Next Journey: Drive With Confidence, Rent with <span className="blue-text">Ease!</span></h3>
                <p className="front-text-info">Embark on Your Next Adventure with Confidence: Wherever You Go, Whatever You Need, Renting with Us is Your Passport to Seamless Travel Experiences!</p>
            </div>
            <img className="front-car" src={HomeCar} alt="merc" /> 
        </section>
    )
}