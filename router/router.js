const express = require('express');
const router = express.Router();


const PostsController = require('../controller/PostsController');
const UsersController = require('../controller/UsersController');
const check = require('../middleware/check');

router.post('/login' , check.validation, UsersController.LoginUser)
router.post('/signup' ,check.validation,  UsersController.SignUpUser)
router.get('/posts' , PostsController.GetALlPosts)


module.exports = router
