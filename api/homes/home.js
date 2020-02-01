import _ from "lodash";
import sequences from "../models/sequences.model";

class Home {
  constructor(model, modelName) {
    this.model = model;
    this.modelName = modelName;
  }

  get() {
    return this.model.find();
  }

  getOneById(_id) {
    return this.model.findOne({ _id });
  }

  insert(document) {
    return this.getNextVal().then(_id =>
      this.model.insertMany([_.assign({ _id }, document)])
    );
  }

  remove(_id) {
    return this.model.deleteOne({ _id });
  }

  getNextVal() {
    return sequences
      .findOneAndUpdate(
        { _id: this.modelName },
        { $inc: { value: 1 } },
        { upsert: true }
      )
      .then(({ value }) => value);
  }
}
export default Home;
