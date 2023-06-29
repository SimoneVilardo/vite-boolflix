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
    <div class="img_back" :style="myFilm.poster_path === null || myFilm.poster_path === undefined ? {'background-image':'url(https://st3.depositphotos.com/1322515/35964/v/600/depositphotos_359648638-stock-illustration-image-available-icon.jpg)'} : {'background-image':`url(https://image.tmdb.org/t/p/w342${myFilm.poster_path})`}">
        <div class="hover-card px-3">
            <div v-for="n in 5" :key="n" style="color: goldenrod;" class="fa-star" :class="(n <= Math.ceil(myFilm.vote_average / 2)) ? 'fas' : 'far'"></div>
            <div style="color: white;"><h4 style="color: red;">Title:</h4> {{ myFilm.title || myFilm.name }}</div>
            <div style="color: white;"><h4 style="color: red;">Original Title:</h4>{{ myFilm.original_title || myFilm.original_name }}</div>
            <div>
                <span>Lenguage:</span>
                <img class="px-2" :src="`../../node_modules/flagpack/flags/1x1/${myFilm.original_language}.svg`" alt="">
                <span class="px-2" style="color: goldenrod;">{{ myFilm.original_language }}</span>
            </div>
            <h4 style="color: goldenrod;">Plot:</h4>
            <p>{{ myFilm.overview }}</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .img_back{
        width: 342px;
        height: 495px;
        background-color: rgb(85, 84, 84);
        background-size: cover;
        background-repeat: no-repeat;
        border: 2px solid white;
    }
    .hover-card{
        display: none;
    }

    .img_back:hover .hover-card{
        display: block;
        background-color: black;
        color: #fff;
    }

    h4{
        font-weight: bold;
    }

    p{
        font-size: 1px;
    }
</style>