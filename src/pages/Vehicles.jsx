import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import VehicleCard from "../components/VehicleCard";
import "../styles/Vehicles.css"

import swift from "../../assets/vehicles/swift.jpg"
import nexon from "../../assets/vehicles/nexon.jpg"
import bolero from "../../assets/vehicles/boleroNeo.jpg"
import creta from "../../assets/vehicles/creta.jpg"
import hyryder from "../../assets/vehicles/hyryder.jpg"
import dzire from "../../assets/vehicles/dzire.jpg"
import tigor from "../../assets/vehicles/tigor.jpg"
import xuv300 from "../../assets/vehicles/xuv300.jpg"
import i10 from "../../assets/vehicles/i10.jpg"
import kwid from "../../assets/vehicles/kwid.jpg"
import city from "../../assets/vehicles/city.jpg"
import rapid from "../../assets/vehicles/rapid.jpg"
import polo from "../../assets/vehicles/polo.jpg"
import magnite from "../../assets/vehicles/magnite.jpg"
import wagonr from "../../assets/vehicles/wagonr.jpg"
import altroz from "../../assets/vehicles/altroz.jpg"
import kuv100 from "../../assets/vehicles/kuv100.jpg"
import venue from "../../assets/vehicles/venue.jpg"
import sonet from "../../assets/vehicles/sonet.jpg"
import scorpio from "../../assets/vehicles/scorpio.jpg"

import star from "../../assets/pictures/star.png"

