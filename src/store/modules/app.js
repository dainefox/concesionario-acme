// Pathify
import { make } from 'vuex-pathify'

// Data
const state = {
  drawer: null,
  drawerImage: true,
  mini: false,
  items: [
    {
      title: 'Dashboard',
      icon: 'mdi-view-dashboard',
      to: '/dashboard/home',
    },
    {
      title: 'Compras',
      icon: 'mdi-car-lifted-pickup',
      to: '/dashboard/vehicles',
    },
    {
      title: 'Ventas',
      icon: 'mdi-star-box-multiple',
      to: '/dashboard/posts',
    },
    {
      title: 'Propietarios',
      icon: 'mdi-account',
      to: '/dashboard/owners',
    },
    {
      title: 'Usuarios',
      icon: 'mdi-account-outline',
      to: '/dashboard/users',
    },
  ],
}

const mutations = make.mutations(state)

const actions = {
  ...make.actions(state),
  init: async ({ dispatch }) => {
    //
  },
}

const getters = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}
