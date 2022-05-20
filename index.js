const express = require("express");
const mongoose = require("mongoose");
const Blog = require('./models/blog')

const app = express();

const dbURL = "mongodb+srv://abd:abd1234@cluster0.l6kmq.mongodb.net/node-tuts?retryWrites=true&w=majority";

mongoose.connect(dbURL)
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err , "error1"));

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({extended : true}))

app.get("/", (req, res) => {
  res.redirect("/blogs")
});

app.get("/about", (req, res) => {
  res.render("about")
});

///blogs

app.get("/blogs" , (req , res) => {
  Blog.find().sort({createdAt : -1})
    .then((result) => {
      res.render("index" , {blogs : result})
    })
    .catch((error) => console.log('error1'))
})

app.post("/blogs" , (req , res) => {
  const blog = new Blog(req.body);

  blog.save()
    .then((result) => {
      res.redirect("/blogs")
    })
    .catch((error) => console.log('error'))
})

app.get('/blogs/:id' , (req , res) => {
  const id = req.params.id;

  Blog.findById(id)
  .then((result) => {
    res.render('details' , {blog : result})
  })
  .catch((error) => console.log(error))
})

app.delete('/blogs/:id' , (req , res) => {
  const id = req.params.id;

  Blog.findByIdAndDelete(id)
  .then(result => {
    res.json({ redirect : '/blogs'})
  })
  .catch((error) => console.log(error))
})



app.get("/create/blog", (req, res) => {
  res.render("blog");
});




app.use((req, res) => {
  res.status(404).render("404");
});





























// app.get('/about' , (req , res) => {
//     res.sendFile('./public/about.html' , {root : __dirname})
// })
// app.get('/about-us' , (req , res) => {
//     res.redirect('/about')
// })

// app.use((req , res) => {
//     res.status(404).sendFile('./public/404.html' , {root : __dirname})
// })

// const express = require('express');

// const app = express();

// app.listen(3000);

// app.get('/' , (req , res) => {
//     res.send(`<p>this is it</p>`)
// })

// // app.get('/about' , (req , res) => {
// //     res.sendFile('./public/about.html' , {root : __dirname})
// // })
