const mongoose = require("mongoose");

const businessStartupSchema = mongoose.Schema({
    shop: {
        type: String,
        required: true,
    },
    machinery: {
        type: String,
        required: true,
    },
    maxLoan: {
        type: Number,
        required: true,
    },
    period: {
        type: Number,
        required: true,
    },
    initial: {
        type: Number,
        required: true,
    },
});

const BusinessStartup = mongoose.model("BusinessStartup", businessStartupSchema);
module.exports = BusinessStartup;
