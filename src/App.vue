<template >
  <div class="wrapper" >
      <div class="header">
        <header-component :key="keyUpdate"></header-component>
      </div> 
      <body>
        <div class="main">
          <router-view />
        </div> 
        <div class="footer">
          <footer-component></footer-component>
        </div>
      </body>
  </div>
</template>

<script>
import * as adapt from './js/libs/dynamic_adapt.js'
import HeaderComponent from "@/components/headerComp.vue";
import FooterComponent from "@/components/footerComp.vue";

export default {
  name: "app",
  data() {
    return { keyUpdate: 0 }
  },
  components: {HeaderComponent, FooterComponent},
  mounted() {
	  adapt.executeScript()
  }
};
</script>

