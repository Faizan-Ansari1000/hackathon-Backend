const express = require('express');
const mongoose = require('mongoose');
const authRoute = require('./routes/authRoutes');
const crudRoute = require('./routes/crudRoutes');
require('dotenv').config();
const App = express();
const cors = require('cors');

// Middleware
App.use(cors());
App.use(express.json());

// Routes
App.use('/auth', authRoute);
App.use('/crud', crudRoute);

// Database connection and server setup
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        const PORT = process.env.PORT || 5000; // Use dynamic port for Vercel
        App.listen(PORT, () => {
            console.log(`Db Connected and Server started on PORT ${PORT}`);
        });
    })
    .catch((err) => {
        console.log('Error connecting to DB:', err.message);
    });
