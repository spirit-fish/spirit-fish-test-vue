<template>
  <div class="Gif">
    <div v-if="gif">
      <img :src=gif.images.downsized_large.url :alt=gif.title>
    </div>
  </div>
</template>

<script>

import axios from 'axios'

const API_URL = 'https://api.giphy.com/v1/gifs/trending?api_key=5DYyxYScARZshsn38FrpiLbFGVFLHcrb&limit=1'

export default {
  name: 'Gif',
  data() {
    return {
      gif: null,
      error: null
    }
  },

  created() {
    this.fetchData()
  },

  methods: {
    fetchData() {
      this.error = this.data = null

      axios.get(API_URL)
        .then((response) => {
            this.gif = response.data.data[0]
            window.document.title = response.data.data[0].title
        })
        .catch(error => this.error = error)
    },
  },
}
</script>
