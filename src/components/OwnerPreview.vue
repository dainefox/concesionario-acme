<template>
  <app-card class="mt-4 text-center">
    <v-img
      class="rounded-circle elevation-6 mt-n12 d-inline-block"
      :src="require('@/assets/user-img-placeholder.png')"
      width="128"
    />

    <v-card-text class="text-center">
      <h6 class="text-h6 mb-2 text--secondary">
        Nombre propietario
      </h6>

      <h4 class="text-h4 mb-3 text--primary">
        Cedula propietario
      </h4>

      <owner-register
        title="o buscar propietario"
        rounded
        color="primary"
        :icon="false"
        :fab="false"
        :float="false"
        :fixed="false"
        :position="false"
      />
    </v-card-text>
  </app-card>
</template>

<script>
  export default {
    name: 'OwnerPreview',

    components: {
      OwnerRegister: () => import(/* webpackChunkName: "owner-register" */ '@/components/OwnerRegister.vue'),
    },
  }
</script>
