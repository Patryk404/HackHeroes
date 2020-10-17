const Account = require('../models/account');
const Product = require('../models/product');
const HistoryCalories = require('../models/historyCalories');

module.exports.getCalories = async (req,res,next)=>{
    const account = await Account.findOne({_id: req.userId});
    const calories = account.calories;
    const calories_range = account.calories_range; 
    res.status(200).json({ 
        calories: calories,
        calories_range: calories_range
    });
};

module.exports.getHistoryCalories = async(req,res,next)=>{
    const historyCalories = await HistoryCalories.find({person: req.userId}).select({meet: 1,calories: 1,calories_range: 1,date: 1}).sort({date: 'desc'});
    res.status(200).json({
        history: historyCalories
    });
};  

module.exports.createFood = async(req,res,next)=>{
    const account = await Account.findOne({_id: req.userId});
    const product = await new Product({...req.body,person: account._id});
    try{
        await product.save();
        res.status(201).json({
            message: "Succesfully created Product"
        });
    }
    catch(err){
        next(err);
    }
};

module.exports.getFood = async(req,res,next)=>{
    try {
        const products = await Product.find({person: req.userId});
        res.status(200).json({
            food: products
        });
    }
    catch(err){
        next(err);
    }
};

module.exports.deleteFood = async(req,res,next)=>{
    const productId = req.get('id');
    try {
    await Product.deleteOne({_id: productId});
    res.status(201).json({
        message: "Succesfully deleted product"
    });
    }
    catch(err){
        next(err);    
    }
};

module.exports.eatFood = async(req,res,next)=>{
    const product = await Product.findOne({_id: req.body.id});
    const account = await Account.findOne({_id: req.userId});

    account.calories += product.calories;
    try{
    await account.save();
    res.status(200).json({
        message: "Food was eaten"
    });
    }
    catch(err){
        next(err);
    }

};

module.exports.newIntake = async(req,res,next)=>{
    const intake = req.body.intake;
    const account = await Account.findOne({_id: req.userId});
    account.calories_range = intake;
    await account.save();
    res.status(200).json({
        message: 'Succesfully patch caloriesIntake'
    })
};