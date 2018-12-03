var jwt = require('jwt-simple');
var moment = require('moment');
const config = require('../config');


function createToken(user) {
    const payload =
        {
            sub: user._id,
            iat: moment().unix(),
            exp: moment().add(14, 'days').unix()
        };
    return jwt.encode(payload, config.SECRET_TOKEN)
}

function decodeToken(token) {
    return new Promise((resolve, reject) => {
        try {
            const payload = jwt.decode(token, config.SECRET_TOKEN);
            if (payload.exp <= moment().unix()) {
                reject({
                    status: 401,
                    message: 'el token ha expirado'
                })
            }
            resolve(payload.sub)
        } catch (err) {
            console.log(JSON.stringify(err));
            reject({
                status: 'token invalido'
            })
        }
    });
}

module.exports = {
    createToken,
    decodeToken
};