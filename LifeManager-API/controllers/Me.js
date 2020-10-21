const { getAverageCalorie } = require('../utils/getAverageCalorie');
const { getAverageSleep } = require('../utils/getAverageSleep');
const { getAverageWater } = require('../utils/getAverageWater');

module.exports.getAverage = async (req,res,next)=>{
    const [averageSleepHours,averageSleepMinutes] = await getAverageSleep(req.userId);
    const averageCupsOfWater = await getAverageWater(req.userId);
    const averageCalorie = await getAverageCalorie(req.userId);

    res.status(200).json({
        hours: averageSleepHours,
        minutes: averageSleepMinutes,
        water: averageCupsOfWater,
        calorie: averageCalorie
    });
};
