const jwt = require('jsonwebtoken');



const jwtGenerator = (uid = '') => {
    return new Promise((resolve, reject) => {
        const payload = { uid };


        jwt.sign(payload, process.env.SECRETORPRIVATEKEY, {
            expiresIn: '24h'
        }, (err, token) => {
            if(err){
                console.log(err)
                reject('Usuario invalido')
            } else {
                resolve(token);
            }
        })
    })
}



module.exports = {
    jwtGenerator
}