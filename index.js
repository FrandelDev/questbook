//modules
const express = require('express');
const morgan = require('morgan');
const path = require('path');
// initializations
const app = express()
// Settings
app.set('port',process.env.PORT || 3000);
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');
// Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
//Routes
app.use(require('./routes/entries'));
//404 Handdler
app.use((red,res)=>{  
    res.status(404).render('404')
})
// Starting
app.listen(app.get('port'),()=>{
    console.log('SERVER ON PORT ',app.get('port'));
})
