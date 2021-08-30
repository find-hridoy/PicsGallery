// External Imports
const router = require('express').Router();

// Internal Imports
const { userRegister, userLogin, getUserProfile } = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware');

// User route
router.post('/register', userRegister);
router.post('/login', userLogin);
router.route('/profile').get(protect, getUserProfile);

module.exports = router;
