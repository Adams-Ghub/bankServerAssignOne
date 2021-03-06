const mongoose = require("mongoose");

const { Schema } = mongoose;

const appsolSchema = new Schema({
  name: "string",
  branch: "string",
  address: "string",
  location: "string",
  phone: "string",
  accountNumber: "number",
});

const AppsolModel = mongoose.model("Appsol", appsolSchema);

module.exports = AppsolModel;
