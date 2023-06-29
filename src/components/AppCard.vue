<script>
import { store } from '../store.js'

export default {
    data() {
        return {
            store
        }
    },

    props:{
        myFilm: Object
    }
}
</script>

<template>
    <div class="img_back" :style="{'background-image':`url(https://image.tmdb.org/t/p/w342${myFilm.poster_path})`}">

        <div v-for="n in 5" :key="n" style="color: goldenrod;" class="fa-star" :class="(n <= Math.ceil(myFilm.vote_average / 2)) ? 'fas' : 'far'"></div>
        <h2 style="color: goldenrod;">{{ myFilm.title || myFilm.name }}</h2>
        <h3 style="color: goldenrod;">{{ myFilm.original_title || myFilm.original_name }}</h3>
        <img :src="`../../node_modules/flagpack/flags/1x1/${myFilm.original_language}.svg`" alt="">
        <h4 style="color: goldenrod;">{{ myFilm.original_language }}</h4>
    </div>
</template>

<style lang="scss" scoped>
    .img_back{
        width: 342px;
        height: 500px;
        background-color: gray;
        background-repeat: no-repeat;
    }
</style>