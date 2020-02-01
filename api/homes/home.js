import _ from "lodash";
import sequences from "../models/sequences.model";

class Home {
  constructor(model, modelName) {
    this.model = model;
    this.modelName = modelName;
  }

  getOneById(_id) {
    return this.model.findOne({ _id });
  }

  insert(document) {
    return this.getNextVal().then(_id =>
      this.model.insertMany([_.assign({ _id }, document)])
    );
  }

  getNextVal() {
    return sequences
      .findOne({ _id: this.modelName })
      .then(({ value }) => value);
  }
}
export default Home;
