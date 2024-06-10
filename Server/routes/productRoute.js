const express = require("express");
const {
  createProduct,
  getAllProducts,
  getSingleProduct,
  getProductByCategory,
  updateproduct,
  deleteProduct,
} = require("../controllers/productController");
const { requireSignIn, isAdmin } = require("../middlewares/authMiddle");
const router = express.Router();
const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../Client/src/assets/images/");
  },
  filename: function (req, file, cb) {
    const uniqueString = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const ext = file.originalname.split(".").pop();
    cb(null, "media-" + uniqueString + "." + ext);
  },
});

const upload = multer({ storage: storage });

router.post(
  '/create-product',
  requireSignIn,
  isAdmin,
  upload.single("image"),
  createProduct
);
router.get('/getallproducts/:page', getAllProducts);
router.get('/get-single-product/:id', getSingleProduct);
router.get('/get-product-by-category/:category', getProductByCategory);
router.put('/update-product/:id', upload.single("image") ,updateproduct)
router.delete('/delete-product/:id',deleteProduct)
module.exports = router;
