<template>
  <section class="display">
      <h2>{{ res.name }}, {{ res.sys.country }}</h2>
      <h5>
        <span>Lat:</span> {{ res.coord.lat }}
        <span>Lon: {{ res.coord.lon }}</span>
      </h5>
      <div class="condition">
        <div class="temp">{{ temperature }}°C</div>
        <img v-bind:src="'https://openweathermap.org/themes/openweathermap/assets/vendor/owm/img/widgets/' + res.weather[0].icon + '.png'" 
               v-bind:alt="'Weather in ' + res.name"
               width="168" height="168">
        <p class="text">{{ res.weather[0].description }}</p>
      </div>
    </section>
</template>

<script>
export default {
  props: ['res'],
  computed: {
    temperature(){
      //Remove decimals on temperature value
      var temp = this.res.main.temp,
          noDecimals = temp.toFixed();

      return noDecimals;
    }
  }
}
</script>
