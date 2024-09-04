require('dotenv').config({path: ".env"});

const express = require('express');
const cors = require('cors');
const { connection } = require('./db.js');
const productsRoute = require('./routes/products.route.js');

const app = express();

//Middleware 
app.use(express.urlencoded({
    extended: true
}))
app.use(express.json());

//Cors middleware
const corsOptions = {
    origin: ["https://e-commerce-store-tau-snowy.vercel.app"],
    methods: ["GET", "POST", "DELETE"],
    credentials: true
}

app.use(cors(corsOptions));

//Routes
app.use('/api/products', cors(corsOptions),  productsRoute);

app.listen(process.env.PORT, async () => {
    try {
        await connection;
        console.log("MongoDb connected");
    } catch (error) {
        console.log("Error in connecting to MongoDb");
    }
    console.log(`Backend Running at PORT: ${process.env.PORT}`);
});