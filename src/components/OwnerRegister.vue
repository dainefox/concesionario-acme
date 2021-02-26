<template>
  <create-modal
    :icon="icon"
    :position="position"
    :title="title"
    :fab="fab"
    :float="float"
    :fixed="fixed"
    :rounded="rounded"
    :color="color"
  >
    <owner-form />
  </create-modal>
</template>

<script>
  export default {
    name: 'RegisterOwner',

    components: {
      CreateModal: () => import(/* webpackChunkName: "create-modal" */ '@/components/CreateModal.vue'),
      OwnerForm: () => import(/* webpackChunkName: "owner-form" */ '@/components/OwnerForm.vue'),
    },

    props: {
      title: { type: String, required: false, default: 'Registrar propietario' },
      icon: { type: [String, Boolean], default: 'mdi-account-plus' },
      fab: { type: Boolean, default: true },
      float: { type: Boolean, default: true },
      fixed: { type: Boolean, default: true },
      rounded: { type: Boolean, default: false },
      color: { type: [String, Boolean], default: false },
      position: { type: [String, Boolean], default: 'bottom right' },
    },
  }
</script>
