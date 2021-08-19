<template>
  <div>
    <h1>{{person.name}}</h1>
    <img :src="person.image">
    <p>{{person.description}}</p>
  </div>
</template>

<script>
import DataService from "../dataservice";

export default {
  data: function() {
    return {
      person: DataService.getPerson(this.$route.params.id)
    };
  }
};
</script>

<style>
</style>
