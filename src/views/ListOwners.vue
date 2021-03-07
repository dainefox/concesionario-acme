<template>
  <v-container>
    <material-card
      icon="mdi-account"
      icon-small
      title="Todos los propietarios"
      color="accent"
    >
      <v-simple-table>
        <thead>
          <tr>
            <th>Cedula</th>
            <th>Nombre</th>
            <th>Telefono</th>
            <th>Email</th>
          </tr>
        </thead>

        <tbody>
          <tr
            v-for="(owner, index) in owners"
            :key="`${index}-${owner.cedula}`"
            class="cursor-pointer"
            @click="touchOwner(owner)"
          >
            <td class="uppercase">
              {{ owner.cedula }}
            </td>
            <td class="capitalize">
              {{ owner.nombre }}
            </td>
            <td class="capitalize">
              {{ owner.telefono }}
            </td>
            <td>
              {{ owner.email }}
            </td>
          </tr>
        </tbody>
      </v-simple-table>
    </material-card>

    <owner-register ref="ownerRegister" />
  </v-container>
</template>

<script>
  export default {
    name: 'ListVehicles',

    components: {
      OwnerRegister: () => import(/* webpackChunkName: "owner-register" */ '@/components/OwnerRegister.vue'),
    },

    data: () => ({
      owners: [
        {
          cedula: '1111111111',
          nombre: 'daniel alejandro castaño',
          telefono: '4444444',
          email: 'dcastano@univalle.edu',
        },
        {
          cedula: '1111111112',
          nombre: 'davi ernesto garreta',
          telefono: '4444445',
          email: 'dgarreta@univalle.edu',
        },
        {
          cedula: '1111111113',
          nombre: 'paola daniela avila',
          telefono: '4444446',
          email: 'avila@univalle.edu',
        },
        {
          cedula: '1111111114',
          nombre: 'andrea rincon',
          telefono: '4444447',
          email: 'arincon@univalle.edu',
        },
        {
          cedula: '1111111111',
          nombre: 'daniel alejandro castaño',
          telefono: '4444444',
          email: 'dcastano@univalle.edu',
        },
        {
          cedula: '1111111112',
          nombre: 'davi ernesto garreta',
          telefono: '4444445',
          email: 'dgarreta@univalle.edu',
        },
        {
          cedula: '1111111113',
          nombre: 'paola daniela avila',
          telefono: '4444446',
          email: 'avila@univalle.edu',
        },
        {
          cedula: '1111111114',
          nombre: 'andrea rincon',
          telefono: '4444447',
          email: 'arincon@univalle.edu',
        },
        {
          cedula: '1111111111',
          nombre: 'daniel alejandro castaño',
          telefono: '4444444',
          email: 'dcastano@univalle.edu',
        },
        {
          cedula: '1111111112',
          nombre: 'davi ernesto garreta',
          telefono: '4444445',
          email: 'dgarreta@univalle.edu',
        },
        {
          cedula: '1111111113',
          nombre: 'paola daniela avila',
          telefono: '4444446',
          email: 'avila@univalle.edu',
        },
        {
          cedula: '1111111114',
          nombre: 'andrea rincon',
          telefono: '4444447',
          email: 'arincon@univalle.edu',
        },
        {
          cedula: '1111111111',
          nombre: 'daniel alejandro castaño',
          telefono: '4444444',
          email: 'dcastano@univalle.edu',
        },
        {
          cedula: '1111111112',
          nombre: 'davi ernesto garreta',
          telefono: '4444445',
          email: 'dgarreta@univalle.edu',
        },
        {
          cedula: '1111111113',
          nombre: 'paola daniela avila',
          telefono: '4444446',
          email: 'avila@univalle.edu',
        },
        {
          cedula: '1111111114',
          nombre: 'andrea rincon',
          telefono: '4444447',
          email: 'arincon@univalle.edu',
        },
      ],
    }),

    methods: {
      touchOwner (owner) {
        this.$refs.ownerRegister.open(owner)
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
