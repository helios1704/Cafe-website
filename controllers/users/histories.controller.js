const History = require("../../models/history.model");
const Bill = require("../../models/bill.model");
const Product = require("../../models/product.model");
const { json } = require("body-parser");
module.exports.index = async (req, res) => {
  var userId = req.signedCookies.userId;
  var userName = req.cookies.userName;
  
  console.log(userId);
  var histories = await History.find({user_id : userId});
  var bill_id =[];
  histories.forEach(element => bill_id.push(element.bill_id))
  var bills  = await Bill.find({_id:bill_id})

  bills.forEach( async (element) => {
    var products =  await Product.find({_id: element.products})
    element.products = products;
  },)
 
  res.render("users/histories", {
    bills: bills,
    name:userName
  });

};  
