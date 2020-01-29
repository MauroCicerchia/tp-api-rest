const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Client = new Schema({
  _id: ObjectId,
  firstName: String,
  lastName: String,
  DNI: String,
  address: String
});

module.exports = Client;
