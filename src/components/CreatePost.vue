<template>
  <div class="box">
    <h2 class="title is-4">Create a post</h2>
    <form @submit.prevent="createPost">
      <b-field>
        <b-input v-model="title" placeholder="Title" />
      </b-field>
      <b-field>
        <b-input v-model="content" type="textarea" />
      </b-field>
      <b-field><b-button
        :loading="loading"
        :disabled="!(title && content)"
        type="is-primary"
        native-type="submit">
        Post
      </b-button></b-field>
      <p>{{ error }}</p>
    </form>
  </div>
</template>

<script>
export default {
  data: () => ({
    title: '',
    content: '',
    loading: false,
    error: null,
  }),
  methods: {
    async createPost() {
      this.error = null
      this.loading = true
      try {
        await this.$store.dispatch('createPost', {title: this.title, content: this.content})
      }
      catch (err) {
        this.error = err.message
      }
      finally {
        this.title = ''
        this.content = ''
        this.loading = false
      }
    }
  }
}
</script>
