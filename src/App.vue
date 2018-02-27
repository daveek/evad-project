<template>
  <v-app id="app" dark>
    <my-menu v-model="openDrawer" />

    <v-toolbar
      app
      fixed
      clipped-left
    >
      <v-toolbar-side-icon @click.stop="openDrawer = !openDrawer" />
      <v-toolbar-title class="sometitle-logo" />
      <v-spacer />
      <v-toolbar-items>
        <v-btn flat>
          <v-icon left>account_circle</v-icon>
          Sign In
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-content>
      <router-view></router-view>
      <!-- 
      <my-weather />
      <my-shipping-calculator /> 
      <my-chart-skills />
      -->
    </v-content>

    <my-footer />

  </v-app>
</template>

<script>
import axios from 'axios';
import MyFooter from '@/components/MyFooter';
import MyMenu from '@/components/MyMenu';
//import MyShippingCalculator from '@/components/MyShippingCalculator';
//import MyWeather from '@/components/MyWeather';
//import MyChartSkills from '@/components/MyChartSkills';

export default {
  name: 'App',
  components: {
    MyFooter,
    MyMenu,
    //MyShippingCalculator,
    //MyWeather,
    //MyChartSkills
  },
  data() {
    return {
      openDrawer: true,
    };
  },
};
</script>

