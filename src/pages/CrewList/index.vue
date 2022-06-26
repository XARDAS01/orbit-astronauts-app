<template>
  <div class="crewListPage">

    <h1 class="crewListPage__title">Astronaut list orbit of 
      <span class="crewListPage__title__planet">
        {{ planet }}
      </span>
    </h1>

    <VModalCreateComponent />

    <div v-if="crewList[0] == null">
      <h1 class="crewListPage__title">Not found astronauts on 
        <span class="crewListPage__title__planet">
          {{ planet }}
        </span>
        orbit</h1> 
    </div>
    <div class="crewListPage__list list" v-else>
      <VastroCard
        class="list__item"
        v-for="astronaut of crewList"
        :key="astronaut.id"
        @click="this.$router.push('/crewProfile/' + astronaut.id)"
        :astronaut="astronaut"
      />
    </div>
    
  </div>
</template>

<script>
import axios from "axios"

import VastroCard from "@/components/V-astronautCard.vue"
import VModalCreateComponent from "@/components/V-modalCreate.vue"

export default {
  name: "CrewListPage",
  components: {
    VastroCard,
    VModalCreateComponent
  },
  data () {
    return {
      planet: "Earth",
      response: null,
      crewList: []
    }
  },
    mounted() {
    axios
      .get('https://astronauts-on-orbit-api.herokuapp.com/astronautsGetAll')
      .then(response => (
        this.response = response,
        this.crewList = response.data
      ));
  }
}
</script>

<style scoped>
.crewListPage {
  padding: 0px 20px;

  height: 100vh;
  overflow-y: auto;
  padding-bottom: 100px;
}

.crewListPage__title {
  margin: 40px 20px;
}

  .crewListPage__title__planet {
    font-size: 36px;
    text-transform: uppercase;
    color: #4c505d;
  }

.crewListPage__list {

}
  .list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }

    .list__item {
      margin: 20px 20px;
    }
</style>
