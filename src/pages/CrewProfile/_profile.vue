<template>
  <div class="profilePage">
    
    <div class="profilePage__header header">

      <div class="header__info">
        <div class="header__info__avatar" v-if="profile.avatar != null">
          <img :src="require(`@/assets/avatars/${profile.avatar + '.jpg'}`)" />
        </div>

        <div class="header__info__action">
          <VModalUpdateComponent 
            :profile="profile"
          />
          <button 
            v-if="false"
            class="header__info__action__btn"
            @click="updateAstronaut()">
            Update astronaut
          </button>
          <button 
            class="header__info__action__btn header__info__action__btn--delete"
            @click="deleteAstronaut()">
            Delete astronaut
          </button>
        </div>
      </div>

      <div class="header__desc">
        <span class="header__desc__item">Name: <b class="header__desc__item--special">{{ profile.name }}</b></span>
        <br>
        <span class="header__desc__item">Surname: <b class="header__desc__item--special">{{ profile.surname }}</b></span>
        <br>
        <span class="header__desc__item">ID: <b class="header__desc__item--special">{{ profile.id }}</b></span>
        <br>
        <span class="header__desc__item">Age: <b class="header__desc__item--special">{{ profile.age }}</b></span>
        <br>
        <span class="header__desc__item">Location: <b class="header__desc__item--special">{{ profile.location }}</b></span>
        <br>
        <span class="header__desc__item">Power: <b class="header__desc__item--special">{{ profile.power }}</b></span>
        <br>
        <div class="header__desc__item header__desc__item__aboutAstro">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. In sem justo, commodo ut, suscipit at, pharetra vitae, orci. Quisque porta. Sed elit dui, pellentesque a, faucibus vel, interdum nec, diam. Praesent dapibus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae
        </div>
      </div>

    </div>

  </div>
</template>

<script>
import axios from "axios"

import VModalUpdateComponent from "@/components/V-modalUpdate.vue"

export default {
  name: "ProfilePage",
  components: {
    VModalUpdateComponent
  },
  data() {
    return {
      test: 'avatar3',
      profile: [],
      response: null
    }
  },
  methods: {
    deleteAstronaut() {
      axios
        .post('https://astronauts-on-orbit-api.herokuapp.com/astronautDeleteByID?id=' + this.profile.id)
        .then(response => (
          this.response = response.data,
          this.$router.push('/crewList')
        ));
    },
    updateAstronaut() {
      // axios
      //   .post('https://astronauts-on-orbit-api.herokuapp.com/astronautUpdate?id=' + this.profile.id)
      //   .then(response => (
      //     this.response = response.data
      //   ));
    }
  },
  mounted() {
    axios
      .get('https://astronauts-on-orbit-api.herokuapp.com/astronautGetByID?id=' + this.$route.params.id)
      .then(response => (
        this.profile = response.data
      ));
  }
}
</script>

<style scoped>
.profilePage {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;

  width: 100%;
  height: 100%;
  overflow-y: auto;

  padding: 50px;
}

  .profilePage__header {}
    .header {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: space-between;

      height: 600px;
    }
      .header__info {
        width: 320px;
        height: 100%;
      }
        .header__info__avatar {
          width: 100%;
          height: 300px;

          background-color: grey;
        }
          .header__info__avatar img {
            width: 100%;
            height: 100%;
          }

        .header__info__action {
          width: 100%;
          height: 250px;
        }
        .header__info__action__btn {
          width: 100%;
          height: 60px;

          background-color: #242731;
          color: #808191;
          border: none;
          font-weight: bold;
          text-transform: uppercase;
          cursor: pointer;

          transition: 0.3s;
        }
        .header__info__action__btn:hover {
          background-color: rgb(53, 58, 75);
        }

        .header__info__action__btn--delete {
          background-color: #a3573f;
          color: #1F1F1F;
        }
        .header__info__action__btn--delete:hover {
          background-color: #c55b3a;
          transition: 0.3s;
        }

      .header__desc {
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;

        width: 70%;
        min-height: 100vh;
        height: 750px;

        background-color: #1F1F1F;

        border-radius: 0px 24px 24px 24px;

        padding-top: 20px;
      }
        .header__desc__item {
          font-size: 18px;
          color: grey;

          padding-left: 20px;
        }
        .header__desc__item--special {
          font-size: 24px;
          color: #808191;
          text-transform: uppercase;
          padding-left: 20px;
        }
        .header__desc__item__aboutAstro {
          width: 100%;

          padding-top: 35px;

          border-radius: 0px 0px 24px 24px;
        }
</style>
