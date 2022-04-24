import { useGalleryStore } from "@/stores/gallery";
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/galleryview",
      name: "galleryview",
      props: true,
      component: () => import("../views/GalleryView.vue"),
    },
    {
      path: "/photocomparator/:id",
      name: "photocomparator",
      props: true,
      component: () => import("../views/PhotoComparator.vue"),
    },
    {
      path: "/notFound",
      name: "notFound",
      component: () => import("../views/NotFound.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      component: () => import("../views/NotFound.vue"),
    },
  ],
});
router.beforeEach((to, from, next) => {
  if (to.name === "photocomparator") {
    const store = useGalleryStore();
    if (store.getPhotoDataByID(to.params["id"] as string)) next();
    else next("/notFound");
  } else {
    next();
  }
});

export default router;
