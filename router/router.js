const express = require('express');
const router = express.Router();


 
const PostsController = require('../controller/PostsController');
const UsersController = require('../controller/UsersController');
const ProductController = require('../controller/ProductController')
const check = require('../middleware/check')


router.get('/add-product', ProductController.addProduct);
router.post('/login',check.validation ,  UsersController.LoginUser)
router.post('/register',check.validation ,  UsersController.register)
router.get('/posts' , PostsController.GetALlPosts)


module.exports = router