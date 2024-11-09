import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./Layout"
import Home from "./pages/Home"
import Vehicles from "./pages/Vehicles"
import CarPage from "./pages/CarPage"
import OurTeam from "./pages/OurTeam"
import ContactUs from "./pages/ContactUs"
import "./globalStyles.css"

export default function App() {

    const uri = process.env.REACT_APP_DATA_URL

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />} >
                    <Route index element={<Home />} />
                    <Route path="/vehicles" element={<Vehicles uri = {uri} />} />
                    <Route path="/vehicles/:key" element={<CarPage uri = {uri} />}/>
                    <Route path="/our-team" element={<OurTeam />} />
                    <Route path="/contact-us" element={<ContactUs uri = {uri} />} />
                </Route>
            </Routes>
        </BrowserRouter>

    )
}