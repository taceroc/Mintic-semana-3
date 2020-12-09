const express = require("express");
const morgan = require("morgan");
const apiRoutes = require("./routes");

//instancia de express en mi app
const app = express();

//middleware morgan para detectar peticiones
app.use(morgan('dev'));


//primera ruta
app.get('/', (req, res) => {
    res.send("Hello World!");
});

app.set('PORT',3000);

app.listen(app.get('PORT'), ()=>{
    console.log('server up');
});