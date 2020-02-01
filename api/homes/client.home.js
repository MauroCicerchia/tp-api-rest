import Home from "./home";
import ClientModel from "../models/client.model";

class ClientHome extends Home {
  constructor() {
    super(ClientModel, "clients");
  }
}

export default new ClientHome();
