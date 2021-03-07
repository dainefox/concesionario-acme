<template>
  <v-col
    cols="12"
    :md="mdcols"
    :lg="lgcols"
  >
    <material-image-card
      :title="title"
      :src="image"
      class="cursor-pointer"
      @click.native="callback"
    >
      <template #subtitle>
        <div class="font-weight-light text--secondary">
          <div v-html="subtitle" />
        </div>
      </template>

      <template #actions>
        <v-tooltip right>
          <template v-slot:activator="{ on, attrs }">
            <v-icon
              v-bind="attrs"
              class="mr-1"
              small
              :color="iconColor"
              v-on="on"
            >
              {{ icon }}
            </v-icon>
          </template>
          <span>{{ flagText }}</span>
        </v-tooltip>

        <span
          class="text-caption grey--text font-weight-light"
          v-text="date"
        />
      </template>
    </material-image-card>
  </v-col>
</template>

<script>
  export default {
    name: 'PostItem',

    props: {
      id: { type: [String, Number], required: false },
      image: { type: String },
      title: { type: String, required: true },
      subtitle: { type: String, required: true },
      flag: { type: Boolean, default: false },
      date: { type: String, required: true },
      mdcols: { type: String, default: () => '6' },
      lgcols: { type: String, default: () => '3' },
      fnPost: { type: Function },
    },

    computed: {
      icon () {
        return this.flag ? 'mdi-lightning-bolt' : 'mdi-fire'
      },
      iconColor () {
        return this.flag ? 'yellow' : 'orange'
      },
      flagText () {
        return this.flag ? 'Intermediario' : 'Acme'
      },
    },

    methods: {
      callback () {
        if (this.fnPost) this.fnPost({ id: this.id, flag: this.flag })
      },
    },
  }
</script>

<style lang="scss" scoped>
.cursor-pointer {
  cursor: pointer;
}
</style>
