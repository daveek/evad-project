<template>
  <section class="actions">
    <div class="togglSearch" v-bind:class="{'active': isSearching}" @click="isSearching = ! isSearching">
      <span v-if="!isSearching">Search</span>
      <span v-else>Close</span>
    </div>
    <div v-bind:class="{'active': isSearching}" class="panel"> 
      <input type="text" v-model="location">
      <button @click="search"><i class="material-icons">search</i></button> 
    </div>
  </section>
</template>

<script>
export default {
  props: ['location'],
  data(){
    return{
      isSearching: false  
    }
  },
  methods: {
   search(){
     this.$emit('search', this.location);
     this.isSearching = false;
   }
 }
}
</script>
