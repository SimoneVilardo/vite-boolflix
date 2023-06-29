<script>
import AppCard from './AppCard.vue';
import { store } from '../store.js';

export default {
    components:{
        AppCard
    },

    data() {
        return {
            store
        }
    },
}
</script>

<template>
    <div class="container">
        <div class="row">
            ciclo l'array per mostrare 
            <div class="col-12" v-for="(film, index) in store.myFilms" :key="index">
                <AppCard :myFilm="film" />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>