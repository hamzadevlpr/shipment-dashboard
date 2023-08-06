const express = require('express');
const mongoose = require('mongoose');
const shipmentModel = require('../model/model')

const router = express.Router();
// generate tracking and order  number starts
function generateRandomAlpha(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}
function generateRandomNumeric(length) {
    const numbers = '0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += numbers.charAt(Math.floor(Math.random() * numbers.length));
    }
    return result;
}
let counter = 0;

async function getNextOrderNumber() {
    counter++;
    const paddedCounter = counter.toString().padStart(3, '0');
    return `C${paddedCounter}#${paddedCounter}`;
}
// generate tracking and order  number ends
router.post('/create', async (req, res) => {
    const { reference, loca, firstName, lastName, phone, address, city, amount, financial, remark, trackingNumber,
        orderNumber, createdDate  } = req.body;

    try {
        const letters = generateRandomAlpha(2);
        const numbers = generateRandomNumeric(7);
        const trackingNumber = `${letters}${numbers}${letters}`;
        const orderNumber = await getNextOrderNumber();
        const newShipment = new shipmentModel({
            reference,
            loca,
            firstName,
            lastName,
            phone,
            address,
            city,
            amount,
            financial,
            remark,
            trackingNumber,
            orderNumber,
            createdDate ,
        });

        const savedShipment = await newShipment.save();

        res.status(201).json(savedShipment);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});


module.exports = router;
