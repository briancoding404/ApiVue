<script>
import { computed, watch } from 'vue';
import axios from '../utils/axios'


export default {
  data() {
    
    return {
     movies : [],
     search: ''
    }
  },
  methods: {
    async getMovies() {
      const {data} = await axios.get('/');
      return this.movies = data.data;
     
  
    },

    async deleteMovie (id) {
      const {data} = await axios.delete(`/${id}`);
      return this.getMovies();
      
    }
  },

  mounted () {
    this.getMovies();
  },

  computed: {
    filteredMovies() {
      return this.movies.filter(movie => movie.name.toLowerCase().includes(this.search.toLowerCase()));
    },

    // watch: {
    //   search(newData, oldData) {
    //     if(this.search.include(':o')) {
    //       this.getMovies();
    //     }
    //   }
    // }
}
}



</script>

<template>

  <main>
    <input type="text" v-model="search" placeholder="Buscar pelicula">      
    <div class="flex-box">
      <div v-for="movie in filteredMovies" :key="movie.id" class="card">
        <img :src="movie.banner" alt="movie.banner" class="img">
        <p>{{ movie.name }}</p>
        <router-link :to="'/'+ movie.id" class="a">Detalles</router-link>
        <button class="a" @click="deleteMovie(movie.id)">Eliminar</button>
        <router-link :to="'/'+ movie.id + '/edit'" class="a">Editar</router-link>
      </div>
    </div>
  </main>
</template>


<style scoped>

  .card {
    background: #181818;
    width: 250px;
    margin: 20px;
    /* box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.05); */
    box-sizing: border-box;
    border-radius: 5px;
  }
  input {
    width: 300px;
    height: 40px;
    margin: 0 auto;
    display: block;
    border: 2px solid grey;
    border-radius: 10px;
    padding: 10px 15px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); /* Sombra ligera debajo del input */

  }
  main {
  padding-top: 30px; /* O ajusta según sea necesario para evitar que el contenido se solape con el navbar */
}

  .img {
    height: 200px;
    width: 100%;
    border-radius: 5px;
    background-size: cover;
  }

  .a{
    padding: 10px;
    width: 100%;
    display: block;
    text-align: center;
    background-color:#e50914;
    border-radius: 20px;
    color: white;
    font-weight: bold;
    text-decoration: none;
    font-size: 15px;
    margin-bottom: 7px;
  }

  .flex-box {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }

  .card p {
    text-align: center;
    margin: 10px;
    color: #fff;
    font-weight: bold;
  }

  button {
    border: none;
  }

</style>
