const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const authHeader = req.get('Authorization');
    if(!authHeader){
        req.isAuth = false;
        return next();
    }
    const token = authHeader.split(' ')[1]; //Bearer token
    if(!token || token === ''){
        req.isAuth = false;
        return next();
    }
    let decodedToken;
    try{
    decodedToken = jwt.verify(token, 'sucSuperPrivateKey');
    }
    catch( err ){
        req.isAuth = false;
        return next();
    }
    if(!decodedToken){
        req.isAuth = false;
        return next();
    }
    req.isAuth = true;
    req.userId = decodedToken.userId;
    req.profileId = decodedToken.profileId;
    next();
};