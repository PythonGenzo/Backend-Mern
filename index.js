import express from "express";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();


const Deploy = [
    {
        "1": "hello worls"
    }
];


const app = express();

const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());

const MONGO_URL = process.env.MONGO_URL || "mongodb://localhost" ;

async function createConnection() {
    const client = new MongoClient(MONGO_URL);
    await client.connect();
    console.log("mongo is connected");
    return client;
}

const client = await createConnection();



app.get("/", function(req, res) {
    res.send("hello world")
});

app.get("/MERN", function(req, res) {
    res.send(Deploy)
});

app.listen(PORT, ()=> console.log(`App started in ${PORT}`));
