const express =require('express')
//controller func
const {signupuser, loginuser}=require('../controllers/userContoller')
const router =express.Router()

router.post('/login',loginuser)
router.post('/signup',signupuser)



module.exports=router