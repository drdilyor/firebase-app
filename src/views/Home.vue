<template>
  <section class="section">
    <div class="my-container">
      <h1 class="title">Home</h1>
      <create-post />
      <post-detail v-for="post in $store.state.posts" :key="post.id" :post="post" />
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
