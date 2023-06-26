<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';

import { store } from './store.js';

export default {
  components:{
    AppHeader,
    AppMain
  },
  data() {
    return {
      store
    }
  },
}


</script>
<template>
  <div>
    <AppHeader />
    <AppMain />
  </div>
</template>
<style lang="scss">
@use '../src/styles/generals.scss'
</style>
