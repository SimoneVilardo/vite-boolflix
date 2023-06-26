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
        <h1>{{ myFilm.title }}</h1>
        <h2>{{ myFilm.original_title }}</h2>
        <h3>{{ myFilm.original_lenguage }}</h3>
        <h4>{{ myFilm.vote_average }}</h4>
    </div>
</template>
<style lang="scss" scoped>
    
</style>