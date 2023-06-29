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
    <div>
        <input type="text" placeholder="Search Films" v-model="store.filmsValue">
        <button @click="$emit('films')">SEARCH</button>
    </div>
</template>

<style lang="scss" scoped>
    
</style>