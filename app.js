//jshint esversion:6

const express=require("express");
const bodyParser=require("body-parser");
const ejs=require("ejs");

const homeContent="Hello!! I am Jenny.I am a student and love to do coding and development.";

const message=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor corporis voluptas maiores, suscipitaperiam ipsam, asperiores earum omnis dolorem pariatur iste tempore cumque iure temporibus cum atIpsum, tenetur excepturi...."

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

let blogs=[];
let options ={
  day:'numeric',
  month:'long',
  year:'numeric'
}
let today=new Date();
const d = today.toLocaleDateString("en-US",options);
app.get('/', function(req, res){
  res.render("home",{introContent:homeContent});
});

app.get('/compose', function(req, res){
  res.render("compose");
});

app.get('/blogs',function(req,res){
  res.render("blogs",{
    blogs:blogs,
    message:message,
    d:d
  });
});

app.post("/compose",function(req,res){
  const blog={
    title: req.body.blogTitle,
    content: req.body.blogBody
  };

  blogs.push(blog);

  res.redirect("/blogs");
});

app.listen(3000 ||process.env.PORT, function() {
  console.log("Server started on port 3000");
});
