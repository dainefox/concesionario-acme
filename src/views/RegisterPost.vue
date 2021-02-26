<template>
  <v-row justify="center">
    <v-col cols="12">
      <material-card
        color="primary"
        icon="mdi-car-lifted-pickup"
      >
        <template #title>
          Crea <small class="text-body-1"> una publicacion</small>
        </template>

        <v-container class="py-0">
          <template>
            <v-stepper
              v-model="e6"
              vertical
            >
              <template>
                <v-stepper-step
                  :complete="e6 > 1"
                  step="1"
                >
                  Registra un vehiculo
                  <small>Busca un vehiculo o registra uno nuevo</small>
                </v-stepper-step>

                <v-stepper-content step="1">
                  <vehicle-form :show-submit="false" />
                  <v-btn
                    color="primary"
                    @click="e6 = 2"
                  >
                    Siguiente
                  </v-btn>
                </v-stepper-content>
              </template>

              <template>
                <v-stepper-step
                  :complete="e6 > 2"
                  step="2"
                >
                  Busca o registra un propietario
                  <small>Busca un propietario o registra uno nuevo</small>
                </v-stepper-step>

                <v-stepper-content step="2">
                  <owner-form />
                  <v-btn
                    color="primary"
                    @click="e6 = 3"
                  >
                    Siguiente
                  </v-btn>
                  <v-btn
                    text
                    @click="e6 = 1"
                  >
                    Atras
                  </v-btn>
                </v-stepper-content>
              </template>

              <template>
                <v-stepper-step
                  :complete="e6 > 3"
                  step="3"
                >
                  Crea tu publicacion
                  <small>Ingresa el valor que deseas por tu vehiculo</small>
                </v-stepper-step>

                <v-stepper-content step="3">
                  <post-form />
                  <v-btn
                    color="primary"
                    @click="e6 = 4"
                  >
                    Siguiente
                  </v-btn>
                  <v-btn
                    text
                    @click="e6 = 2"
                  >
                    Atras
                  </v-btn>
                </v-stepper-content>
              </template>

              <template>
                <v-stepper-step step="4">
                  Verifica tu publicacion
                </v-stepper-step>

                <v-stepper-content step="4">
                  <post-item
                    v-bind="post"
                    mdcols="12"
                    lgcols="21"
                  />
                  <v-btn
                    color="primary"
                    @click="e6 = 1"
                  >
                    Publicar
                  </v-btn>
                  <v-btn
                    text
                    @click="e6 = 1"
                  >
                    Cancelar
                  </v-btn>
                </v-stepper-content>
              </template>
            </v-stepper>
          </template>
        </v-container>
      </material-card>
    </v-col>
  </v-row>
</template>

<script>
  export default {
    name: 'RegisterPost',

    components: {
      VehicleForm: () => import(/* webpackChunkName: "vehicle-form" */ '@/components/VehicleForm.vue'),
      OwnerForm: () => import(/* webpackChunkName: "owner-form" */ '@/components/OwnerForm.vue'),
      PostForm: () => import(/* webpackChunkName: "post-form" */ '@/components/PostForm.vue'),
      PostItem: () => import(/* webpackChunkName: "post-item" */ '@/components/PostItem.vue'),
    },

    data: () => ({
      e6: 1,
      post: {
        image: 'https://sites.google.com/site/imagenesdecarrosgratis/_/rsrc/1421516636272/home/carros-deportivos-lamborghini-aventador-tron_aventador.jpg',
        title: '$50.000.000',
        subtitle: 'Toyota ae86 1986',
        date: 'published 5 minuestes',
      },
    }),
  }
</script>
