import { createWebHistory, createRouter } from "vue-router";
import HelloWorld from "@/components/Home/HomeVue.vue";
import JsStudyComponent from "@/components/JS/study.vue";
import Ccs from "@/components/JS/Chkbox/Ccs.vue";
import Rcs from "@/components/JS/Rbox/Rcs.vue";
import MnStudyComponent from "@/components/MN/study.vue";

const routes = [
  {
    path: "/",
    name: "HelloWorld",
    component: HelloWorld,
  },
  {
    path: "/JsStudy",  // TestComponent.vue로 이동할 Path
    name: "JsStudy",  // router name
    component: JsStudyComponent,  // Path로 이동될 Component
    children: [
      {
        path: "Chkbox",
        component: Ccs,
      },
      {
        path: "Rbox",
        component: Rcs,
      },
    ]
  },
  {
    path: "/MnStudy",  // TestComponent.vue로 이동할 Path
    name: "MnStudy",  // router name
    component: MnStudyComponent,  // Path로 이동될 Component
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;