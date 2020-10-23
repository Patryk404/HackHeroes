const Account = require('../models/account');
const historyCalories = require('../models/historyCalories');
const HistoryCups = require('../models/historyCupsOfWater');
const {isDateOlder} = require('../utils/checkDate');
const {addHours} = require('../utils/addHours');

module.exports.ResetAll = async (req,res,next)=>{
    const account = await Account.findOne({_id: req.userId});
    const older = isDateOlder(new Date(),account.date);
    if(older){
        await reset_calorie(account);
        await reset_cups(account);
        await reset_account(account);
        next();
    }
    else {
        next();
    }
};
const reset_calorie = async(account)=>{
    const meet = account.calories>=account.calories_range;
    const calories = await new HistoryCalories({
        person: account._id,
        calories: account.calories,
        calories_range: account.calories_range,
        meet: meet,
        date: account.date
    });
    await calories.save();
}

const reset_cups = async(account)=>{
    const cups = await new HistoryCups({
        person: account._id,
        cups: account.cups_of_water,
        date: account.date
    });
    await cups.save();
};

const reset_account = async(account)=>{
    account.calories = 0;
    account.cups_of_water = 0;
    account.date = addHours(new Date(),2);
    await account.save();
}
