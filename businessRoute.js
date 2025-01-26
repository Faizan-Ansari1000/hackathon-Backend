const express = require("express");
const BusinessStartup = require("../models/businessModel");
const business = express.Router();

business.post("/business", async (req, res) => {
    try {
        const { shop, machinery, maxLoan, period, initial } = req.body;

        // Validation
        if (!shop || !machinery || !maxLoan || !period || initial) {
            return res.status(400).json({ message: "All fields are required." });
        }

        const newLoan = new BusinessStartup({ shop, machinery, maxLoan, period, initial });
        await newLoan.save();

        res.status(201).json({ message: "Business Startup Loan added successfully!", data: newLoan });
    } catch (error) {
        console.error("Error in POST /business-startup:", error);
        res.status(500).json({ message: "Something went wrong. Please try again later." });
    }
});

business.get("/business", async (req, res) => {
    try {
        const loans = await BusinessStartup.find();
        res.status(200).json({ message: "Business Startup Loans retrieved successfully!", data: loans });
    } catch (error) {
        console.error("Error in GET /business-startup:", error);
        res.status(500).json({ message: "Something went wrong. Please try again later." });
    }
});

module.exports = business;
