const HistoryCalories = require('../models/historyCalories');

module.exports.getAverageCalories= async(userId)=>{ 
    const historyCalories = await HistoryCalories.find({person: userId}).select({calories:1}).sort({date: 'desc'}).limit(7);
    let caloriesSum = 0;
    historyCalories.map(calorie=>{
        caloriesSum+=calorie.calories;
    });
    const calorieAverage = caloriesSum/historyCalories.length;
    return parseInt(calorieAverage.toFixed(0));
}