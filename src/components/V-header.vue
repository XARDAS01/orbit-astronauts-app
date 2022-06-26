<template>
  <div class="header">

    <div class="header__list list">
      <router-link 
        class="list__item" 
        v-for="link of links" 
        :key="link.id" 
        :to="link.href">
        {{ link.title }}
      </router-link>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          id: 1, href: "/", title: "Home page" 
        },
        {
          id: 2, href: "/crewList", title: "Crew List" 
        }
      ]
    }
  }
}
</script>

<style scoped>
.header {
  width: 100%;
  height: 50px;
  background-color: #1A1A1A;
}

.list {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;

  align-items: center;

  height: 100%;
}

  .list__item {
    font-size: 24px;
    color: #808191;
    text-decoration: none;
    font-weight: bold;
  }
</style>