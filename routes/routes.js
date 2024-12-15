import express from 'express';
const router=express.Router();
import {User} from '../models/users.models.js';
import multer from 'multer';
var storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,"./uploads");
    },
    filename:function(req,file,cb){
        cb(null,file.filename+"_"+Date.now()+"_"+file.originalname)
    }
})
router.get('/User',(req, res)=>{
    res.render('index', {title:"HomePage"});
})
router.get('/add-user',(req, res)=>{
    res.render("add-user",{title:"add-user"})
})
router.get('/home',(req, res)=>{
    res.render('index',{title:"HomePage"})
})

export default router;