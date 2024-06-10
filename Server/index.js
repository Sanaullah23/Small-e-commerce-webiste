const express = require('express');
const cors = require('cors')
const DATABASE = require('./config/DB')
const dotenv= require('dotenv');
const morgan = require('morgan');
const path = require('path')
dotenv.config();
const app= express();

// database connection
DATABASE()

// Serve static files from the 'upload' directory
app.use('/upload', express.static(path.join(__dirname, 'upload')));

// middlewares 
app.use(express.json())
app.use(cors())
app.use(morgan('dev'));


// routing middles
const authRouter = require('./routes/authRoute');
const porductRouter = require('./routes/productRoute');
app.use('/api/v1/auth', authRouter)
app.use('/api/v1/product',porductRouter)



















// server running on port
const PORT= process.env.PORT ||5000;
app.listen(PORT, ()=>{
    console.log(`server running ${process.env.DEV_MODE} on ${PORT}`)
})