const bcrypt = require('bcrypt'); 
const jwt = require('jsonwebtoken');

const Account = require('../models/account');

module.exports.signUp= async (req,res,next)=>{
    if(!req.body.email){
        const error = new Error();
        error.message = 'No email';
        error.statusCode = 401;
        next(error);
        return error;
    }
    let existingAccount = await Account.findOne({email: req.body.email});
    if (existingAccount)
    {
        const error = new Error();
        error.message = 'Account already exist';
        error.statusCode = 401;
        next(error);
        return error;
    }
    existingAccount = await Account.findOne({username: req.body.username});
    if (existingAccount){
        const error = new Error();
        error.message = 'Account already exist';
        error.statusCode = 401;
        next(error);
        return error;
    }
    const account = await Account.create({...req.body,
        password: await bcrypt.hash(req.body.password,12),
        date: new Date(),
        cups_of_water: 0,
        calories: 0,
        calories_range: 2500,
        sleep: 0});
    const token = await jwt.sign({id: account._id.toString()},"secret_"/*,{expiresIn: '1h'}*/); // "secret_" też może być w zmiennej środowiskowej
    await account.save();
    res.status(201).json({
        message: 'Succesfully created account',
        token: token
    })
}

module.exports.login= async (req,res,next)=>{
    const username = req.body.username;
    const password = req.body.password;

    const account = await Account.findOne({username: username});
    if (!account)
    {
        const error = new Error();
        error.message = 'Account not exist';
        error.statusCode = 400;
        next(error);
        return error;
    }
    const logged = await bcrypt.compare(password,account.password);
    if(logged)
    {
        const token = await jwt.sign({
            id: account._id.toString()
        },"secret_"/*,{
            expiresIn: '1h'
        }*/);
        res.status(200).json({
            message: 'Logged',
            token: token
        });
    }
    else {
        const error = new Error();
        error.message = 'Wrong Password';
        error.statusCode = 401;
        next(error);
        return error;
    }
};