import {createRouter, createWebHistory} from "vue-router";

import Home from "@/pages/Home.vue"

import CrewProfile from "@/pages/CrewProfile/index.vue"
import CrewProfileID from "@/pages/CrewProfile/_profile.vue"

import CrewList from "@/pages/CrewList/index.vue"

const routes = [
  {
    path: "/", component: Home
  },

  {
    path: "/crewProfile", component: CrewProfile
  },
  {
    path: "/crewProfile/:id", component: CrewProfileID
  },

  {
    path: "/crewList", component: CrewList
  }
]

const option = {
  routes,
  history: createWebHistory(process.env.BASE_URL)
}

const router = createRouter(option);

export default router;