import { error } from "@/router/enums";

export default {
  path: "/error",
  redirect: "/error/403",
  meta: {
    icon: "informationLine",
    showLink: false,
    title: "menus.hsabnormal",
    rank: error
  },
  children: [
    {
      path: "/error/403",
      name: "403",
      component: () => import("@/views/error/403.vue"),
      meta: {
        title: "menus.hsfourZeroOne"
      }
    },
    {
      path: "/error/404",
      name: "404",
      component: () => import("@/views/error/404.vue"),
      meta: {
        title: "menus.hsfourZeroFour"
      }
    },
    {
      path: "/error/500",
      name: "500",
      component: () => import("@/views/error/500.vue"),
      meta: {
        title:"menus.hsFive"
      }
    }
  ]
} as RouteConfigsTable;
