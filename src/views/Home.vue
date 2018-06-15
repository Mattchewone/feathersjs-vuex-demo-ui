<template>
  <div class="home">
    <h1>Home page</h1>
    <ul>
      <li v-for="movie in movies" :key="movie._id">
        {{ movie.title }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'home',
  computed: {
    ...mapGetters('movies', {
      findMoviesInStore: 'find'
    }),

    movies () {
      return this.findMoviesInStore({ query: {} }).data
    }
  },
  methods: {
    ...mapActions('movies', {
      findMovies: 'find'
    })
  },
  created () {
    this.findMovies({ query: {} })
  }
}
</script>
