//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _=require("lodash")
let posts=[];
let post;



const homeStartingContent = "This is a simple blog site.We can compose using localhost:3000/compose for composing a blog which will be automatically rendered in home screen. ";
const aboutContent = "This is about page.Made by subramanian K(Web developer)";
const contactContent = "This is contact me page.";

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));



app.get("/",function(req,res){
  b=post
  res.render("home",{homeStartingContent:homeStartingContent,posts:posts});

})
app.get("/about",function(req,res){
  res.render("about",{aboutContent:aboutContent});
})
app.get("/contact",function(req,res){
  res.render("contact",{contactContent:contactContent});
})
app.get("/compose",function(req,res){
  res.render("compose");
})


app.post("/compose",function(req,res){
  post={
    title:req.body.postTitle,
    content:req.body.postBody
  };
posts.push(post);
res.redirect("/");

})
app.get("/posts/:topic",function(req,res){
  //console.log(req.params.topic);
  const a=_.lowerCase(req.params.topic);
  posts.forEach(function(post){
    const b=_.lowerCase(post.title);
    if(a===b){
      res.render("post",{post:post})
    }
    else{

    }

  });

})











app.listen(3000, function() {
  console.log("Server started on port 3000");
});
