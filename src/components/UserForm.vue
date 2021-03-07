<template>
  <v-form>
    <v-row>
      <v-col
        cols="12"
        md="6"
      >
        <v-text-field
          label="Cedula*"
          required
        />
      </v-col>
    </v-row>

    <v-row>
      <v-col
        cols="12"
        md="6"
      >
        <v-text-field
          label="Nombre completo*"
          hint="example of helper text only on focus"
          required
        />
      </v-col>

      <v-col
        cols="12"
        md="6"
      >
        <v-text-field
          label="Email*"
          type="email"
          required
        />
      </v-col>
    </v-row>

    <v-row v-if="!!user">
      <v-col
        cols="12"
        md="6"
        class="text-center"
      >
        <v-btn
          rounded
          color="primary"
          dark
        >
          Eliminar usuario
        </v-btn>
      </v-col>

      <v-col
        cols="12"
        md="6"
        class="text-center"
      >
        <v-btn
          rounded
          color="primary"
          dark
        >
          Reestablecer contraseña
        </v-btn>
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
  export default {
    name: 'UserForm',

    props: {
      user: { type: [Object, Boolean], default: false },
    },
  }
</script>
