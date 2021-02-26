<template>
  <v-container
    id="regular-tables-view"
    fluid
    tag="section"
  >
    <view-intro heading="Publicaciones" />

    <router-view />
  </v-container>
</template>

<script>
  export default {
    name: 'Posts',
  }
</script>
