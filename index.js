const express = require('express')
const morgan = require('morgan')

const app = express()

app.set('view engine' , 'ejs')

app.listen(3000)

app.use(express.static('public'))

app.get('/' , (req , res) => {
    const blogs =[
        {title : 'chicken' , author : 'samuel'},
        {title : 'turkey' , author : 'emma'},
        {title : 'cow' , author : 'ejiro'}
    ]
    res.render('index' , {blog : 'this is cool' , blogs});
})

app.get('/about' , (req , res) => {
    res.render('about');
})

app.get('/create/blog' , (req , res) => {
    res.render('blog');
})

app.use((req , res) => {
    res.status(404).render('404');
})



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