import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./Layout"
import Home from "./pages/Home"
import Vehicles from "./pages/Vehicles"
import CarPage from "./pages/CarPage"
import OurTeam from "./pages/OurTeam"
import ContactUs from "./pages/ContactUs"
import "./globalStyles.css"

export default function App() {

    const dataUri = process.env.REACT_APP_DATA_URL
    const purchaseUri = process.env.REACT_APP_PURCHASE_URL
    const feedbackUri = process.env.REACT_APP_FEEDBACK_URL


    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />} >
                    <Route index element={<Home />} />
                    <Route path="/vehicles" element={<Vehicles uri = {dataUri} />} />
                    <Route path="/vehicles/:key" element={<CarPage puri = {purchaseUri} duri = {dataUri} />}/>
                    <Route path="/our-team" element={<OurTeam />} />
                    <Route path="/contact-us" element={<ContactUs uri = {feedbackUri} />} />
                </Route>
            </Routes>
        </BrowserRouter>

    )
}