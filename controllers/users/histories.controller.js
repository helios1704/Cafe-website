const History = require("../../models/history.model");
const Bill = require("../../models/bill.model");
module.exports.index = async (req, res) => {
  var userId = req.signedCookies.userId;
  console.log(userId);
  var histories = await History.find({user_id : userId});
  var bill_id =[];
  histories.forEach(element => bill_id.push(element.bill_id))
  var bills  = await Bill.find({_id:bill_id})

  // var bills = []
  // bill_id.forEach(async (element) => {
  //   console.log(element)
  //   var bill = await Bill.find({_id : element});
  //   console.log(bill)
  //   bills.push(bill)
  // });
  res.render("users/histories", {
    bills: bills,
  });
};  
