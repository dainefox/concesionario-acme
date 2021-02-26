<template>
  <v-container>
    <material-card
      icon="mdi-car-lifted-pickup"
      icon-small
      title="Todos los vehiculos"
      color="accent"
    >
      <v-simple-table>
        <thead>
          <tr>
            <th>Placa</th>
            <th>Marca</th>
            <th>Linea</th>
            <th>Modelo</th>
            <th>Color</th>
            <th class="text-right">
              Estado
            </th>
          </tr>
        </thead>

        <tbody>
          <tr
            v-for="(vehicle, index) in vehicles"
            :key="`${index}-${vehicle.placa}`"
          >
            <td class="uppercase">
              {{ vehicle.placa }}
            </td>
            <td class="capitalize">
              {{ vehicle.marca }}
            </td>
            <td class="capitalize">
              {{ vehicle.linea }}
            </td>
            <td class="capitalize">
              {{ vehicle.modelo }}
            </td>
            <td class="capitalize">
              {{ vehicle.color }}
            </td>
            <td class="text-right">
              <span class="capitalize">
                {{ vehicle.estado }}
              </span>
              como
              <span class="capitalize">
                <strong>{{ vehicle.publicado }}</strong>
              </span>
            </td>
          </tr>
        </tbody>
      </v-simple-table>
    </material-card>

    <v-btn
      fab
      dark
      bottom
      right
      float
      fixed
      to="/dashboard/vehicles/add"
    >
      <v-icon>mdi-car-arrow-left</v-icon>
    </v-btn>
  </v-container>
</template>

<script>
  export default {
    name: 'ListVehicles',

    data: () => ({
      vehicles: [
        {
          placa: 'abc-123',
          marca: 'mazda',
          linea: 'r7',
          modelo: '2002',
          color: 'amarillo',
          estado: 'vendido',
          publicado: 'propietario',
        },
        {
          placa: 'cba-321',
          marca: 'toyota',
          linea: 'ae86',
          modelo: '1986',
          color: 'blanco',
          estado: 'en espera',
          publicado: 'intermediario',
        },
        {
          placa: 'abc-123',
          marca: 'mazda',
          linea: 'r7',
          modelo: '2002',
          color: 'amarillo',
          estado: 'vendido',
          publicado: 'propietario',
        },
        {
          placa: 'cba-321',
          marca: 'toyota',
          linea: 'ae86',
          modelo: '1986',
          color: 'blanco',
          estado: 'vendido',
          publicado: 'intermediario',
        },
        {
          placa: 'abc-123',
          marca: 'mazda',
          linea: 'r7',
          modelo: '2002',
          color: 'amarillo',
          estado: 'en espera',
          publicado: 'propietario',
        },
        {
          placa: 'cba-321',
          marca: 'toyota',
          linea: 'ae86',
          modelo: '1986',
          color: 'blanco',
          estado: 'en espera',
          publicado: 'intermediario',
        },
      ],
    }),
  }
</script>

<style lang="scss" scoped>
.capitalize {
  text-transform: capitalize;
}
.uppercase {
  text-transform: uppercase;
}
</style>
