import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import "../styles/CarPage.css"

import star from "/pictures/star.png"


export default function CarPage() {

    const { key } = useParams()

    const url = "http://127.0.0.1:3000/api/data";

    const [data, setData] = useState([]);

    const fetchInfo = async () => {
        const res = await fetch(url);
        const cars = await res.json();
        return setData(cars.find(car => car.key == key));
    }

    useEffect(() => {
        fetchInfo()
        console.log("fetched vehicles data!")
    }, []);

    let brand = data.brand
    let model = data.model
    let type = data.type
    let year = data.year
    let price = data.price
    let fuel = data.fuel_type
    let rating = data.rating
    let img64 = data.img64

    const stars = Array(parseInt(rating) || 0).fill(star);

    let x = 1
    function keyGen() {
        x = x + 1
        return x
    }

    const [purchaseData, setPurchaseData] = useState({
        car:{
            brand:brand,
            model:model,
            type:type,
            year:year,
            price:price,
            fuel:fuel,
            rating:rating
        },
        name: "",
        email: "",
        number: "",
        fromDate: "",
        toDate: "",
    })

    const handlePurchaseSubmit = async (event) => {
        event.preventDefault();

        const purchasedt = { ...purchaseData }

        const response = await fetch("http://127.0.0.1:3000/api/purchase",{
            method: "POST",
            headers: {"Content-Type": "application/json" },
            body: JSON.stringify(purchasedt)
        })

        if(response.ok){
            setPurchaseData({
                car: {
                  brand: "",
                  model: "",
                  type: "",
                  year: "",
                  price: "",
                  fuel: "",
                  rating: ""
                },
                name: "",
                email: "",
                number: "",
                fromDate: "",
                toDate: "",
                pickup: "",
                drop: ""
              });
    
            window.alert("Your feedback has been successfully submitted! Our team will get back to you shortly.")
        } else {
            console.error("Error submitting feedback", response)
            window.alert("An error occurred while submitting feedback, please try again!")
        }
    };

    function handlePurchaseChange(event) {
        setPurchaseData({ ...purchaseData, [event.target.name]: event.target.value });
    }
    return (
        <>
            <section className="carpage">
                <img src={`data:image/png;base64,${img64}`} alt="car image" className="carpage-img" />
                <div className="carpage-data">
                    <div className="carpage-brand">{brand}</div>
                    <div className="carpage-model blue-text">{model}</div>

                    <div className="carpage-info">
                        <div className="carpage-info-l">
                            <div className="carpage-infodata">Price per day </div>
                            <div className="carpage-infodata">Car Type </div>
                            <div className="carpage-infodata">Fuel Type </div>
                            <div className="carpage-infodata">Manufacturing Year </div>
                            <div className="carpage-infodata">Customer Ratings </div>
                        </div>
                        <div className="carpage-info-m">
                            <div className="carpage-infodata">:</div>
                            <div className="carpage-infodata">:</div>
                            <div className="carpage-infodata">:</div>
                            <div className="carpage-infodata">:</div>
                            <div className="carpage-infodata">:</div>
                        </div>
                        <div className="carpage-info-r">
                            <div className="carpage-infodata">{`${price} Rs / day`}</div>
                            <div className="carpage-infodata">{type}</div>
                            <div className="carpage-infodata">{fuel}</div>
                            <div className="carpage-infodata">{year}</div>
                            <div className="carpage-infodata">
                                {stars.map((starIcon) => (
                                    <img key={keyGen()} src={starIcon} alt="star" className="rate-star" />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="book-now">
                <div className="book-now-header">
                    Book Your Ride <span className="blue-text">Now!</span>
                </div>
                <form onSubmit={handlePurchaseSubmit}>
                    <div className="inputs-line-1">
                        <input className="purchase-inputs"
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={purchaseData.name}
                            onChange={handlePurchaseChange} />

                        <input className="purchase-inputs"
                            type="text"
                            name="number"
                            placeholder="Number"
                            value={purchaseData.number}
                            onChange={handlePurchaseChange} />

                        <input className="purchase-inputs"
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={purchaseData.email}
                            onChange={handlePurchaseChange} />
                    </div>

                    <div className="inputs-line-2">
                        <input className="purchase-inputs"
                            type="date"
                            name="fromDate"
                            value={purchaseData.fromDate}
                            onChange={handlePurchaseChange} />

                        <input className="purchase-inputs"
                            type="date"
                            name="toDate"
                            value={purchaseData.toDate}
                            onChange={handlePurchaseChange} />
                    </div>

                    <div className="inputs-line-3">
                        <textarea className="purchase-inputs"
                            name="pickup"
                            placeholder="Pick up point"
                            value={purchaseData.pickup}
                            onChange={handlePurchaseChange} />

                        <textarea className="purchase-inputs"
                            name="drop"
                            placeholder="Drop off point"
                            value={purchaseData.drop}
                            onChange={handlePurchaseChange} />
                    </div>

                    <button className="purchase-button">Confirm Purchase!</button>
                </form>
            </section>
        </>
    )
}