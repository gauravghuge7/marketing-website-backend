import mongoose from 'mongoose';
import JWT from 'jsonwebtoken';

const Schema = mongoose.Schema;

const userSchema = new Schema({
    mobile: {
        type: Number,
        required: true,
        index: true,
        trim: true,
        minLength: [10, 'mobile number must be 10 digits long'],
        maxLength: [10, 'mobile number only 10 digits long'],

    },

    ourReferralCode: {
        type: String,
        required: true,
        trim: true,
    },

    acceptReferralCode: {
        type: String,
        required: true,
        trim: true,
    },
    




}, { timestamps: true });


userSchema.methods = {
    generateOtp: async function () {
        return await Math.floor(1000 + Math.random() * 9000),

        {
            expiresIn: 60 * 60 * 24 * 30,
        }
    },

    generateToken: async function () {

        return await JWT.sign(
            {id: this._id, mobile: this.mobile},
            process.env.JWT_SECRET,

            {
                expiresIn: "1d",
            }
        )
    }


}

export const User = mongoose.model('User', userSchema);