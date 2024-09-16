import express from 'express';
import cors from 'cors';
import {db} from './db.js';

const app = express();

app.use(cors())
app.use(express.json())

app.get('/', async (req, res) => {
    const movies = await db.movies.findMany({
        select: {
            name: true,
            banner: true,
            id: true
        }
    });

    console.log("Peliculas obtenidas");

    return res.json({
        data: movies
    })
})

app.get('/:id', async (req, res) => {
    const id = req.params.id;

    const movie = await db.movies.findFirst({
        where: {
            id
        }
    });

    if(movie) console.log(`Pelicula ${movie.name} obtenida`);

    return res.json({
        data: movie
    })
})

app.post('/', async (req, res) => {
    const {name, year, rating, banner, director, genre, url} = req.body;

    const movie = await db.movies.create({
        data: {
            name,
            year,
            rating,
            banner,
            director,
            genre,
            url
        }
    });

    console.log(`Pelicula ${movie.name} creada`);

    return res.json({
        data: movie
    })
})

app.patch('/:id', async (req, res) => {
    const id = req.params.id;
    const {name, year, rating, banner, director, genre, url} = req.body;

    const movie = await db.movies.update({
        where: {
            id
        },
        data: {
            name,
            year,
            rating,
            banner,
            director,
            genre,
            url
        }
    });

    console.log(`Pelicula ${movie.name} actualizada`);

    return res.json({
        data: movie
    })
})

app.delete('/:id', async (req, res) => {
    const id = req.params.id;

    const deleted = await db.movies.delete({
        where: {
            id
        }
    });

    console.log(`Pelicula ${deleted.name} eliminada`);

    return res.json({
        data: deleted
    })
})

app.listen(3001, () => {
    console.log("Api en puerto 3001");
})