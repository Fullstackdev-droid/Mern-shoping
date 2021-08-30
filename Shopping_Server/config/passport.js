//import npm package
const
    JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;

//import function
import config from './index';

var opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = config.secretOrKey;

//import model
import { User } from '../models';

export const usersAuth = (passport) => {
    passport.use("usersAuth",
        new JwtStrategy(opts, async function (jwt_payload, done) {
            User.findById(jwt_payload._id, function (err, user) {
                if (err) { return done(err, false) }
                else if (user) {
                    let data = {
                        id: user._id,
                    }
                    return done(null, data);
                }
                return done(null, false)
            })
        })
    )
}

export const adminAuth = (passport) => {
    console.log("tssss***************");

    passport.use("adminAuth",
        new JwtStrategy(opts, async function (jwt_payload, done) {
            Admin.findById(jwt_payload._id, function (err, user) {

                console.log("userrrrrrrrrrrrrrrrrrrrrrr",user);
                if (err) { return done(err, false) }
                else if (user) {
                    let data = {
                        id: user._id,
                    }
                    return done(null, data);
                }
                return done(null, false)
            })
        })
    )
}
