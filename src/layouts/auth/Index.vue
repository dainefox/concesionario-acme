<template>
  <v-app>
    <default-view />
  </v-app>
</template>

<script>
  export default {
    name: 'AuthLayout',

    components: {
      DefaultView: () => import(/* webpackChunkName: "default-view" */ './View'),
    },
  }
</script>
