<template>
  <v-dialog
    v-model="dialog"
    width="500"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-row>
        <v-col cols="12">
          <v-btn
            :fab="fab"
            :float="float"
            :fixed="fixed"
            :rounded="rounded"
            :color="color || null"
            dark
            v-bind="{
              ...attrs,
              ...directions
            }"
            class="max-width"
            v-on="on"
          >
            <template v-if="icon">
              <v-icon>{{ icon }}</v-icon>
            </template>
            <template v-else>
              {{ title }}
            </template>
          </v-btn>
        </v-col>
      </v-row>
    </template>

    <v-card>
      <v-card-title class="headline grey lighten-2">
        {{ title }}
      </v-card-title>

      <v-card-text>
        <slot />
      </v-card-text>

      <v-divider />

      <v-card-actions>
        <v-spacer />

        <v-btn
          color="blue darken-1"
          text
          @click="cancel"
        >
          Cancelar
        </v-btn>
        <v-btn
          color="blue darken-1"
          text
          @click="submit"
        >
          Aceptar
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
  export default {
    name: 'CreateModal',

    props: {
      title: { type: String, required: true },
      icon: { type: [String, Boolean], default: false },
      fab: { type: Boolean, default: false },
      float: { type: Boolean, default: false },
      fixed: { type: Boolean, default: false },
      rounded: { type: Boolean, default: false },
      color: { type: [String, Boolean], default: false },
      position: { type: [String, Boolean], default: false },
      fncancel: { type: [Function, Boolean], default: false },
      fnsubmit: { type: [Function, Boolean], default: false },
    },

    data: () => ({
      dialog: false,
    }),

    computed: {
      directions () {
        const dir = {
          top: false,
          bottom: false,
          right: false,
          left: false,
        }

        if (typeof this.position === 'string') {
          this.position
            .split(' ')
            .forEach(position => {
              dir[position] = true
            })
        }

        return dir
      },
    },

    methods: {
      open () {
        this.dialog = true
      },
      dismiss () {
        this.dialog = false
      },
      cancel () {
        this.dismiss()
        if (this.fncancel) this.fncancel()
      },
      submit () {
        this.dismiss()
        if (this.fnsubmit) this.fnsubmit()
      },
    },
  }
</script>

<style lang="scss" scoped>
.max-width {
  max-width: 100%;
}
</style>
