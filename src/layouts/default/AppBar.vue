<template>
  <v-app-bar
    id="default-app-bar"
    app
    absolute
    class="v-bar--underline"
    color="transparent"
    :clipped-left="$vuetify.rtl"
    :clipped-right="!$vuetify.rtl"
    height="70"
    flat
  >
    <v-app-bar-nav-icon
      class="hidden-md-and-up"
      @click="drawer = !drawer"
    />
    <default-drawer-toggle class="hidden-sm-and-down" />
    <v-spacer />
    <default-actions />
    <default-go-home />
    <default-notifications />
    <default-account />
  </v-app-bar>
</template>

<script>
  // Utilities
  import { get, sync } from 'vuex-pathify'

  export default {
    name: 'DefaultBar',

    components: {
      DefaultActions: () => import(
        /* webpackChunkName: "default-actions" */
        './widgets/Actions'
      ),
      DefaultGoHome: () => import(
        /* webpackChunkName: "default-go-home" */
        './widgets/GoHome'
      ),
      DefaultAccount: () => import(
        /* webpackChunkName: "default-account" */
        './widgets/Account'
      ),
      DefaultDrawerToggle: () => import(
        /* webpackChunkName: "default-drawer-toggle" */
        './widgets/DrawerToggle'
      ),
      DefaultNotifications: () => import(
        /* webpackChunkName: "default-notifications" */
        './widgets/Notifications'
      ),
    },

    computed: {
      ...sync('app', ['drawer', 'mini']),
      name: get('route/name'),
    },
  }
</script>
