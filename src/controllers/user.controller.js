import { User } from '../Models/user.model.js';
import asyncHandler from '../utils/asyncHandler.js';
import {ApiError} from '../utils/ApiError.js';
import ApiResponse from '../utils/ApiResponse.js';
import createReferral from '../Helpers/generate.referral.js';

// cookies options 

const cookieOptions = {
    maxAge: process.env.JWT_EXPIRES,
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
}


const registerUser = asyncHandler(async (req, res) => {

    
    try {
        const {mobile} = req.body; 
        console.log(mobile);

        if(!mobile) {
            throw new ApiError(400, 'mobile number is required');
        }

        if(!mobile.match(/^\d{10}$/)) {
            throw new ApiError(400, 'mobile number must be 10 digits long', mobile);
        }



        const existedUser = await User.findOne({mobile});


        let referral = "";


        if(!existedUser) {

            referral = createReferral();
            const user = await User.create({
               
                mobile,
                referral,
                createdAt: new Date(),
                updatedAt: new Date(),
                
            });

            await user.save();
            
        }
        

        // await user.save();



        const token = existedUser.generateToken();

        console.log(token);

        return res
        .status(200)
        .cookie('token', token, cookieOptions)
        .json(new ApiResponse(200, "User registered successfully"))

        
     
    }
    catch (error) {

        console.log("Error is => ", error);
        return new ApiError(400, "Error in registering user")
    }
})


const getUser = asyncHandler(async (req, res) => {

    try {
        // read the token from the cookie
        
       const {id} = req.user;

       // find token in the database by id
       
       const user = await User.findById(id);

       if(!user) {
           throw new ApiError(400, "User not found");
       }



        
        return res
        .status(200)
        .json(new ApiResponse(200, "User fetched successfully", user))

    }

    catch (error) {
        console.log("Error is => ", error);
        return new ApiError(400, "Error in getting user")
    }
});




export {
    registerUser,
    getUser
}