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
          <template v-if="!!licencePlate">
            Edita <small class="text-body-1"> la compra</small>
          </template>
          <template v-else>
            Compra <small class="text-body-1"> vehiculo</small>
          </template>
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

    props: {
      licencePlate: { type: [String, Boolean], default: false },
    },
  }
</script>
