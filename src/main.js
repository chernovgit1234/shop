import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/styles.scss";
import firebase from "firebase/compat/app";
//import { initializeApp } from "firebase/compat/app";

const firebaseConfig = {
  apiKey: "AIzaSyCMxiLZ_Mw0o_cCFK-9W35ZDroOjicheL0",
  authDomain: "shop-portfolio-d2718.firebaseapp.com",
  projectId: "shop-portfolio-d2718",
  storageBucket: "shop-portfolio-d2718.appspot.com",
  messagingSenderId: "642949864879",
  appId: "1:642949864879:web:0a9a0cbc2b8356b8b2635a"
  };

  firebase.initializeApp(firebaseConfig);

createApp(App).use(store ).use(router).use().mount("#app");
