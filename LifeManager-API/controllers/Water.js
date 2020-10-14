const Account = require('../models/account');

module.exports.getCups = async(req,res,next)=>{
    const account = await Account.findOne({_id: req.userId});
    res.status(200).json({
        cups: account.cups_of_water
    });
}; 

module.exports.plusCup = async(req,res,next)=>{
    const account = await Account.findOne({_id: req.userId});
    try {
        account.cups_of_water++;
        await account.save();
    }
    catch(err){
        next(err);
    }
    res.status(200).json({
        message: 'updated cups'
    });
};

module.exports.minusCup = async(req,res,next)=>{
    const account = await Account.findOne({_id: req.userId});
    try {
        if(account.cups_of_water)
        {
        account.cups_of_water--;
        }
        else {
            throw new Error('YOU HAVE 0 CUPS');
        }
        await account.save();
    }
    catch(err){
        return next(err);
    }
    res.status(200).json({
        message: 'updated cups'
    });
}