import User from "../models/user";


export const userById = async (req,res,next, id) => {
    try {
        const user = await User.findById(id).exec()
        if(!user) {
            res.statys(400).json({
                message: 'khong co user'
            })
        }
        req.profile = user
        req.profile.password = undefined

        next()
    } catch (error) {
        
    }
}