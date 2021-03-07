<template>
  <v-row>
    <post-item
      v-for="(post, index) in posts"
      :id="post.id"
      :key="`${index}-${post.id}`"
      :image="post.image"
      :title="post.title"
      :subtitle="post.subtitle"
      :date="post.date"
      :flag="post.intermediary"
      :fn-post="fnPost"
    />
  </v-row>
</template>

<script>
  export default {
    name: 'PostItemsWrapper',

    components: {
      PostItem: () => import(/* webpackChunkName: "post-item" */ '@/components/PostItem.vue'),
    },

    props: {
      posts: { type: Array, default: () => ([]) },
      fnPost: { type: Function },
    },
  }
</script>
