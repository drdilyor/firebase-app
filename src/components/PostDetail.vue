<template>
  <article class="post block">
    <div class="media">
      <div class="media-left">
        <figure class="image is-64x64">
          <img :src="authorAvatar" alt="Avatar">
        </figure>
      </div>
      <div class="media-content">
        <p class="has-text-weight-bold has-text-primary is-6 mb-2">
          {{ post.authorFirstName }} {{ post.authorLastName }},
          {{ post.createdAt.toDate().toLocaleString() }}
        </p>
        <p>{{ post.content }}</p>
      </div>
    </div>
  </article>
</template>

<script>
import makeAvatar from '@/makeavatar.js'

export default {
  props: {
    post: {
      type: Object,
      required: true,
    }
  },
  data: () => ({
    authorAvatar: '',
  }),
  mounted() {
    this.$firebase.clUsers.doc(this.post.authorId).get()
    .then(user => {
      this.authorAvatar = makeAvatar(user.data())

    })
  }
}
</script>

<style>
</style>
