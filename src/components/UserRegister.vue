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
    <user-form :user="user" />
  </create-modal>
</template>

<script>
  export default {
    name: 'UserRegister',

    components: {
      CreateModal: () => import(/* webpackChunkName: "create-modal" */ '@/components/CreateModal.vue'),
      UserForm: () => import(/* webpackChunkName: "user-form" */ '@/components/UserForm.vue'),
    },

    props: {
      title: { type: String, required: false, default: 'usuario' },
      icon: { type: [String, Boolean], default: 'mdi-account-plus-outline' },
      fab: { type: Boolean, default: true },
      float: { type: Boolean, default: true },
      fixed: { type: Boolean, default: true },
      rounded: { type: Boolean, default: false },
      color: { type: [String, Boolean], default: false },
      position: { type: [String, Boolean], default: 'bottom right' },
    },

    data: () => ({
      user: false,
    }),

    computed: {
      computedTitle () {
        return `${this.user ? 'Editar' : 'Registrar'} ${this.title}`
      },
    },

    methods: {
      open (user) {
        this.user = user
        this.$refs.modal.open()
      },
      close () {
        if (this.user) this.user = false
      },
    },
  }
</script>
