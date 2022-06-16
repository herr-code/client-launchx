import { createWebHistory, createRouter } from "vue-router";
const routes =  [
  {
    path: "/",
    alias: "/explorers",
    name: "explorers",
    component: () => import("./components/ExplorersList")
  },
  {
    path: "/missionCommanders",
    alias: "/missionCommanders",
    name: "missionCommanders",
    component: () => import("./components/CommandersList")
  },
  {
    path: "/explorer/:id",
    name: "explorer-details",
    component: () => import("./components/Explorer")
  },
  {
    path: "/commander/:id",
    name: "commander-details",
    component: () => import("./components/Commander")
  },
  {
    path: "/add",
    name: "add-explorer",
    component: () => import("./components/AddExplorer")
  },
  {
    path: "/addCommander",
    name: "add-commander",
    component: () => import("./components/AddCommander")
  }
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
