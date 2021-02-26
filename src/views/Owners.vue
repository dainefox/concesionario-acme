<template>
  <v-container
    id="regular-tables-view"
    fluid
    tag="section"
  >
    <view-intro heading="Propietarios" />

    <router-view />
  </v-container>
</template>

<script>
  export default {
    name: 'Owners',
  }
</script>
