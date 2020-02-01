import _ from "lodash";
import courses from "../homes/course.home";
import clients from "../homes/client.home";

class StudentController {
  constructor() {
    this.create = this.create.bind(this);
  }

  get({ params: { id } }, res) {
    if (_.isNil(id)) return this._reject(res);
    courses
      .getOneById(id)
      .then(({ students }) => res.status(200).send(students));
  }

  create({ params, body }, res) {
    if (_.some([params.id, body.id], _.isNil)) return this._reject(res);
    clients
      .getOneById(body.id)
      .then(client => {
        if (_.isNil(client)) throw new Error();
        return client._doc;
      })
      .then(student =>
        courses.addStudent(params.id, _.assign({ grade: body.grade }, student))
      )
      .then(() => res.status(200).send("Inserted"))
      .catch(err => this._reject(res));
  }

  remove({ params: { id, studentId } }, res) {
    if (_.some([id, studentId], _.isNil)) return this._reject(res);
    courses
      .removeStudent(id, studentId)
      .then(() => res.status(200).send("Deleted"));
  }

  getBest({ params: { id } }, res) {
    if (_.isNil(id)) return this._reject(res);
    courses
      .getBestStudentById(id)
      .then(student => res.status(200).send(student));
  }

  _reject(res) {
    res.status(400).send("Invalid params");
    return;
  }
}

export default new StudentController();
