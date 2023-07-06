require("dotenv").config();
const express = require("express");
const app = express();

const connectDB = require("./database/connect");
const Task = require("./models/products");

const PORT = process.env.PORT || 5000;

app.use(express.json());

// const products_routes = require("./routes/products");

app.get("/" , (req , res) =>{
    res.send("Yo, I am Live");
});

// app.use("/task", products_routes);
// API for creating new task
app.post("/task", async(req, res)=>{
    try {
        
        const addTask = new Task(req.body);
        const newtask = await addTask.save();
        res.status(201).send(newtask);       

    } catch (e) {
        res.status(400).send(e);
    }
});

// API for getting all the data

app.get("/task", async(req, res)=>{
    try {
        const getData = await Task.find({});
        res.send(getData);       

    } catch (e) {
        res.status(400).send(e);
    }
});

// API for getting individual data with the help of id

app.get("/task/:id", async(req, res)=>{
    try {
        const _id = req.params.id;
        const getSpecificData = await Task.findById(_id);
        res.send(getSpecificData);       

    } catch (e) {
        res.status(400).send(e);
    }
});

// API for updation using patch 

app.patch("/task/:id", async(req, res)=>{
    try {
        const _id = req.params.id;
        const getUpdatedData = await Task.findByIdAndUpdate(_id,req.body,{new:true})
        res.send(getUpdatedData);   

    } catch (e) {
        res.status(500).send(e);
    }
});

// Api to delete specific task

app.delete("/task/:id", async(req, res)=>{
    try {
        const _id = req.params.id;
        const getDeletedData = await Task.findByIdAndDelete(_id);
        res.send(getDeletedData);    

    } catch (e) {
        res.status(400).send(e);
    }
});





const start = async () =>{
    try {
        await connectDB(process.env.MONGODB_URL);
        app.listen(PORT, () =>{
            console.log(`${PORT} port is connected`);
        });
    } catch (error) {
        console.log(error);
    }
};

start();