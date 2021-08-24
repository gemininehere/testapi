let express=require('express')
let router=express.Router();
let usermodel=require("./usermodel")
let app=require('./server')



app.use(express.json())



router.get('/',(req,res)=>res.json({message:"hello from rest router",
                           messagetwo:"i am rest"}))



router.get('/user',(req,res)=>{
usermodel.find({})
.then((user)=>{
    if(!user) {res.status(404).send()}
    res.send(user)
})
.catch((err)=>res.status(400).send(err))
})

router.post('/user',(req,res)=>{
    var newuser = new usermodel({
        username: req.body.name
        
    });
    //console.log(req.body.name);
    
   newuser.save()
   .then(res.send("success")),(e)=>{res.status(404).send("error"+e)}
})


module.exports=router;
