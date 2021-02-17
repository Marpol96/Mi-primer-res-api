const { Router} = require('express');
const router = Router();
const _ = require('underscore');

const movies = require('../sample.json');
console.log(movies);

router.get('/', (req,res)=>{
    res.json(movies);
});

/*>Agregar registros*/
router.post('/',(req,res) => {
    const {title,director,year,raiting} = req.body;
    if(title && director && year && raiting){
        const id = movies.length + 1;
        const newMovie = {...req.body, id};
        console.log(newMovie);
        movies.push(newMovie);
        res.json(movies);
    }else{
        res.status(500).json({error: 'Ocurrio un error!'});
    }
});

/*Eliminando registros */
router.delete('/:id', (req,res) => {
    const {id} = req.params;
    _.each(movies, (movie, i) =>{
        if(movie.id == id){
            movies.splice(i,1);
        }
    })
    console.log(movies);
})

module.exports = router;