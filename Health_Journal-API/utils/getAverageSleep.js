const HistorySleep = require('../models/historySleep');

module.exports.getAverageSleep=async(userId)=>{
    const historySleeps = await HistorySleep.find({person: userId}).sort({date_finished: 'desc'}).limit(7);
    let hoursSum = 0;
    let minutesSum = 0;
    historySleeps.map(sleep=>{
        hoursSum += sleep.sleep_hours;
        minutesSum += sleep.sleep_minutes;
    });
    const hoursAverage = hoursSum/historySleeps.length;
    const minutesAverage = minutesSum/historySleeps.length;
    return [parseInt(hoursAverage.toFixed(0)),parseInt(minutesAverage.toFixed(0))];
}