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
    <div>
        <h1>{{ myFilm.title || myFilm.name }}</h1>
        <h2>{{ myFilm.original_title || myFilm.original_name }}</h2>
        <h3> <img :src="`../../node_modules/flagpack/flags/1x1/${myFilm.original_language}.svg`" alt=""></h3>
        <h3>{{ myFilm.original_language }}</h3>
        <h4>{{ myFilm.vote_average }}</h4>
    </div>
</template>
<style lang="scss" scoped>
    
</style>