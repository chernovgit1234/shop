import { createRouter, createWebHashHistory } from "vue-router";
import HomeComp from "../views/Home/HomeComp.vue";
import CardComp from "../views/Card/CardItem.vue";
import CartComp from "../views/Cart/CartComp.vue";
import OrderComp from "../views/Order/OrderComp.vue";
import CatalogComp from "../views/Catalog/CatalogComp.vue";


const routes = [
  {
    path: "/",
    name: "HomeComp",
    component: HomeComp,
  },
  {
    path: "/catalog",
    name: "CatalogComp",
    component: CatalogComp,
  },
  {
    path: "/cart",
    name: "CartComp",
    component: CartComp,
  },
  {
    path: "/order",
    name: "OrderComp",
    component: OrderComp,
  },
  {
    path: "/card/:id",
    name: "CardComp",
    component: CardComp,
  }

];

const router = createRouter({
  history: createWebHashHistory(),
  
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
});

export default router;
