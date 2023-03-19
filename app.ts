require('dotenv').config();
const express = require('express');
const _open = require('open');

const app = express()
const port = process.env.PORT;

// Handlebars
app.set('view engine', 'hbs');

// Servir contenido estático
//app.use( express.static('public') );

app.get('/', async (req: any, res: any) => {
    await _open('https://choiz.com.mx', {app: {name: 'google chrome', arguments: ['--incognito']}});
    res.status(200).json({
        "redirect": true
    });
    // res.render('home', {
    //     nombre: 'Fernando Herrera',
    //     titulo: 'Curso de Node'
    // });
});

// app.get('*', async (req, res) => {
//     await open('https://choiz.com.mx', {app: {name: 'google chrome', arguments: ['--incognito']}});
//     res.render('home');
// //    res.sendFile( __dirname + '/public/index.html');
// });
 
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})