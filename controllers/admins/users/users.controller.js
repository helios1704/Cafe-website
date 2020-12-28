const User = require("../../../models/user.model");
const History = require("../../../models/history.model");
const Bill = require("../../../models/bill.model");
const Product = require("../../../models/product.model");
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



module.exports.showHistories = (req,res)=>{
  const id = req.params.id;
  console.log(id);

  res.cookie('userId', id, {
    signed: true
  });
  res.render("admins/users/histories", {

  });
}

module.exports.data_tableHistories = async (req, res) => {
  var userId = req.signedCookies.userId;
  var histories = await History.find({user_id : userId});
  var bill_id =[];
  histories.forEach(element => bill_id.push(element.bill_id))
  var bills  = await Bill.find({_id:bill_id});

  // bills.forEach(async (element) => {
  //   var products =  await Product.find({_id: element.products})
  //   element.products = products.name;
  // },)

  res.json({data:bills});
};