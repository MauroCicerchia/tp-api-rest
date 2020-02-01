import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Client = new Schema({
  _id: Number,
  firstName: String,
  lastName: String,
  DNI: String,
  address: String
});

export default mongoose.model("Client", Client);
