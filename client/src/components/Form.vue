<script>
import axios from '../utils/axios';

export default {
    data() {
        return {
            movie: {
                name: '',
                banner: '',
                year: '',
                rating: '',
                director: '',
                genre: '',
                url: '',
            }
        }
    },
    methods: {
        async submitForm() {
            try {
                const response = await axios.post('/movies', this.movie);
                console.log('Movie added successfully', response.data);
                // Handle success (e.g., redirect or show a success message)
            } catch (error) {
                console.error('Error adding movie', error);
                // Handle error (e.g., show an error message)
            }
        }
    },

    methods : {
        async postMovie() {
            await axios.post('/', this.movie);
            console.log('Movie added successfully',this.movie)
            alert('Movie added successfully')
            this.$router.push('/')
            
        }
    }
}
</script>

<template>
  <div class="form-container">
    <h1 class="form-title">Agregar Película</h1>
    <form @submit.prevent="postMovie()">
      <div class="form-group">
        <label for="name">Nombre:</label>
        <input type="text" id="name" v-model="movie.name" required />
      </div>
      <div class="form-group">
        <label for="banner">Banner URL:</label>
        <input type="text" id="banner" v-model="movie.banner" required />
      </div>
      <div class="form-group">
        <label for="year">Año de Estreno:</label>
        <input type="text" id="year" v-model="movie.year" required />
      </div>
      <div class="form-group">
        <label for="rating">Rating:</label>
        <input type="text" id="rating" v-model="movie.rating" step="0.1" required />
      </div>
      <div class="form-group">
        <label for="director">Director:</label>
        <input type="text" id="director" v-model="movie.director" required />
      </div>
      <div class="form-group">
        <label for="genre">Género:</label>
        <input type="text" id="genre" v-model="movie.genre" required />
      </div>
      <div class="form-group">
        <label for="url">URL del Trailer:</label>
        <input type="text" id="url" v-model="movie.url" required />
      </div>
      <button type="submit" class="submit-button">Agregar Película</button>
    </form>
  </div>
</template>

<style scoped>
.form-container {
  background-color: rgba(0, 0, 0, 0.3); /* Light indigo background */
  padding: 20px;
  border-radius: 8px;
  max-width: 600px;
  margin: 40px auto;
  /* box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); */
}

.form-title {
  font-size: 1.8rem;
  color: white; /* Indigo color */
  text-align: center;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  font-weight: 600;
  color: white; /* Darker indigo */
  margin-bottom: 5px;
}

.form-group input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  color: #333;
}

.submit-button {
  background-color: red; /* Indigo color */
  color: #fff;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.submit-button:hover {
  background-color: #283593; /* Darker indigo */
}
</style>
