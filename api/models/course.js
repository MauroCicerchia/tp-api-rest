const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Course = new Schema({
  _id: ObjectId,
  year: Number,
  duration: Number,
  subject: String,
  students: Array
});

module.exports = Course;
