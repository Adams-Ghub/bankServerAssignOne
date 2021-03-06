const Appsol = require("../model/appsolModel.js");

const handleCreateBank = async (req, res) => {
  const { name, branch, address, location, phone, accountNumber } = req.body;
  const bank = await new Appsol({
    name,
    branch,
    address,
    location,
    phone,
    accountNumber,
  }).save();
  console.log("bank", bank);

  return res.json({ message: "bank saved successfully", data: bank });
};

const handleUpdateBank = async (req, res) => {
  const { name, branch, location, address, phone, accountNumber } = req.body;

  try {
    const updateBank = await Appsol.findOneAndUpdate(
      { name },
      { name, branch, location, address, phone, accountNumber },
      { new: true }
    );
    res.json({ message: "bank Updated", data: updateBank });
  } catch (error) {
    res
      .status(500)
      .json({ message: "something went wrong", data: error.message });
  }
};

const handleDeleteBank = async (req, res) => {
  try {
    const { name } = req.body;

    const deleteBank = await Appsol.findOneAndDelete({ name });

    res.json({ message: "bank deleted", data: deleteBank });
  } catch (error) {
    res.status(500).json({
      message: "something went wrong",
      data: error.message,
    });
  }
};

const handleGetBank = async (req, res) => {
  try {
    const banks = await Appsol.find({});
    if (!banks)
      return res.status(404).json({ message: "Sorry no banks found" });

    res.json({ banks });
  } catch (error) {
    res
      .status(500)
      .json({ message: "sorry something went wrong", data: error.message });
  }
};

module.exports = {
  handleCreateBank,
  handleDeleteBank,
  handleUpdateBank,
  handleGetBank,
};
