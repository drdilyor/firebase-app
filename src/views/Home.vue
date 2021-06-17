<template>
  <section class="section">
    <div class="my-container">
      <h1 class="title">Home</h1>
      <create-post />
    </div>
  </section>
</template>

<script>
import CreatePost from '@/components/CreatePost.vue'

export default {
  components: {CreatePost},
  data: () => ({
  })
}
</script>
