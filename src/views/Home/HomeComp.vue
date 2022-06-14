<template>
    <div>
      <HomeMainSliderSection></HomeMainSliderSection>
      <HomeCatalogCards></HomeCatalogCards>
      <HomeHitsProducts></HomeHitsProducts>
    </div>
</template>

<script>
  import HomeMainSliderSection from "./HomeMainSliderSection.vue";
  import HomeCatalogCards from "./HomeCatalogCards.vue";
  import HomeHitsProducts from "./HomeHitsProducts.vue";

  export default {
      name: "HomeComp",  
      components: {HomeMainSliderSection, HomeCatalogCards, HomeHitsProducts},
      data() {
        return {}
      },
      methods: {},
      mounted() {}      
  }
</script>

<style lang="scss" scoped>

</style>