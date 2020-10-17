const Account = require('../models/account');
const HistoryCups = require('../models/historyCupsOfWater');

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

module.exports.getAverage = async(req,res,next)=>{
    let realCups = await HistoryCups.find({person: req.userId}).sort({date: 'desc'});
    if (!realCups){
        return res.status(404).json({
            average: 0
        });
    }
    const cups = await HistoryCups.find({person: req.userId}).sort({date: 'desc'}).limit(7);
    //const filteredCups = realCups.filter((cup,index)=> index < cups.length ? cup.date !== cups[index].date : null );
    //await HistoryCups.deleteMany({person: req.userId}); //deleting unnecessary// not working fine for multiple refreshes
    /*for(let i=0; i<filteredCups.length; i++){
        const temp = await new HistoryCups({
            person: filteredCups[i].person,
            cups: filteredCups[i].cups,
            date: filteredCups[i].date
        });
        await temp.save();
    }*/
    let sum=0;
    for (let i=0; i<cups.length; i++){
        sum += cups[i].cups;
    }
    const average = sum/cups.length;
    res.status(200).json({
        average: average.toFixed(2)
    });
};