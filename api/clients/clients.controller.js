import _ from "lodash";
import clients from "../homes/client.home";

class ClientController {
  getOne({ params: { id } }, res) {
    if (_.isNil(id)) return this._reject(res);
    clients.getOneById(id).then(document => res.status(200).send(document));
  }

  create({ body: { firstName, lastName, dni, address } }, res) {
    if (_.some([firstName, lastName, dni, address], _.isNil))
      return this._reject(res);
    clients
      .insert({
        firstName,
        lastName,
        dni,
        address
      })
      .then(res.status(200).send("Inserted"));
  }

  _reject(res) {
    res.status(400).send("Invalid params");
    return;
  }
}

export default new ClientController();
