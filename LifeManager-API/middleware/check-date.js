const Account = require('../models/account');
const {checkDate} = require('../utils/checkDate');

module.exports.CheckDate = async (req,res,next)=>{
    const account = await Account.findOne({_id: req.userId});
    console.log(account);
    const older = checkDate(new Date(),account.date);
    if(older){
    //reseting stuff and make history ?
    }
    else {
        next();
    }
};