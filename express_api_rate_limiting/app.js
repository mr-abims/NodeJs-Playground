const express = require('express');
const db = require('./db');
const rateLimit = require("express-rate-limit");
const helmet = require('helmet')

const booksRoute = require('./routes/books');


const PORT = 3000;
const app = express();

// Connect to MongoDB
db.connectToMongoDB();

// Defaults to in-memory store. 
// You can use redis or any other store.
const limiter = rateLimit({
	windowMs: 0.5 * 60 * 1000, // 15 minutes
	max: 4, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
})

//add secuirty
app.use(helmet())


// Apply the rate limiting middleware to all requests
app.use(limiter)

// Apply the rate limiting middleware to API calls only
// app.use('/api', apiLimiter)

app.use(express.static('public'));
app.use(express.json());


app.use('/books', booksRoute);


app.get('/', (req, res) => {
    res.end('Home Page');
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
