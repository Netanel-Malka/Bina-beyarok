import express from "express";
import mongoDB from "./conectDB.js";
import { config } from "dotenv";
import task from "./model.js";
const app = express();
config();
mongoDB();
app.use(express.json());

app.get("/tasks", async (req, res) => {
  try {
    const tasks = await task.find();
    res.json(tasks);
  } catch (error) {
    console.log(error);
  }
});
app.post("/tasks", async (req, res) => {
  try {
    const body = req.body;
    const data = await task.create(body);
    res.json(data);
  } catch (error) {
    console.log(error);
  }
});
app.put("/tasks/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const data = await task.findByIdAndUpdate(id, body, { new: true });
    res.json(data);
  } catch (error) {
    console.log(error);
  }
});
app.delete("/tasks/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const data = await task.findByIdAndDelete(id);
    res.json(data);
  } catch (error) {
    console.log(error);
  }
});

const port = process.env.PORT;
app.listen(port, () => console.log("Server is running on port 1234"));
