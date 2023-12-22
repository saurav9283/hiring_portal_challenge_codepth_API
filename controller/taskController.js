import { taskModel } from "../model/taskModel.js";

export const addTask = async (req, res) => {
  try {
    const newtask = new taskModel(req.body);
    const savedNewtask = await newtask.save();
    return res.send({ msg: "Tasked Assigned!", savedNewtask });
  } catch (error) {
    console.log("error *", error);
  }
};

export const getAllTask = async (req, res) => {
  try {
    const limit = req.query._limit || 4;
    const allTasks = await taskModel.find({}).limit(Number(limit));
    console.log(allTasks);
    return res.send({ allTasks });
  } catch (error) {
    console.log("error", error);
  }
};
export const deleteTask = async (req, res) => {
  try {
    const taskId = req.params.taskId;
    // console.log(req.params.taskId)
    const deleteOneTask = await taskModel.findByIdAndDelete(taskId);
    if (!deleteOneTask) {
      return res.send({ error: "Task Not found" });
    }
    return res.send({ msg: "Task deleted successfully", deleteOneTask });
  } catch (error) {
    console.log("error", error);
    res.send(error);
  }
};
export const editTask = async (req, res) => {
  try {
    const taskId = req.params.taskId;
    console.log(taskId);
    const updateData = req.body;
    const editOneTask = await taskModel.findByIdAndUpdate(taskId, updateData, {
      new: true,
    });

    if (!editOneTask) {
      return res.status(404).send({ error: "Task Not found" });
    }

    return res.send({ msg: "Task Edited successfully", editOneTask });
  } catch (error) {
    console.log("error", error);
    res.status(500).send(error);
  }
};
