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
            <div class="col-4 mb-4 d-flex flex-wrap" v-for="(film, index) in store.myFilms" :key="index">
                <AppCard :myFilm="film" />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>