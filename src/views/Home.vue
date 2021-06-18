<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-8">
          <h1 class="title">Home</h1>
          <post-detail v-for="post in $store.state.posts" :key="post.id" :post="post" />
        </div>
        <div class="column">
          <create-post />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import CreatePost from '@/components/CreatePost.vue'
import PostDetail from '@/components/PostDetail.vue'

export default {
  components: {CreatePost, PostDetail},
  data: () => ({
  })
}
</script>
