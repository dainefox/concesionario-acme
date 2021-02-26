<template>
  <v-row>
    <post-item
      v-for="(post, index) in posts"
      :key="index"
      :image="post.image"
      :title="post.title"
      :subtitle="post.subtitle"
      icon="mdi-fire"
      :date="post.date"
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
      posts: {
        type: Array,
        default: () => ([]),
      },
    },
  }
</script>
