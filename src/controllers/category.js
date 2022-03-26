import Category from "../models/category";
import Product from "../models/product";

export const getAll = async (req, res) => {
    try {
        const category = await Category.find({}).exec()
        res.json(category)
    } catch (error) {
        res.status(400).json({
            error:"khong co"
        })
    }
}

export const create = async (req,res) => {
    try {
        const category = await new Category(req.body).save()
        res.json(category)
    } catch (error) {
        res.status(400).json({
            error:"khong them duoc"
        })
    }
}

export const get = async (req, res) => {
    try {
        const category = await Category.findOne({_id: req.params.id}).exec()
        res.json(category)
    } catch (error) {
        res.status(400).json({
            error:"khong co"
        })
    }
}
export const remove = async (req, res) => {
    try {
        const category = await Category.findOneAndDelete({_id: req.params.id}).exec()
        res.json(category)
    } catch (error) {
        res.status(400).json({
            error:"khong co"
        })
    }
}

export const update = async (req, res) => {
    const consition = {_id: req.params.id}
    const document = req.body
    try {
        const category = await Category.findOneAndUpdate(consition, document,{new: true}).exec()
        res.json(category)
    } catch (error) {
        res.status(400).json({
            error:"khong co"
        })
    }
}

export const productByCategory = async (req, res) => {
    try {
        const category = await Category.findOne({_id:req.params.id}).exec()
        const products = await Product.find({category}).select("-category").exec()
        res.json([
            category,
            products
        ])
    } catch (error) {
        res.status(400).json({
            error:"khong co"
        })
    }
}