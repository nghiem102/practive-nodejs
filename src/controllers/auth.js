import User from "../models/user"
import jwt from "jsonwebtoken"

export const signup = async (req, res) => {
    const {email,userName,password} = req.body
    try {
        const existUser = await User.findOne({email}).exec()
        if(existUser){
            res.json({
                message: "tai khoan da ton tai"
            })
        }
        const user = await new User({email,userName,password}).save()
        res.json({
            user: {
                _id: user._id,
                email: user.email,
                name: user.name,
                roles: user.roles
            }
        })
    } catch (error) {
        res.status(400).json({
            message: 'đăng kí không thành công'
        })
    }
}


export const signin = async (req, res) => {
    const {email,password} = req.body
    try {
        const user = await User.findOne({email}).exec()
        if(!email) {
            res.json({
                message: "email khong ton tai"
            })
        }
        if(!user.athenticate(password)){
            res.json({
                message: "Sai mat khau"
            })
        }
        const token = jwt.sign({_id: user._id}, "123456", { expiresIn : '1h'})
        res.cookie('token', token,{ expire: new Date() + 9999 });
        res.json({
            token,
            user: {
                _id: user._id,
                email: user.email,
                name: user.name,
                roles: user.roles
            }
        })
    } catch (error) {
        res.status(400).json({
            message: 'đăng nhập không thành công'
        })
    }
}