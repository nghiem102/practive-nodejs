import mongoose,{Schema} from "mongoose";
const { ObjectId} = mongoose.Types

const productSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required:true
    },
    category: {
        type: ObjectId,
        ref: "category"
    }
},{ timestamps:true})

export default mongoose.model('product', productSchema)