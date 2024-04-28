import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import "../styles/CarPage.css"

import Swift from "../../assets/vehicles/swift.jpg"
import Nexon from "../../assets/vehicles/nexon.jpg"
import Bolero from "../../assets/vehicles/boleroNeo.jpg"
import Creta from "../../assets/vehicles/creta.jpg"
import Hyryder from "../../assets/vehicles/hyryder.jpg"
import Dzire from "../../assets/vehicles/dzire.jpg"
import Tigor from "../../assets/vehicles/tigor.jpg"
import XUV300 from "../../assets/vehicles/xuv300.jpg"
import i10 from "../../assets/vehicles/i10.jpg"
import Kwid from "../../assets/vehicles/kwid.jpg"
import City from "../../assets/vehicles/city.jpg"
import Rapid from "../../assets/vehicles/rapid.jpg"
import Polo from "../../assets/vehicles/polo.jpg"
import Magnite from "../../assets/vehicles/magnite.jpg"
import WagonR from "../../assets/vehicles/wagonr.jpg"
import Altroz from "../../assets/vehicles/altroz.jpg"
import KUV100 from "../../assets/vehicles/kuv100.jpg"
import Venue from "../../assets/vehicles/venue.jpg"
import Sonet from "../../assets/vehicles/sonet.jpg"
import Scorpio from "../../assets/vehicles/scorpio.jpg"

import star from "../../assets/pictures/star.png"


export default function CarPage() {

    const images = [Swift,
        Nexon,
        Bolero,
        Creta,
        Hyryder,
        Dzire,
        Tigor,
        XUV300,
        i10,
        Kwid,
        City,
        Rapid,
        Polo,
        Magnite,
        WagonR,
        Altroz,
        KUV100,
        Venue,
        Sonet,
        Scorpio]

    const { key, model, brand, type, price, fuel, year, rating } = useParams()

    const stars = Array(parseInt(rating) || 0).fill(star);

    let x = 1
    function keyGen() {
        x = x + 1
        return x
    }

    return (
        <>
            <section className="carpage">
                <img src={images[key]} alt="car image" className="carpage-img" />
                <div className="carpage-data">
                    <div className="carpage-brand">{brand}</div>
                    <div className="carpage-model blue-text">{model}</div>

                    <div className="carpage-info">
                        <div className="carpage-info-l">
                            <div className="carpage-price">Price per day </div>
                            <div className="carpage-type">Car Type </div>
                            <div className="carpage-fuel">Fuel Type </div>
                            <div className="carpage-year">Model Manufacturing year </div>
                            <div className="carpage-rating">Customer Ratings </div>
                        </div>
                        <div className="carpage-info-m">
                            <div className="carpage-price">:</div>
                            <div className="carpage-type">:</div>
                            <div className="carpage-fuel">:</div>
                            <div className="carpage-year">:</div>
                            <div className="carpage-rating">:</div>
                        </div>
                        <div className="carpage-info-r">
                            <div className="carpage-price">{`${price} Rs / day`}</div>
                            <div className="carpage-type">{type}</div>
                            <div className="carpage-fuel">{fuel}</div>
                            <div className="carpage-year">{year}</div>
                            <div className="carpage-rating">
                                {stars.map((starIcon) => (
                                    <img key={keyGen()} src={starIcon} alt="star" className="rate-star" />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}