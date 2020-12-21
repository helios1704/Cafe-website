const History = require("../../../models/history.model");

module.exports.index = async (req, res) => {
  var userId = req.signedCookies.userId;
  var users = await User.find();
  res.render("admins/users/index", {
    users: users,
  });
};

module.exports.data_table = async (req, res) => {
  var userId = req.signedCookies.userId;
  var users = await User.find();
  var temp = {
    data: users,
  };
  res.json(temp);
};

