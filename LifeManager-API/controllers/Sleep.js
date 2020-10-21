const HistorySleep = require('../models/historySleep');
const Account = require('../models/account');
const {msToTime} = require('../utils/milisecondsToTime');
const {addHours} = require('../utils/addHours'); 
const {getAverageSleep} = require('../utils/getAverageSleep');

module.exports.getSleep = async(req,res,next)=>{
    const account = await Account.findOne({_id: req.userId});
    res.status(200).json({
        sleep: account.sleep
    });
};

module.exports.getHistory = async(req,res,next)=>{
    const historySleep = await HistorySleep.find({person: req.userId}).select({sleep_hours: 1,sleep_minutes: 1,date_start: 1,date_finished: 1}).sort({date_finished: 'desc'});
    res.status(200).json({
        history: historySleep
    });
};  

module.exports.getAverage = async(req,res,next)=>{
    const [hoursAverage,minutesAverage] = await getAverageSleep(req.userId);
    res.status(200).json({
        hours: hoursAverage,
        minutes: minutesAverage
    });
};

module.exports.startSleep= async(req,res,next)=>{
    const account = await Account.findOne({_id: req.userId});
    account.start_sleep_date = addHours(new Date(),2); //because it's Poland time
    account.sleep = true;
    await account.save();
    res.status(201).json({
        message: 'You sleep'
    });
};

module.exports.stopSleep=async(req,res,next)=>{
    const account = await Account.findOne({_id: req.userId});
    const start_sleep = account.start_sleep_date;
    const now = addHours(new Date(),2);

    if(account.sleep)
    {
        const difference_time = msToTime(now - start_sleep);
        const hours = parseInt(difference_time.split(':')[0]);
        const minutes = parseInt(difference_time.split(':')[1]);
        if(!hours&&!minutes){
            account.sleep = false;
            await account.save();
            return res.status(200).json({
                message: "You don't sleep"
            });
        }
        const historySleep = new HistorySleep({
            person: account._id,
            sleep_hours: hours,
            sleep_minutes: minutes,
            date_start: start_sleep,
            date_finished: now
        });
        await historySleep.save();
        account.sleep = false;
        await account.save();
        res.status(200).json({
            hours: hours,
            minutes: minutes
        });
    }
    else{
        res.status(400).json({
            message: "You don't sleep"
        });
    }
};