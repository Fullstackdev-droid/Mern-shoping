// import package
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';

// import lib
import config from '../config';

// import config from '../config/config';

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        default: ""
    },
    email: {
        type: String,
        default: ""
    },
    password: {
      type: String,
      default: ""
    },
    status: {
      type: Number,
      default: 1
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

UserSchema.methods.generateJWT = function (payload) {
    var token = jwt.sign(payload, config.secretOrKey);
    return `Bearer ${token}`;
};

const User = mongoose.model("user", UserSchema, "user");

export default User;