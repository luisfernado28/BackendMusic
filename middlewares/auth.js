const services = require('../services/authService');
function isAuth(req,res,next){
    if(!req.headers.token){

        return res.status(403).send({mensaje:"No tiene"})
    }
    const token = req.headers.token.split(' ')[0];
    //asdasdasdasdasd
    services.decodeToken(token).then(response=>{
        req.token = response
        next()

    }).catch(response =>{
        res.status(response.status)
    })
}
module.exports = isAuth;