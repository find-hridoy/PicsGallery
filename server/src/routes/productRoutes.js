// External Imports
const router = require('express').Router();

// Internal Imports
const { createProduct, listProduct, deleteProduct } = require('../controllers/productController');
const { protect, admin } = require('../middleware/authMiddleware');

// User route
router.post('/create', protect, admin, createProduct);
router.get('/', listProduct);
router.delete('/delete/:id', protect, admin, deleteProduct);

module.exports = router;
