<template>
  <v-container
    id="regular-tables-view"
    fluid
    tag="section"
  >
    <view-intro heading="Vehiculos" />

    <router-view />
  </v-container>
</template>

<script>
  export default {
    name: 'Vehicles',
  }
</script>
