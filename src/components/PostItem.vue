<template>
  <v-col
    cols="12"
    :md="mdcols"
    :lg="lgcols"
  >
    <material-image-card
      :title="title"
      :src="image"
    >
      <template #subtitle>
        <div class="font-weight-light text--secondary">
          <div v-html="subtitle" />
        </div>
      </template>

      <template #actions>
        <v-icon
          class="mr-1"
          small
        >
          {{ icon }}
        </v-icon>

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
      image: { type: String },
      title: { type: String, required: true },
      subtitle: { type: String, required: true },
      icon: { type: String, required: true },
      date: { type: String, required: true },
      mdcols: { type: String, default: () => '6' },
      lgcols: { type: String, default: () => '3' },
    },
  }
</script>
