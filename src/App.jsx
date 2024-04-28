import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./Layout"
import Home from "./pages/Home"
import Test from "./components/Test"
import Vehicles from "./pages/Vehicles"
import CarPage from "./pages/CarPage"
import OurTeam from "./pages/OurTeam"
import ContactUs from "./pages/ContactUs"
import BookNow from "./pages/BookNow"
import "./globalStyles.css"

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />} >
                    <Route index element={<Home />} />
                    <Route path="/vehicles" element={<Vehicles />} />
                    <Route path="/vehicles/:carId" element={<CarPage />}/>
                    <Route path="/our-team" element={<OurTeam />} />
                    <Route path="/contact-us" element={<ContactUs />} />
                    <Route path="/book-now" element={<BookNow />} />
                </Route>
            </Routes>
        </BrowserRouter>

    )
}