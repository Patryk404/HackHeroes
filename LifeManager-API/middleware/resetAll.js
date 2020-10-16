const Account = require('../models/account');
const HistoryCalories = require('../models/historyCalories');
const HistoryCups = require('../models/historyCupsOfWater');
const {checkDate} = require('../utils/checkDate');

module.exports.ResetAll = async (req,res,next)=>{
    const account = await Account.findOne({_id: req.userId});
    const older = checkDate(new Date(),account.date);
    if(older){
        await reset_calories(account);
        await reset_cups(account);
        await reset_account(account);
        next();
    }
    else {
        next();
    }
};
const reset_calories = async(account)=>{
    const meet = account.calories>=account.calories_range;
    const calories = await new HistoryCalories({
        person: account._id,
        calories: account.calories,
        calories_range: account.calories_range,
        meet: meet,
        date: new Date()
    });
    await calories.save();
}

const reset_cups = async(account)=>{
    const cups = await new HistoryCups({
        person: account._id,
        cups: account.cups_of_water,
        date: new Date()
    });
    await cups.save();
};

const reset_sleep = async(account)=>{
    //TO DO
};

const reset_account = async(account)=>{
    account.calories = 0;
    account.cups_of_water = 0;
    account.date = new Date();
    await account.save();
}
