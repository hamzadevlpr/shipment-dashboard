const mongoose = require('mongoose');

// Database Schema
const shipmentSchema = new mongoose.Schema({
    reference: {
        // required: true,
        type: String,
    }, loca: {
        // required: true,
        type: String,
    }, firstName: {
        // required: true,
        type: String,
    }, lastName: {
        // required: true,
        type: String,
    }, phone: {
        // required: true,
        type: Number,
    }, address: {
        // required: true,
        type: String,
    }, city: {
        // required: true,
        type: String,
    }, amount: {
        // required: true,
        type: Number,
    }, financial: {
        // required: true,
        type: String,
    }, remark: {
        // required: true,
        type: String,
    }, trackingNumber: {
        // required: true,
        type: String,
    }, orderNumber: {
        // required: true,
        type: String,
    }, createdDate : { type: Date, default: Date.now }

});

// Database Model
const shipmentModel = new mongoose.model('create', shipmentSchema);

module.exports = shipmentModel;