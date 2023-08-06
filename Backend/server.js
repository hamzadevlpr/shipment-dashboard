// Server
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const shipmentRouter = require('./Routes/shipment');
const shipmentModel = require('./model/model')


const PORT = process.env.PORT || 3999;
const app = express();

app.use(cors());
app.use(express.json());
app.use(shipmentRouter);

app.get('/', async (req, res) => {
    try {
        const records = await shipmentModel.find({});
        res.status(200).json(records);
    } catch (error) {
        console.error('Error fetching records:', error);
        res.status(500).json({ error: 'Failed to fetch records' });
    }
})



app.listen(PORT, () => {
    console.log(`Server Started at ${PORT}`)
});



// Database Creation

const DATABASE_URL = "mongodb+srv://crud-operation:crud-op123@cluster0.ismwkvb.mongodb.net/shipments"
mongoose.connect(process.env.URL || DATABASE_URL);

// Database Connected message
const database = mongoose.connection;
database.on('error', (error) => {
    console.log(error)
})
database.once('connected', () => {
    console.log('Database Connected');
})
