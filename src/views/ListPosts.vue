<template>
  <v-container>
    <v-row justify="center">
      <v-col
        cols="12"
      >
        <material-card
          color="primary"
          icon="mdi-car-lifted-pickup"
        >
          <template #title>
            Busca <small class="text-body-1"> una publicacion</small>
          </template>

          <v-form>
            <v-container class="py-0">
              <v-row>
                <v-col
                  cols="12"
                  md="3"
                >
                  <v-text-field
                    color="purple"
                    label="Marca"
                  />
                </v-col>

                <v-col
                  cols="12"
                  md="3"
                >
                  <v-text-field
                    color="purple"
                    label="Linea"
                  />
                </v-col>

                <v-col
                  cols="12"
                  md="3"
                >
                  <v-text-field
                    color="purple"
                    label="Color"
                  />
                </v-col>

                <v-col
                  cols="12"
                  md="3"
                >
                  <v-text-field
                    color="purple"
                    label="Modelo"
                  />
                </v-col>

                <v-col
                  cols="12"
                  md="6"
                >
                  <v-text-field
                    color="purple"
                    label="Valor"
                  />
                </v-col>
              </v-row>

              <v-row>
                <v-col
                  cols="12"
                  class="text-right"
                >
                  <v-btn
                    color="primary"
                    min-width="150"
                    rounded
                  >
                    Buscar vehiculo
                  </v-btn>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </material-card>
      </v-col>
    </v-row>

    <post-items-wrapper :posts="posts" />

    <v-btn
      fab
      dark
      bottom
      right
      float
      fixed
      to="/dashboard/posts/add"
    >
      <v-icon>mdi-star-box</v-icon>
    </v-btn>
  </v-container>
</template>

<script>
  import { get } from 'vuex-pathify'

  export default {
    name: 'ListPost',

    components: {
      PostItemsWrapper: () => import(/* webpackChunkName: "post-items-wrapper" */ '@/components/PostItemsWrapper.vue'),
    },

    data: () => ({}),

    computed: {
      posts: get('sales/posts'),
    },
  }
</script>
