//? Middleware para proteger mis rutas


//? Passport tiene diferentes estrategias para mejorar lineas (bearer, jwt, facebook, google earth)
const JwtStrategy = require("passport-jwt").Strategy;

//? Extraer el token de los headers de mi petición
const ExtractJwt = require("passport-jwt").ExtractJwt;
const passport = require('passport')

const jwtSecret = require('../../config').api.jwtSecret;
const {findUserById} = require('../users/users.controllers');


    const options = {
        jwtFromRequest : ExtractJwt.fromAuthHeaderWithScheme("jwt"),
        secretOrKey: jwtSecret
    };
    passport.use(
        new JwtStrategy(options, async(tokenDecoded, done) => {
        //? done(error, tokenDecoded) 
            try {
                const user = await findUserById(tokenDecoded.id)
                if (!user) {
                    return done(null, false); //? No existe un error, pero tampoco existe el usuario
                } 
                return done(null, tokenDecoded); //? No existe un error, pero si un usuario
            } catch (error) {
                return done(error, false); //? Si existe un error, pero no un usuario
            }
        })
    )


//? Esto es el token decoded

//* {
//*     "id": "2dd1a356-06df-41ba-a5ef-58d78e03c2f2",
//*     "user_name": "emm4",
//*     "role": "normal",
//*     "iat": 1671357479
//*   }


module.exports = passport;