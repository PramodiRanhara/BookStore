import { v2 as cloudinary } from "cloudinary"
import productModel from "../models/productModel.js";

// function for add product
const addProduct = async (req,res) => {
    try {
        const { name, description, price, category, subCategory, isNewRelease, author, isbn, publisher } = req.body

        const image = req.files?.image?.[0]

        const images = [image].filter(Boolean);


        let imagesUrl = await Promise.all(
            images.map(async (item) => {
                let result = await cloudinary.uploader.upload(item.path,{resource_type: 'image'});
                return result.secure_url
            })
        )
        

        const productData = {
            name,
            description,
            category,
            price: Number(price),
            subCategory,
            newRelease: isNewRelease ==="true" ? true : false, 
            image: imagesUrl,
            date: Date.now(),
         }
          if (productData.newRelease) 
            { productData.author = author;
               productData.publisher = publisher;
            if(isbn) {
             productData.isbn = Number(isbn);
                 }
            }


        console.log(productData);

        const product = new productModel(productData);
        await product.save()

        res.json({success:true,message:"Product Added"})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
        
    }  
}


// function for list product
const listProduct = async (req,res) => {
   try {

    const products = await productModel.find({});
    res.json({success:true,products})
    
   } catch (error) {
    console.log(error)
    res.json({success:false,message:error.message})
   }

    
}

// function for removing product info
const removeProduct = async (req,res) => {
    try {

        await productModel.findByIdAndDelete(req.body.id)
        res.json({success:true,message:"Produc Removed"})

    } catch (error) {
        
    console.log(error)
    res.json({success:false,message:error.message})  

    }
    
}


// function for single product
const singleProduct = async (req,res) => {
    try {
         
        const { productId } = req.body
        const product = await productModel.findById(productId)
        res.json({success:true,product})

    } catch (error) {
      
        console.log(error)
        res.json({success:false,message:error.message})
    }
    
}


export {listProduct,addProduct,removeProduct,singleProduct};