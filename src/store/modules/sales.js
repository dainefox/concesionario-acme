// Pathify
import { make } from 'vuex-pathify'

const state = {
  sales: [
    {
      country: 'USA',
      flag: 'https://demos.creative-tim.com/vue-material-dashboard-pro/img/flags/US.png',
      salesInM: 2920,
    },
    {
      country: 'Germany',
      flag: 'https://demos.creative-tim.com/vue-material-dashboard-pro/img/flags/DE.png',
      salesInM: 1300,
    },
    {
      country: 'Australia',
      flag: 'https://demos.creative-tim.com/vue-material-dashboard-pro/img/flags/AU.png',
      salesInM: 760,
    },
    {
      country: 'United Kingdom',
      flag: 'https://demos.creative-tim.com/vue-material-dashboard-pro/img/flags/GB.png',
      salesInM: 690,
    },
    {
      country: 'Romania',
      flag: 'https://demos.creative-tim.com/vue-material-dashboard-pro/img/flags/RO.png',
      salesInM: 600,
    },
    {
      country: 'Brasil',
      flag: 'https://demos.creative-tim.com/vue-material-dashboard-pro/img/flags/BR.png',
      salesInM: 550,
    },
  ],
  posts: [
    {
      image: 'https://ca-times.brightspotcdn.com/dims4/default/f340c74/2147483647/strip/true/crop/600x500+0+0/resize/840x700!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fe0%2Fdb%2F0e83c62d421c94e0154c1c20eaa0%2F2017-mclaren-650s.jpg',
      title: '$40.000.000',
      subtitle: 'Mazda R7 2018',
      date: 'published 4 minutes ago',
    },
    {
      image: 'https://ca-times.brightspotcdn.com/dims4/default/052d77b/2147483647/strip/true/crop/750x422+0+0/resize/840x473!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F3f%2F90%2F4f444ded4c8c582586d741ef9016%2Fhoyla-aut-ya-salio-a-la-venta-el-mas-caro-y-ex-001',
      title: '$40.000.000',
      subtitle: 'Mazda R7 2018',
      date: 'published 4 minutes ago',
    },
    {
      image: 'http://3.bp.blogspot.com/-QMB9TdTF4xU/VU_W57h_r-I/AAAAAAAAAV0/-R8gdXoJN8g/s1600/0_10_Koenigsegg_CCX.jpg',
      title: '$40.000.000',
      subtitle: 'Mazda R7 2018',
      date: 'published 4 minutes ago',
    },
    {
      image: 'http://2.bp.blogspot.com/-Yc90UEQkJG0/U9JXfzKvVmI/AAAAAAAAAAg/VMQLIKgxOkA/s1600/carros_modernos_1275571763_65-1366x768.jpg',
      title: '$40.000.000',
      subtitle: 'Mazda R7 2018',
      date: 'published 4 minutes ago',
    },
    {
      image: 'https://www.pruebaderuta.com/wp-content/uploads/2016/11/mejor-carro-1-620x264.jpg',
      title: '$40.000.000',
      subtitle: 'Mazda R7 2018',
      date: 'published 4 minutes ago',
    },
    {
      image: 'https://www.chevrolet.com.co/content/dam/chevrolet/south-america/colombia/espanol/index/cars/2021-joy-sedan/mo/01-img/chevrolet-joy-sedan-carro-moderno-azul.jpg?imwidth=960',
      title: '$40.000.000',
      subtitle: 'Mazda R7 2018',
      date: 'published 4 minutes ago',
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj5o30uzMuepVvSNuUxdrqgD5rj8YWGPls7A&usqp=CAU',
      title: '$40.000.000',
      subtitle: 'Mazda R7 2018',
      date: 'published 4 minutes ago',
    },
    {
      image: 'https://www.motor.com.co/files/article_main/uploads/2019/06/20/5d0bfcb09f519.jpeg',
      title: '$40.000.000',
      subtitle: 'Mazda R7 2018',
      date: 'published 4 minutes ago',
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPe_YIcYPM6RSu69UJbkPWy6t6rtsPQcb_Ew&usqp=CAU',
      title: '$40.000.000',
      subtitle: 'Mazda R7 2018',
      date: 'published 4 minutes ago',
    },
    {
      image: 'https://www.motor.com.co/files/article_main/uploads/2015/05/25/556366bdad67e.jpeg',
      title: '$50.000.000',
      subtitle: 'Toyota ae86 1986',
      date: 'published 5 minuestes',
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXp4_i-2ZuXA-aFCm25vY4yvZYG99gz6MNMg&usqp=CAU',
      title: '$50.000.000',
      subtitle: 'Toyota ae86 1986',
      date: 'published 5 minuestes',
    },
    {
      image: 'https://sites.google.com/site/imagenesdecarrosgratis/_/rsrc/1421516636272/home/carros-deportivos-lamborghini-aventador-tron_aventador.jpg',
      title: '$50.000.000',
      subtitle: 'Toyota ae86 1986',
      date: 'published 5 minuestes',
    },
  ],
}

const mutations = make.mutations(state)

const actions = {}

const getters = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}
