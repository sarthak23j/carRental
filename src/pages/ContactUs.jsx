import { useState } from "react"

import "../styles/ContactUs.css"
import Address from "/pictures/address.png"
import Email from "/pictures/email.png"
import Clock from "/pictures/clock.png"
import Phone from "/pictures/phone.png"



export default function ContactUs() {

    function ContactCard(Props) {
        return (
            <section className="contact-card">
                <img className="card-img" src={Props.img} alt="icon" />
                <div className="card-header">{Props.header}</div>
                <div className="card-info1">{Props.info1}</div>
                <div className="card-info2">{Props.info2}</div>
            </section>
        )
    }

    const ContactData = [{
        key: 1,
        img: Address,
        header: "Address",
        info1: "640 Chestnut Ridge Road,",
        info2: "Spring Valley, NY 10977"
    }, {
        key: 2,
        img: Email,
        header: "Email",
        info1: "Contact@carlyrent.com",
        info2: "Support@carlyrent.com"
    }, {
        key: 3,
        img: Phone,
        header: "Phone",
        info1: "+(62) 800-567-8990",
        info2: "+(91) 333-555-8990"
    }, {
        key: 4,
        img: Clock,
        header: "Working Hours",
        info1: "Mon - Fri: 9 AM - 11 PM",
        info2: "Sat - Sun: 9 AM - 5 AM"
    }]

    const CreateCards = ContactData.map(data => (

        <ContactCard
            key={data.key}
            img={data.img}
            header={data.header}
            info1={data.info1}
            info2={data.info2}
        />
    ))

    const [feedbackData, setFeedbackData] = useState({
        name: "",
        email: "",
        number: "",
        subject: "",
        message: "",
    });

    const handleFeedbackChange = (event) => {
        setFeedbackData({ ...feedbackData, [event.target.name]: event.target.value });
    };

    const handleFeedbackSubmit = async (event) => {
        event.preventDefault();

        const fbd = { ...feedbackData }

        const response = await fetch("http://127.0.0.1:3000/api/feedback",{
            method: "POST",
            headers: {"Content-Type": "application/json" },
            body: JSON.stringify(fbd)
        })

        if(response.ok){
            setFeedbackData({
                name: "",
                email: "",
                number: "",
                subject: "",
                message: "",
            })
    
            window.alert("Your feedback has been successfully submitted! Our team will get back to you shortly.")
        } else {
            console.error("Error submitting feedback", response)
            window.alert("An error occurred while submitting feedback, please try again!")
        }
    };

    return (
        <section className="contact-us">
            <h1 className="contact-header">Let us help <span className="blue-text">you</span></h1>

            <div className="contact-cards">
                {CreateCards}
            </div>

            <h1 className="contact-header">Get in <span className="blue-text">touch</span></h1>


            <form onSubmit={handleFeedbackSubmit} className="feedback-form">
                <div className="feedback-inputs">
                    <input
                        className="feedback-inputs-1 feedback-input-format"
                        name="name"
                        placeholder="Full Name"
                        onChange={handleFeedbackChange}
                        value={feedbackData.name} />
                    <input
                        className="feedback-inputs-1 feedback-input-format"
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        onChange={handleFeedbackChange}
                        value={feedbackData.email} />
                </div>
                <div className="feedback-inputs">
                    <input
                        className="feedback-inputs-2 feedback-input-format"
                        inputMode="numeric"
                        name="number"
                        placeholder="Mobile Number"
                        onChange={handleFeedbackChange}
                        value={feedbackData.number} />
                    <input
                        className="feedback-inputs-2 feedback-input-format"
                        name="subject"
                        placeholder="Subject"
                        onChange={handleFeedbackChange}
                        value={feedbackData.subject} />
                </div>
                <textarea
                    className="feedback-inputs-3 feedback-input-format"
                    name="message"
                    placeholder="Your message"
                    cols="30"
                    rows="10"
                    onChange={handleFeedbackChange}
                    value={feedbackData.message} />
                <div className="hide" />
                <button className="feedback-submit">Submit</button>
            </form>
        </section>
    )
}