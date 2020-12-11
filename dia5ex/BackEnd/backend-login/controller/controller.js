const config = require('../secret/config.js');
const db = require('../models');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const user = require('../models');

exports.signin = async(req,res,next) =>{
    try {
        const user = await db.user.findOne({where: {email: req.body.email}});
        console.log(req.body);
        console.log(bcrypt.hashSync(req.body.password,8));
        console.log(user.password);
        //res.send(req.body.password);
        if(user){
            const passwordIsValid = await bcrypt.compare(req.body.password, user.password);
            if(passwordIsValid){
                const token = jwt.sign({
                    id: user.id,
                    name: user.namame,
                    email: user.email,
                }, 'config.secret',{
                    expiresIn: 86400, //en segundos
                }
                );
                res.status(200).send({
                    auth: true,
                    accessToken: token,
                    user: user
                })
            }else{
                res.status(401).json({
                    error: 'Error en el usuario o contraseña'
                })
            };
        }else{
            res.status(404).json({
                error: 'Error email'
            })
        };
    } catch (error) {
        res.status(500).send({
            message: 'Error ->'
        })
        next(error);
    }
};