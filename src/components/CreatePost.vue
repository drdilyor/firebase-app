<template>
  <div class="box">
    <div class="media">
      <div class="media-left">
        <figure class="image is-64x64">
          <img :src="$store.getters.myAvatar" alt="">
        </figure>
      </div>
      <div class="media-content">
        <form @submit.prevent="createPost">
          <b-field>
            <b-input v-model="content" type="textarea" placeholder="Create a post" />
          </b-field>
          <b-field><b-button
            v-show="content"
            :loading="loading"
            type="is-primary"
            native-type="submit">
            Post
          </b-button></b-field>
          <p>{{ error }}</p>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    content: '',
    loading: false,
    error: null,
  }),
  methods: {
    async createPost() {
      this.error = null
      this.loading = true
      try {
        await this.$store.dispatch('createPost', {content: this.content})
      }
      catch (err) {
        this.error = err.message
      }
      finally {
        this.content = ''
        this.loading = false
      }
    }
  }
}
</script>
