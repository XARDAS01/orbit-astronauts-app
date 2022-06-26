<template>
  <div class="astroCard">

    <div class="astroCard__avatar" v-if="astronaut.avatar !== null">
      <img :src="require(`@/assets/avatars/${astronaut.avatar + '.jpg'}`)" />
    </div>

    <div class="astroCard__info info">
      <span class="info__name">{{ astronaut.name }} {{ astronaut.surname }}</span><br>
      <span class="info__age">Age: {{ astronaut.age }}</span><br>
      <span class="info__age">ID: {{ astronaut.id }}</span>
    </div>

  </div>
</template>

<script>
export default {
  name: "AstroCard",
  props: {
    astronaut: Array
  },
  data () {
    return {

    }
  }
}
</script>

<style scoped>
.astroCard {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;

  min-width: 300px;
  max-width: 400px;
  width: 100%;
  height: 130px;

  padding: 20px;

  background-color: #242731;
  border-radius: 24px;

  transition: 0.3s;
  cursor: pointer;
}

  .astroCard__avatar {
    width: 70px;
    height: 70px;
    background-color: #1F1F1F;
  }
    .astroCard__avatar img {
      height: 100%;
      width: 100%;
      border-radius: 10px;
    }

    .astroCard__info {
      width: 78%;
      height: 70px;
    }

      .info__name {
        color: white;
        font-size: 18px;
      }

      .info__age {
        color: #808191;
        font-size: 12px;
      }

/* TRANSITION */

.astroCard:hover {
  background-color: #4c505d;
  transition: 0.3s;
}
</style>