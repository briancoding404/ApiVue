<script>

import axios from '../utils/axios';


export default {
    data () {
        return {
            movie: {}
        }
    },

    methods:  {
        async getMovie() {
            let {data} = await axios.get(`/${this.$route.params.id}`)
            return  this.movie  = data.data
        },

        async postMovie(movie) {
         const {data} = await axios.patch(`/${movie.id}`, movie)
         this.$router.push('/')
        }
    },
    async mounted() {
        await this.getMovie()
        if (!this.movie) {
            alert('Id invalido')
            this.$router.push('/')
        }
    }
}

</script>


<template>

    <form-edit v-if="movie && movie.id" :movie="movie" @save="postMovie"></form-edit>
    <h1 v-else>Pelicula no encontrada</h1>

</template>


