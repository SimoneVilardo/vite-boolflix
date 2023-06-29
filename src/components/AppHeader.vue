<script>
import { store } from '../store.js'
export default {
    data() {
        return {
            store
        }
    },
}
</script>

<template>
    <div class="container" style="color: red;">
        <div class="row py-2 d-flex justify-content-between">
            <div class="col-6">
                <h1>BOOLFLIX</h1>
            </div>
            <div class="col-6 d-flex align-items-center justify-content-end">
                <input type="text" placeholder="Search Films" v-model="store.filmsValue">
                <button @click="$emit('films')">SEARCH</button>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    h1{
        font-size: 60px;
        font-weight: bold;
    }

    button, input{
        font-weight: bold;
    }
</style>