const express = require('express');
const app = express();
const morgan = require('morgan');

/*middlewares 
    Morgan permite ver al usuario lo que va llegando al servidor.*/
app.use(morgan('dev'));

/*configuraciones*/
app.set('port',process.env.PORT || 3000);
app.set('json spaces', 2); /*Modifica el JSON y lo ordena de una mejor manera con tabulaciones*/

/*ejecutar otro metodo de express*/
app.use(express.urlencoded({extended: false})); /*dice que los datos que se entenderan son los sencillos, solo los que vienen de input de los formularios*/
app.use(express.json()); /*Permite comenzar a recibir formatos JSON*/

/*Rutas traidas desde la carpeta routes en el archivo index ubicado en dicha carpeta */
app.use(require('./routes/index'));
app.use('/api/movies',require('./routes/movies'));

/* enviaremos un mensaje que el puerto fue abierto en el 3000*/
app.listen(3000,() => {
    console.log(`Server open on port ${app.get('port')}`);
});