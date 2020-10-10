const jwt = require('jsonwebtoken');
module.exports.isAuth = (req,res,next)=>{
    const authtoken = req.get('Authorization');
    if(!authtoken)
    {
        const error = new Error();
        error.message = "Not authenticated!";
        error.statusCode = 401;
        throw error;
    }
    const token = authtoken.split(' ')[1];// 'Bearer token'
    let decodeToken;
    try{
        decodeToken = jwt.verify(token,'secret_');
    }
    catch(err)
    {
        err.statusCode = 500;
        throw err; 
    }
    if (!decodeToken){
        const error = new Error();
        error.message = "Not authenticated!";
        error.statusCode = 401; 
        throw error;
    }
    req.userId = decodeToken.id;
    next();
}