const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const { SECRET_KEY } = require('../config');

const protect = asyncHandler(async (req, res, next) => {
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            // eslint-disable-next-line prefer-destructuring
            token = req.headers.authorization.split(' ')[1];
            const decode = jwt.verify(token, SECRET_KEY);
            // eslint-disable-next-line no-underscore-dangle
            req.user = await User.findById(decode.id);
            next();
        } catch (error) {
            res.status(401);
            throw new Error('Not authorized, token failed');
        }
    }
    if (!token) {
        res.status(401);
        throw new Error('Not authorized, no token');
    }
});

module.exports = { protect };
