<template>
  <create-modal
    ref="modal"
    :icon="icon"
    :position="position"
    :title="computedTitle"
    :fab="fab"
    :float="float"
    :fixed="fixed"
    :rounded="rounded"
    :color="color"
    :fncancel="close"
  >
    <owner-form />
  </create-modal>
</template>

<script>
  export default {
    name: 'OwnerRegister',

    components: {
      CreateModal: () => import(/* webpackChunkName: "create-modal" */ '@/components/CreateModal.vue'),
      OwnerForm: () => import(/* webpackChunkName: "owner-form" */ '@/components/OwnerForm.vue'),
    },

    props: {
      title: { type: String, required: false, default: 'propietario' },
      icon: { type: [String, Boolean], default: 'mdi-account-plus' },
      fab: { type: Boolean, default: true },
      float: { type: Boolean, default: true },
      fixed: { type: Boolean, default: true },
      rounded: { type: Boolean, default: false },
      color: { type: [String, Boolean], default: false },
      position: { type: [String, Boolean], default: 'bottom right' },
    },

    data: () => ({
      owner: false,
    }),

    computed: {
      computedTitle () {
        return `${this.owner ? 'Editar' : 'Registrar'} ${this.title}`
      },
    },

    methods: {
      open (owner) {
        this.owner = owner
        this.$refs.modal.open()
      },
      close () {
        if (this.owner) this.owner = false
      },
    },
  }
</script>
