<template>
  <v-form>
    <v-container class="py-0">
      <v-row>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            color="purple"
            label="Placa"
          />
        </v-col>
      </v-row>

      <v-row>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            color="purple"
            label="Marca"
          />
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            color="purple"
            label="Linea"
          />
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            color="purple"
            label="Modelo"
          />
        </v-col>
      </v-row>

      <v-row>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            color="purple"
            label="Color"
          />
        </v-col>
      </v-row>

      <v-row>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            color="purple"
            label="Valor"
          />
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12">
          <v-textarea
            color="purple"
            label="Observaciones"
          />
        </v-col>
      </v-row>

      <v-row v-if="showSubmit">
        <v-col
          cols="12"
          class="text-right"
        >
          <v-btn
            color="primary"
            min-width="150"
            rounded
          >
            Guardar compra
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
  export default {
    name: 'VehicleForm',

    props: {
      showSubmit: {
        type: Boolean,
        default: true,
      },
    },
  }
</script>
