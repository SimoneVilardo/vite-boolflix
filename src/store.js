import { reactive } from 'vue';

export const store = reactive({
    apiUrl: 'https://api.themoviedb.org/3/search/multi?api_key=c18732d723a3337a0306011f05d8a7b5',
    myFilms: [],
    filmsValue: ''
})