const Account = require('../models/account');
const { getAverageCalories } = require('../utils/getAverageCalories');
const { getAverageSleep } = require('../utils/getAverageSleep');
const { getAverageWater } = require('../utils/getAverageWater');

module.exports.getInformations = async (req,res,next)=>{
    const [averageSleepHours,averageSleepMinutes] = await getAverageSleep(req.userId);
    const averageCupsOfWater = await getAverageWater(req.userId);
    const averageCalorie = await getAverageCalories(req.userId);
    const account = await Account.findOne({_id: req.userId});

    res.status(200).json({
        gender: account.gender,
        height: account.height,
        weight: account.weight, 
        BMI: account.BMI,
        hours: averageSleepHours,
        minutes: averageSleepMinutes,
        water: averageCupsOfWater,
        calorie: averageCalorie
    });
};

module.exports.putInformations = async(req,res,next)=>{
    const account = await Account.findOne({_id: req.userId});

    if(req.body.BMI)
    {
        try {
            account.BMI = req.body.BMI;
            account.height = req.body.Height;
            account.weight = req.body.Weight;
            await account.save();
            res.status(200).json({
                message: "Successfuly updated Informations"
            })
        }
        catch(err){
            next(err);
        }
    }
    else {
        const error = new Error();
        error.message = 'BMI is null';
        error.statusCode = 422;
        next(error);
        return error;
    }
}
