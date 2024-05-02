const Product = require("../model/productModel")


const seeAllProducts = async (req, res, next) => {
    try {
        const produts = await Product.find();

        if(!produts){
            return res.status(404).json({msg: "not found"})
        }

        res.status(200).json(produts)
    } catch (error) {
        res.status(500).json(error);
    }
}

const addProduct= async (req,res,next)=>{
    try {
        const {product_name,price,category,discription}=req.body;
        const newProduct= new Product({
            product_name,
            price,
            category,
            discription
        })

        await newProduct.save()
        res.status(201).json({message:'Product create successfully'})
        
    } catch (error) {
        console.log(error);
    }
}
const uppdateProduct= async (req,res)=>{
    try {
       const {product_name,price,category,discription}=req.body
       const id=req.params.id
       const findProduct= await Product.findById(id)
       if(!findProduct){
        res.status(404).json({message:"Not fond"});
       }
        if(product_name) findProduct.product_name=product_name;
        if(price) findProduct.price=price;
        if(category) findProduct.category=category;
        if(discription)findProduct.discription=discription;
        await findProduct.save()
        res.status(200).json({message:"Updated successfully"})
    } catch (error) {
        console.log(error);
        
    }
}
const deleteProduct = async (req,res)=>{
try {
    const id=req.params.id;
    const findDelete= await Product.findByIdAndDelete(id);
    if(!findDelete){
        res.status(404).json({message:"Not found"});
    }
    res.status(200).json({messge:"Delete successfully"})
} catch (error) {
    
}    
}


module.exports = {seeAllProducts,addProduct,uppdateProduct,deleteProduct}