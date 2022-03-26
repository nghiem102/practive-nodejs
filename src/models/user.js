import mongoose,{ Schema } from "mongoose"
import { createHmac} from 'crypto'
import { v4 as uuidv4 } from 'uuid';

const userShema = new Schema({
    userName:{
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        minlength: 5
    },
    password: {
        type: String,
        required: true,
        minlength:6
    },
    salt: {
        type: String
    },
    roles: {
        type: Number,
        default: 0
    }

},{timestamps:true})

userShema.methods ={
    encryptPassword(password) {
        if(!password) return
        try {
            return createHmac("sha256",this.salt).update(password).digest('hex')
        } catch (error) {
            console.log(error);
        }
    },
    athenticate(password){
        return this.password = this.encryptPassword(password)
    }
}

userShema.pre("save", function(next) {
    this.salt = uuidv4()
    this.password = this.encryptPassword(this.password)
    next()
})

export default mongoose.model('user',userShema)