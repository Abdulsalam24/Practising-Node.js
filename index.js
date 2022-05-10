const express = require('express')

const app = express()

app.listen(3000)


app.get('/' , (req , res) => {
    res.sendFile('./public/index.html' , {root : __dirname})
})

app.get('/about' , (req , res) => {
    res.sendFile('./public/about.html' , {root : __dirname})
})
app.get('/about-us' , (req , res) => {
    res.redirect('/about')
})




app.use((req , res) => {
    res.sendFile('./public/404.html' , {root : __dirname})
})




















// const express = require('express');

// const app = express();

// app.listen(3000);

// app.get('/' , (req , res) => {
//     res.send(`<p>this is it</p>`)
// })

// // app.get('/about' , (req , res) => {
// //     res.sendFile('./public/about.html' , {root : __dirname})
// // })