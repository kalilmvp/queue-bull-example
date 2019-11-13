import "dotenv/config";
import BullBoard from "bull-board";
import Queue from "./app/lib/Queue";

import express from "express";
import UserController from "./app/controllers/UserController";

const app = express();
BullBoard.setQueues(Queue.queues.map(q => q.bull));

app.use(express.json());

app.post("/users", UserController.store);

app.use("/admin/queues", BullBoard.UI);

app.listen(3333, () => {
  console.log("App running");
});
