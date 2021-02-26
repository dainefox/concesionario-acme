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
      <v-col cols="12">
        <v-text-field
          label="Nombre completo*"
          hint="example of helper text only on focus"
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
          label="Telefono*"
          hint="example of persistent helper text"
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
  </v-form>
</template>

<script>
  export default {
    name: 'OnwerForm',
  }
</script>
