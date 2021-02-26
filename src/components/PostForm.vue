<template>
  <v-form>
    <v-row>
      <v-col cols="12">
        <v-text-field
          label="Valor del vehiculo*"
          hint="example of helper text only on focus"
          required
        />
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
  export default {
    name: 'PostForm',
  }
</script>
