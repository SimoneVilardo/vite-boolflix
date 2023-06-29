<script>
import axios from 'axios';

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

  mounted(){
    this.getFilms();
  },
  methods:{
    getFilms(){

      let myUrl=store.apiUrl;

      if(store.filmsValue !== ''){
        myUrl += `&query=${store.filmsValue}`;
      }

      axios.get(myUrl).then((response) => {
        store.myFilms = response.data.results;
      });
    }
  }
}
</script>

<template>
  <div class="container-fluid bg-black">
    <div class="row d-flex justify-content-center">
      <div class="col-10">
        <AppHeader @films="getFilms"/>
        <AppMain />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  @use '../src/styles/generals.scss';
</style>
