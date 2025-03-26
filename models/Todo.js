import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
  text: String,
  completed: Boolean,
});

export default mongoose.model("Todo", TodoSchema);
