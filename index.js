const express = require("express");
const app = express();
const db = require('./config/db');
const Postt = require('./models/Postt');
//const port = process.env.PORT || 3000;
app.use(express.json());

db().then(()=>console.log('successfully connectrd to db')) .catch(err => console.log(err));

//to check the health of api

app.get ('/api/',(req,res)=>{
 res.status(200).json({message:"api is working"})
})
//fetching all the post
app.get ('/api/posts',(req,res)=>{
    Postt.find({}).then((data)=>{
        console.log(data);
    res.status(200).json({data})
 }).catch((err)=>{
    console.log(err);
    res.status(500).json({message:err})
 })
    
})

// get a specific post
app.get ('/api/posts/:id',(req,res)=>{
    let postid = req.params.id;
    Postt.find({_id:postid}).then((data)=>{
        console.log(data);
    res.status(200).json({data})
 }).catch((err)=>{
    console.log(err);
    res.status(500).json({message:err})
 })
    
})
//create a new post
app.post ('/api/posts/',(req,res)=>{
    let newPost = new Postt({
        title: req.body.title,
        description: req.body.description

    })
    newPost.save().then((data)=>{
        res.status(200).json({message:"post created successfully"})
    }).catch((err)=>{
       return res.sendStatus(500).json({message: err})
    })
    
})
//update post
app.put ('/api/posts/:id',(req,res)=>{

let postid =req.params.id;

let newInfo ={
    title:req.body.title,
    description: req.body.description
}
post.findByIdAndUpdate(postid , newInfo).then((data)=>{
    res.status(200).json({message:"post updated successfully"})
}).catch((err)=>{
     res.sendStatus(500).json({message: err})
 })
    
})
//delete post
app.delete ('/api/posts/:id',(req,res)=>{
    let postid = req.params.id;
    post.findByIdAndDelete(postid).then(()=>{
        res.status(200).json({message:"post delete  successfully"})
    
    }).catch((err)=>{
        
    })
})




app.listen(3000 , (err)=>{
    if(!err){
        console.log('server is up and running at port 3000');
    }
})