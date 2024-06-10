const productModel = require("../models/productModel");

// .(/\\/g, '/');
exports.createProduct = async (req, res) => {
    try {
      const { productName, description, price, category } = req.body;
      const image = req.file.filename.replace(/\\/g, '/');
      
      const findproduct = await productModel.findOne({ productName });
      if (findproduct && findproduct.image) {
        return res.status(400).json({
          success: false,
          message: "Product with this name exists",
        });
      }
  
      const product = await productModel.create({
        productName,
        description,
        price,
        category,
        image
      });
  
      return res.status(201).json({
        success: true,
        message: "Product created successfully",
        product: product
      });
    } catch (error) {
      console.error(error); // Add logging to see the error details
      return res.status(500).json({
        success: false,
        message: "Error in Create Product",
        error: error.message, // Pass only the error message to the response
      });
    }
  };
  
exports.getAllProducts= async(req, res)=>{
    const page = req.params.page || 1;
    const productPerPage=6;
   
    try {
        const skip =(page-1)*productPerPage;
        const countProduct = await productModel.countDocuments();
        const findProducts= await productModel.find()
        .limit(productPerPage)
        .sort({createAt:-1})
        .skip(skip)

       const pageCount =Math.ceil(countProduct / productPerPage);
        if (!findProducts) {
            res.status(404).json({
                success:false,
                message:"No product Found"
            });
        }
        res.status(200).json({
            success:true,
            message:"All Products",
            pagination:{
                countProduct, pageCount
            },
            products:findProducts
        });
    } catch (error) {
        res.status(500).json({
            success:false,
            message:"Internal Error in get all products"
        });
    }
}

exports.getSingleProduct = async(req, res)=>{
    const product_id= req.params.id;
   try {
   const findSP= await productModel.findById({_id:product_id});
   if (!findSP) {
    res.status(404).json({
    success:false,
    message:" product not found"
    });
   }
   res.status(200).json({
   success:true,
   message:"single products",
   singelproduct:findSP
   });
   console.log(findSP)
   } catch (error) {
    res.status(500).json({
    success:false,
    message:"error in getting single product"
    });
   }
}

exports.getProductByCategory=async(req, res)=>{
    const product_category = req.params.category;
    try {
        const findproductbycategory= await productModel.find({category:product_category});
        console.log(findproductbycategory)
    } catch (error) {
        res.status(500).json({
            success:false,
            message:"error in getting product category"
        })
    }
} 

exports.updateproduct= async(req, res)=>{
    const product_id = req.params.id
    const { productName, description, price, category, quantity} = req.body;
    const image = req.file.path;
    try {
        const findproductandupdate= await productModel.findByIdAndUpdate(product_id,{
            productName,
            description,
            price,
            category,
            quantity,
            image
        },{new: true} );
        if(!findproductandupdate){
            res.status(404).json({
                success:true,
                message:"product not found to update"
            })
        }else{
            res.status(200).json({
                success:true,
                message:"product updated successfully",
                updatedproduct:findproductandupdate
            })
        }
    } catch (error) {
        res.status(500).json({
            success:false,
            message:"error in update product"
        })
    }
}

exports.deleteProduct = async(req, res)=>{
    const product_id = req.params.id
    try {
        const findanddelete= await productModel.findByIdAndDelete({_id:product_id});
        res.status(200).json({
            success:true,
            message:"successfully deleted product"
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:"error in deleting product"
        })
    }
}