<template>
  <v-menu
    bottom
    left
    offset-y
    origin="top right"
    transition="scale-transition"
  >
    <template v-slot:activator="{ attrs, on }">
      <v-btn
        class="ml-2"
        min-width="0"
        v-bind="attrs"
        icon
        v-on="on"
      >
        <v-icon>mdi-arrow-down-drop-circle</v-icon>
      </v-btn>
    </template>

    <v-list
      flat
      nav
    >
      <app-bar-item
        v-for="(action, i) in actions"
        :key="i"
        link
        :to="action.to"
        exac
      >
        <v-list-item-avatar>
          <v-icon
            class="grey lighten-1"
            dark
          >
            {{ action.icon }}
          </v-icon>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title v-text="action.title" />
          <v-list-item-subtitle v-text="action.subtitle" />
        </v-list-item-content>
      </app-bar-item>
    </v-list>
  </v-menu>
</template>

<script>
  export default {
    name: 'DefaultActions',

    data: () => ({
      actions: [
        {
          title: 'Compra',
          subtitle: 'Compra un vehiculo para posterior publicacion',
          icon: 'mdi-cart-arrow-down',
          to: '/dashboard/vehicles/add',
        },
        {
          title: 'Publica',
          subtitle: 'Comparte un vehiculo para la venta al publico',
          icon: 'mdi-cart-arrow-up',
          to: '/dashboard/posts/add/',
        },
      ],
    }),
  }
</script>
