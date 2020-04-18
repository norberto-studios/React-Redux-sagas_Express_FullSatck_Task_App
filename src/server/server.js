import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { connectDB } from "./connect-db";

let port = 5000;
let app = express();

app.listen(port, console.log("Server Listening on Port", port));

app.use(cors(), bodyParser.urlencoded({ extended: true }), bodyParser.json);

// To test the post request 
export const addNewTask = async task=>{
    let db = await connectDB();
    let collection = db.collection(`task`);
    await collection.insertOne(task)

}
export const updateTask = async task=>{
    let {id, groups, name, isComplete} = task;
    let db = await connectDB();
    let collection = db.collection(`task`);

    if(group){
        await collection.updateOne({id},{$set:{group}})
    }
    if(name){
        await collection.updateOne({id},{$set:{name}})
    }
    if(isComplete !== undefined){
        await collection.updateOne({id},{$set:{isComplete}})
    }

}


app.post("/task/new", async (request, response) => {
    let task = request.body.task;
    await addNewTask(task);
    response.status(200).send()
});
app.post("/task/update", async (request, response) => {
    let task = request.body.task;
    await updateTask(task);
    response.status(200).send()
});
app.get("/", (request, response) => {});
