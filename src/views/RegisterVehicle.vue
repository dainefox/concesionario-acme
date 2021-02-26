<template>
  <v-row justify="center">
    <v-col
      cols="12"
      md="8"
    >
      <material-card
        color="primary"
        icon="mdi-car-lifted-pickup"
      >
        <template #title>
          Registra <small class="text-body-1"> vehiculo</small>
        </template>

        <vehicle-form />
      </material-card>
    </v-col>

    <v-col
      cols="12"
      md="4"
    >
      <owner-preview />
    </v-col>
  </v-row>
</template>

<script>
  export default {
    name: 'BuyVehicle',

    components: {
      VehicleForm: () => import(/* webpackChunkName: "vehicle-form" */ '@/components/VehicleForm.vue'),
      OwnerPreview: () => import(/* webpackChunkName: "owner-preview" */ '@/components/OwnerPreview.vue'),
    },
  }
</script>
