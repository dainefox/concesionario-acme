<template>
  <v-container>
    <material-card
      icon="mdi-account-outline"
      icon-small
      title="Todos los usuarios"
      color="accent"
    >
      <v-simple-table>
        <thead>
          <tr>
            <th>Cedula</th>
            <th>Nombre</th>
            <th>Email</th>
          </tr>
        </thead>

        <tbody>
          <tr
            v-for="(user, index) in users"
            :key="`${index}-${user.cedula}`"
            class="cursor-pointer"
            @click="touchUser(user)"
          >
            <td class="uppercase">
              {{ user.cedula }}
            </td>
            <td class="capitalize">
              {{ user.nombre }}
            </td>
            <td>
              {{ user.email }}
            </td>
          </tr>
        </tbody>
      </v-simple-table>
    </material-card>

    <user-register ref="userRegister" />
  </v-container>
</template>

<script>
  export default {
    name: 'Users',

    components: {
      UserRegister: () => import(/* webpackChunkName: "user-register" */ '@/components/UserRegister.vue'),
    },

    data: () => ({
      users: [
        {
          cedula: '1111111111',
          nombre: 'daniel alejandro castaño',
          email: 'dcastano@univalle.edu',
        },
        {
          cedula: '1111111112',
          nombre: 'davi ernesto garreta',
          email: 'dgarreta@univalle.edu',
        },
        {
          cedula: '1111111113',
          nombre: 'paola daniela avila',
          email: 'avila@univalle.edu',
        },
        {
          cedula: '1111111114',
          nombre: 'andrea rincon',
          email: 'arincon@univalle.edu',
        },
      ],
    }),

    methods: {
      touchUser (user) {
        this.$refs.userRegister.open(user)
      },
    },
  }
</script>

<style lang="scss" scoped>
.capitalize {
  text-transform: capitalize;
}
.uppercase {
  text-transform: uppercase;
}
.cursor-pointer {
  cursor: pointer;
}
</style>
