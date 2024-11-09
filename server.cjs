const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());
const port = 3000;

const uri = "mongodb+srv://sarthak23j:MongoPW%4023@cluster0.s6utd.mongodb.net/CarRental";
mongoose.connect(uri)
    .then(() => console.log('Connected to database!'))
    .catch(err => console.error(`MONGO CONNECTION ERROR OCCURRED :::::: \n ${err}`));

// Define the car schema with the img64 field
const carSchema = new mongoose.Schema({
    brand: { type: String, required: true },
    model: { type: String, required: true },
    type: { type: String, required: true },
    price: { type: Number, required: true },
    year: { type: Number, required: true },
    fuel_type: { type: String, required: true },
    img64: { type: String, required: true } // Include the base64 image field
});

const Car = mongoose.model('cars', carSchema);

// GET endpoint to retrieve car data, including images
app.get("/api/data", async (req, res) => {
    console.log("data called");
    try {
        const cars = await Car.find({}); // Retrieve all cars including img64
        res.json(cars); // Send the cars data as JSON, including the base64 images
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Error fetching data' });
    }
});

// Feedback schema and model
const feedbackSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    number: { type: String },
    subject: { type: String, required: true },
    message: { type: String, required: true },
});

const Feedback = mongoose.model("feedbacks", feedbackSchema);

app.post("/api/feedback", async (req, res) => {
    try {
        const feedback = new Feedback(req.body);
        await feedback.save();
        res.json({ message: "Feedback submitted successfully!" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error submitting, code 500" });
    }
});

// Purchase schema and model
const purchaseSchema = new mongoose.Schema({
    car: {
        brand: { type: String, required: true },
        model: { type: String, required: true },
        type: { type: String, required: true },
        year: { type: Number, required: true },
        price: { type: Number, required: true },
        fuel: { type: String, required: true },
    },
    name: { type: String, required: true },
    email: { type: String, required: true },
    number: { type: String },
    fromDate: { type: Date, required: true },
    toDate: { type: Date, required: true },
    pickup: { type: String, required: true },
    drop: { type: String, required: true }
});

const Purchase = mongoose.model("purchases", purchaseSchema);

app.post('/api/purchase', async (req, res) => {
    try {
        const booking = new Purchase(req.body);
        await booking.save();
        res.json({ message: 'Purchase confirmed successfully!' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error confirming purchase, code 500' });
    }
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});


// ------------------------------

