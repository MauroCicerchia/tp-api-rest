import _ from "lodash";
import courses from "../homes/course.home";

class CourseController {
  get(req, res) {
    courses.get().then(documents => res.status(200).send(documents));
  }

  getOne({ params: { id } }, res) {
    if (_.isNil(id)) return this._reject(res);
    courses.getOneById(id).then(document => res.status(200).send(document));
  }

  create({ body: { year, duration, subject } }, res) {
    if (_.some([year, duration, subject], _.isNil)) return this._reject(res);
    courses
      .insert({
        year,
        duration,
        subject
      })
      .then(res.status(200).send("Inserted"));
  }

  remove({ params: { id } }, res) {
    if (_.isNil(id)) return this._reject(res);
    courses.remove(id).then(() => res.status(200).send("Deleted"));
  }

  _reject(res) {
    res.status(400).send("Invalid params");
    return;
  }
}

export default new CourseController();
