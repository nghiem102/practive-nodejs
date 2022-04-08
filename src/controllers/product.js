import Product from "../models/product";

export const getAll = async (req, res) => {
    try {
        const product = await Product.find({}).exec()
        res.json(product)
    } catch (error) {
        res.status(400).json({
            error:"khong co"
        })
    }
}

export const create = async (req,res) => {
    try {
        const product = await new Product(req.body).save()
        res.json(product)
    } catch (error) {
        res.status(400).json({
            error:"khong them duoc"
        })
    }
}

export const get = async (req, res) => {
    try {
        const product = await Product.findOne({_id: req.params.id}).exec()
        res.json(product)
    } catch (error) {
        res.status(400).json({
            error:"khong co"
        })
    }
}
export const remove = async (req, res) => {
    try {
        const product = await Product.findOneAndDelete({_id: req.params.id}).exec()
        res.json(product)
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
        const product = await Product.findOneAndUpdate(consition, document,{new: true}).exec()
        res.json(product)
    } catch (error) {
        res.status(400).json({
            error:"khong co"
        })
    }
}

export const search = async (req,res) => {
    const value = req.query.q
    try {
        const products = await Product.find({$text :{$search: value}}).exec()
        res.json(products)
    } catch (error) {
        res.status(400).json({
            message: "khong co du lieu"
        })
    }
}
export const limit = async (req,res) => {
    const value = req.query.limit
    try {
        const products = await Product.find({}).limit(value).exec()
        res.json(products)
    } catch (error) {
        res.status(400).json({
            message: "khong co du lieu"
        })
    }
}