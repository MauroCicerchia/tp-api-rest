import _ from "lodash";
import Home from "./home";
import CourseModel from "../models/course.model";

class CourseHome extends Home {
  constructor() {
    super(CourseModel, "courses");
  }

  addStudent(courseId, student) {
    return this.model.findOneAndUpdate(
      { _id: courseId },
      { $addToSet: { students: student } }
    );
  }

  removeStudent(courseId, studentId) {
    return this.model.findOneAndUpdate(
      { _id: courseId },
      { $pull: { students: { _id: studentId } } }
    );
  }

  getBestStudentById(_id) {
    return this.model
      .findOne({ _id })
      .then(({ students }) => _.maxBy(students, "grade"));
  }
}

export default new CourseHome();
