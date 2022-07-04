<template>
  <div class="home">
    <h1 class="home__title">Welcome to the Astronaut orbit manager!</h1>

    <div class="home__poster">
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. In sem justo, commodo ut, suscipit at, pharetra vitae, orci. Quisque porta. Sed elit dui, pellentesque a, faucibus vel, interdum nec, diam. Praesent dapibus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.
      </p>
    </div>
  </div>
</template>

<script>
import axios from "axios"

export default {
  name: "HomePage",

  // INIT PING TO SERVER NEEDS TO WAKE UP JAVA API ON HEROKU
  mounted() {
    axios
      .get('https://astronauts-on-orbit-api.herokuapp.com/')
      .then(response => (
        this.profile = response.data
      ));
  }
}
</script>


<style scoped>
.home {

}
  .home__title {
    padding: 50px 20px;
    font-weight: bold;
  }

  .home__poster {
    width: 100%;
    background-color: #242731;

    text-align: center;
    padding: 100px 40px;
    
    color: rgb(215, 215, 215);
  }
</style>