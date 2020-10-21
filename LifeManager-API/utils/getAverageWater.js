const HistoryWater = require('../models/historyCupsOfWater');

module.exports.getAverageWater=async(userId)=>{
    let realCups = await HistoryWater.find({person: userId}).sort({date: 'desc'});
    if (!realCups){
        return res.status(404).json({
            average: 0
        });
    }
    const cups = await HistoryWater.find({person: userId}).sort({date: 'desc'}).limit(7);
    let sum=0;
    for (let i=0; i<cups.length; i++){
        sum += cups[i].cups;
    }
    const cupsAverage = sum/cups.length;
    return parseInt(cupsAverage.toFixed(1));
}