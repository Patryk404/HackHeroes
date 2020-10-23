const Account = require('../models/account');
const HistoryCups = require('../models/historyCupsOfWater');
const {getAverageWater} = require('../utils/getAverageWater');

module.exports.getCups = async(req,res,next)=>{
    const account = await Account.findOne({_id: req.userId});
    res.status(200).json({
        cups: account.cups_of_water
    });
};
 
module.exports.getHistory = async(req,res,next)=>{
    const historyCups = await HistoryCups.find({person: req.userId}).select({cups: 1,date: 1}).sort({date: 'desc'});
    res.status(200).json({
        history: historyCups
    });
};

module.exports.getAverage = async(req,res,next)=>{
    const averageWater = await getAverageWater(req.userId);
    res.status(200).json({
        average: averageWater
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