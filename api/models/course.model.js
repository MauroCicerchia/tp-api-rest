import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Course = new Schema({
  _id: Number,
  year: Number,
  duration: Number,
  subject: String,
  students: Array
});

module.exports = mongoose.model("Course", Course);
