import "../styles/VehicleCard.css"

export default function VehicleCard(Props){

    return (
        <div className="card-prop">
            <img src={`data:image/png;base64,${Props.img}`} alt="vehicle image" className="vehicle-img" />
            <div className="vehicle-name">
                {Props.brand + " "} <span className="blue-text">{Props.model}</span>
            </div>
            <div className="vehicle-price dblue-text">{"Price: " + Props.price + "/day"}</div>
        </div>
    )
}