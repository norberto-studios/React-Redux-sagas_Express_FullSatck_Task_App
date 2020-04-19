import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { connectDB } from "./connect-db";
import { authenticationRoute } from "./authenticate";
import "./initialize-db";

let port = 5000;
let app = express();

// cors
app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());


// To test the post request
export const addNewTask = async (task) => {
  let db = await connectDB();
  let collection = db.collection(`tasks`);
  console.log("THE COLLECTION", collection);
  await collection.insertOne(task);
};
export const updateTask = async (task) => {
  let { id, groups, name, isComplete } = task;
  let db = await connectDB();
  let collection = db.collection(`tasks`);

  if (groups) {
    await collection.updateOne({ id }, { $set: { group } });
  }
  if (name) {
    await collection.updateOne({ id }, { $set: { name } });
  }
  if (isComplete !== undefined) {
    await collection.updateOne({ id }, { $set: { isComplete } });
  }
};

app.get("/", (req, res) => {
  res.send("Hello Norberto");
});

authenticationRoute(app);

app.post("/task/new", async (req, res) => {
  console.log("---------------------", req.body.task);
  let task = req.body.task;
  await addNewTask(task);
  res.status(200).send();
});
app.post("/task/update", async (req, res) => {
  console.log("----------------uu-----", req.body.task);
  let task = req.body.task;
  await updateTask(task);
  res.status(200).send();
});

app.listen(port, console.log("Server Listening on Port", port));