export default function Vehicles() {

    const images = [swift,
        nexon,
        bolero,
        creta,
        hyryder,
        dzire,
        tigor,
        xuv300,
        i10,
        kwid,
        city,
        rapid,
        polo,
        magnite,
        wagonr,
        altroz,
        kuv100,
        venue,
        sonet,
        scorpio]

    const url = "http://127.0.0.1:3000/api/data";

    const [data, setData] = useState([]);

    const fetchInfo = async () => {
        const res = await fetch(url);
        const cars = await res.json();
        return setData(cars);
    }

    useEffect(() => {
        fetchInfo()
        console.log("fetched vehicles data!")
    }, []);

    const [filters, setFilters] = useState({
        name: "",
        type: "",
        price1: false,
        price2: false,
        price3: false,
        price4: false,
        rating:0
    })

    const handleFilterChange = (event) => {

        const { name, value, checked } = event.target

        if (name === "price1" || name === "price2" || name === "price3" || name === "price4") {
            setFilters({ ...filters, [name]: checked })
        } else {
            setFilters({ ...filters, [name]: value })
        }
        console.log("Filter Data:", filters);
    }

    const vehiclecards = data.map(car => {

        let filtered = true
        let filteredName = true
        let filteredType = true
        let filteredPrice = true
        let filteredRating = true

        if (filters.name == "" || (car.brand.includes(filters.name) || car.model.includes(filters.name))) {
            filteredName = false
        }

        if (filters.type == "" || car.type == filters.type) {
            filteredType = false
        }

        if (!filters.price1 && !filters.price2 && !filters.price3 && !filters.price4) {
            filteredPrice = false
        } else {
            if (filters.price1 && (car.price <= 3000)) {
                filteredPrice = false
            }
            if (filters.price2 && (car.price >= 3000 && car.price <= 6000)) {
                filteredPrice = false
            }
            if (filters.price3 && (car.price >= 6000 && car.price <= 9000)) {
                filteredPrice = false
            }
            if (filters.price4 && (car.price >= 9000)) {
                filteredPrice = false
            }
        }

        if (filters.rating == 0 || car.rating >= filters.rating){
            filteredRating = false
        }

        if (!filteredName && !filteredType && !filteredPrice && !filteredRating) {
            filtered = false
        }

        if (!filtered) {

            const keyProp = `${car.brand}-${car.model}`;
            return (
                <Link key={keyProp} to={`${car.key}/${car.brand}/${car.model}/${car.type}/${car.price}/${car.year}/${car.fuel_type}/${car.rating}`}>
                    <VehicleCard carKey={car.key} brand={car.brand} model={car.model} img={images[car.key]} price={car.price} />
                </Link>
            )
        }
    })

    function handleDataRefresh(){
        fetchInfo()
        console.log("refreshed data!")
    }

    function handleFilterRefresh(){
        setFilters({
            name: "",
            type: "",
            price1: false,
            price2: false,
            price3: false,
            price4: false,
            rating:0
        })


    }

    return (
        <section className="vehicles-page">
            <div className="vehicle-cards">
                {vehiclecards}
            </div>

            <div className="filters-panel">

                <div className="reset-buttons">
                    <div className="reset-button" onClick={handleDataRefresh}>Refresh Data</div>
                    <div className="reset-button" onClick={handleFilterRefresh}>Reset Filters</div>
                </div>

                <form>
                    <div className="search-car">
                        <input className="filter-search"
                            name="name"
                            placeholder="search model / manufacturer"
                            value={filters.name}
                            onChange={handleFilterChange}
                        />
                    </div>
                    <div className="car-type">
                        <div className="filter-header">Car Type</div>
                        <div>
                            <input 
                            type="radio" 
                            id="hatchback" 
                            name="type" 
                            value="Hatchback" 
                            onChange={handleFilterChange} />
                            <label htmlFor="hatchback" className="filter-options">Hatchback</label>
                        </div>
                        <div>
                            <input 
                            type="radio" 
                            id="sedan" 
                            name="type" 
                            value="Sedan" 
                            onChange={handleFilterChange} />
                            <label htmlFor="sedan" className="filter-options">Sedan</label>
                        </div>
                        <div>
                            <input 
                            type="radio" 
                            id="suv" 
                            name="type" 
                            value="SUV" 
                            onChange={handleFilterChange} />
                            <label htmlFor="suv" className="filter-options">SUV</label>
                        </div>
                    </div>
                    <div className="price-range">
                        <div className="filter-header">Price Range</div>
                        <div>
                            <input 
                            type="checkbox" 
                            id="price-range-1" 
                            name="price1" 
                            onChange={handleFilterChange} />
                            <label htmlFor="price-range-1" className="filter-options">less than 3000</label>
                        </div>
                        <div>
                            <input 
                            type="checkbox" 
                            id="price-range-2" 
                            name="price2" 
                            onChange={handleFilterChange} />
                            <label htmlFor="price-range-2" className="filter-options">3000 - 6000</label>
                        </div>
                        <div>
                            <input 
                            type="checkbox" 
                            id="price-range-3" 
                            name="price3" 
                            onChange={handleFilterChange} />
                            <label htmlFor="price-range-3" className="filter-options">6000 - 9000</label>
                        </div>
                        <div>
                            <input 
                            type="checkbox" 
                            id="price-range-4" 
                            name="price4" 
                            onChange={handleFilterChange} />
                            <label htmlFor="price-range-4" className="filter-options">9000+</label>
                        </div>
                    </div>
                    <div className="car-rating">
                        <div className="filter-header">Ratings</div>
                        <div className="rating-section">
                            <input 
                            type="radio" 
                            id="rate5" 
                            name="rating" 
                            value={5} 
                            onChange={handleFilterChange} />
                            <label htmlFor="rate1" className="rating-star filter-options">
                                <img src={star} alt="rating star" className="star" />
                                <img src={star} alt="rating star" className="star" />
                                <img src={star} alt="rating star" className="star" />
                                <img src={star} alt="rating star" className="star" />
                                <img src={star} alt="rating star" className="star" />
                            </label>
                        </div>
                        <div className="rating-section">
                            <input 
                            type="radio" 
                            id="rate5"
                            name="rating" 
                            value={4} 
                            onChange={handleFilterChange} />
                            <label htmlFor="rate1" className="rating-star filter-options">
                                <img src={star} alt="rating star" className="star" />
                                <img src={star} alt="rating star" className="star" />
                                <img src={star} alt="rating star" className="star" />
                                <img src={star} alt="rating star" className="star" />
                            </label>
                        </div>
                        <div className="rating-section">
                            <input 
                            type="radio" 
                            id="rate5" 
                            name="rating" 
                            value={3} 
                            onChange={handleFilterChange} />
                            <label htmlFor="rate1" className="rating-star filter-options">
                                <img src={star} alt="rating star" className="star" />
                                <img src={star} alt="rating star" className="star" />
                                <img src={star} alt="rating star" className="star" />
                            </label>
                        </div>
                        <div className="rating-section">
                            <input 
                            type="radio" 
                            id="rate5" 
                            name="rating" 
                            value={2} 
                            onChange={handleFilterChange} />
                            <label htmlFor="rate1" className="rating-star filter-options">
                                <img src={star} alt="rating star" className="star" />
                                <img src={star} alt="rating star" className="star" />
                            </label>
                        </div>
                        <div className="rating-section">
                            <input 
                            type="radio" 
                            id="rate5" 
                            name="rating" 
                            value={1} 
                            onChange={handleFilterChange} />
                            <label htmlFor="rate1" className="rating-star filter-options">
                                <img src={star} alt="rating star" className="star" />
                            </label>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
}