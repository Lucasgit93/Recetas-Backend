const { response, request } = require('express');
const jwt = require('jsonwebtoken');

const { User } = require('../models');


const jwtValidation = async(req = request, res = response, next) => {
    const token = req.header('token')

    if (!token) {
        return res.status(401).json({
            msg: 'No hay token en la peticion'
        })
    }

    try {
        const { uid } = jwt.verify( token, process.env.SECRETORPRIVATEKEY);

        const user = await User.findById( uid );
        
        
        if (!user) {
            return res.status(401).json({
                msg: 'Token no valido'
            })
        }
        
        req.user = user;

        next();
    } catch (error) {
        res.status(401).json({
            msg: 'Token no valido 2',
           error

        })

    }


}



module.exports = {
    jwtValidation
}