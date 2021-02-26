<template>
  <material-card
    v-bind="$attrs"
    class="v-card--material-chart"
    full-header
  >
    <template #heading>
      <div style="width: 100%; height: 150px;">
        <img
          :Src="src"
          style="height: inherit; width: inherit; object-fit: cover;"
        >
      </div>
    </template>

    <template #subtitle>
      <slot name="subtitle" />
    </template>

    <slot />

    <template #actions>
      <slot name="actions" />
    </template>
  </material-card>
</template>

<script>
  export default {
    name: 'MaterialImageCard',

    inheritAttrs: false,

    props: {
      src: {
        type: String,
        default: require('@/assets/user-img-placeholder.png'),
      },
    },
  }
</script>

<style lang="sass">
  .v-card--material-chart
    p
      color: #999

    .v-card--material__sheet
      max-height: 185px
      width: 100%

      .ct-label
        color: rgba(255, 255, 255, 1)
        opacity: .7
        font-size: 0.875rem
        font-weight: 300

      .ct-grid
        stroke: hsla(0,0%,100%,.2)

      .ct-series-a .ct-point,
      .ct-series-a .ct-line,
      .ct-series-a .ct-bar,
      .ct-series-a .ct-slice-donut
          stroke: rgba(255,255,255,.8)

      .ct-series-a .ct-slice-pie,
      .ct-series-a .ct-area
          fill: rgba(255,255,255,.4)
</style>
