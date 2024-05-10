// import { User } from '../models/user.model.js';
// import asyncHandler from '../utils/asyncHandler.js';


// const getHistory = asyncHandler(async(req, res) => {

//     const {acceptReferal} = User.getAcceptReferal;

//     const user = await User.findById(acceptReferal);

//     if (!user) {    
//         return res.status(404).json({ message: 'User not referral' });
//     }

//     return res
//         .status(200)
//         .json({ message: 'User referral history' })
//         .json(user.getHistory());

// })


// export  {
//     getHistory
// }