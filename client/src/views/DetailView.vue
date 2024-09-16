<script>
import axios from '../utils/axios.js'

export default {
    data() {
        return {
            movie: {}
        }
    },

    methods:  {
        async getMovie(){
            let params = this.$route.params.id;
            let {data} = await axios.get(`/${params}`)
            data.data.url = data.data.url.replace('watch?v=', 'embed/')
            console.log(data.data)
            return this.movie = data.data
        }
    },
    mounted() {
        this.getMovie();
    }
}
</script>

<template>
    <div class="movie-container">
        <h1 class="movie-title">{{ movie.title }}</h1>
        <img :src="movie.banner" alt="Movie Banner" class="movie-banner"/>
        <div class="movie-details">
            <p><strong>Director:</strong> {{ movie.director }}</p>
            <p><strong>Género:</strong> {{ movie.genre }}</p>
            <p><strong>Año de estreno:</strong> {{ movie.year }}</p>
            <p><strong>Rating:</strong> {{ movie.rating }}</p>
        </div>
        <iframe :src="movie.url" frameborder="0" allow="autoplay" class="movie-trailer"></iframe>
    </div>
</template>

<style scoped>
.movie-container {
    background-color: #e8eaf6; /* Light indigo background */
    padding: 20px;
    border-radius: 10px;
    max-width: 500px;
    margin: 40px auto;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    color: #1a237e; /* Dark indigo text */
    font-family: 'Nunito', sans-serif;
}

.movie-title {
    font-size: 2.5rem;
    color: #3f51b5; /* Primary indigo color */
    text-align: center;
    margin-bottom: 20px;
}

.movie-banner {
    width: 100%;
    height: auto;
    border-radius: 8px;
    margin-bottom: 20px;
}

.movie-details {
    margin-bottom: 20px;
    line-height: 1.8;
}

.movie-details p {
    font-size: 1.1rem;
    margin: 8px 0;
    color: #283593; /* Slightly darker indigo */
}

.movie-trailer {
    width: 100%;
    height: 400px;
    border-radius: 8px;
    border: none;
}

@media (max-width: 768px) {
    .movie-trailer {
        height: 250px;
    }
}
</style>
