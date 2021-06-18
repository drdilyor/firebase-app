<template>
  <div class="post block p-4">
    <h3 class="has-text-primary title is-4">{{ post.title }}</h3>
    <p class="subtitle is-6">
      {{ post.authorFirstName }} {{ post.authorLastName }},
      {{ post.createdAt.toDate().toLocaleString() }}
    </p>
    <p>{{ post.content }}</p>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    }
  }
}
</script>

<style>
.post {
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>
