import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Sequence = new Schema({
  _id: String,
  value: Number
});

export default mongoose.model("Sequence", Sequence);
