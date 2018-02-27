<template>
<div id="my-weather">
   <h3>{{ Title }}</h3>
    <display v-bind:res="weatherRes"></display>
    <actions v-bind:location="cityName" @search="searchcity"></actions> 
</div>

</template>

<script>
import axios from 'axios';
import myWetter from './display';
import myActions from './actions';

export default {
  name: 'MyWeather',
  components: {
      'display': myWetter,
      'actions': myActions,
  },
  data() {
    return {
      Title: 'Das Wetter',
      dataApi: 'aae97860de78632108ecc73036d6d17c',
      cityName: 'Madrid',
      lang: 'de',
      weatherRes: null
    };
  },
  
  // GET DATA WHEN MOUNTED
  mounted(){
    this.performAJAX();
  },

  //METHODS
  methods: {
    // SEARCH A NEW CITY
    searchcity(city){
      this.cityName = city;
      var ctx = this;
      ctx.performAJAX();
    },
    
    // GET WEATHER DATA                     
    performAJAX(){
      var ctx = this;
    
      axios.get('https://api.openweathermap.org/data/2.5/weather?q=' + 
                ctx.cityName + '&units=metric&lang=' + 
                ctx.lang + '&APPID=' + ctx.dataApi )
      .then(function (response) { 
        ctx.weatherRes = response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  }
}
</script>
<style>
  #my-weather{
    text-align: center;
  }
</style>
