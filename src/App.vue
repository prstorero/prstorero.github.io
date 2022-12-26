<template>
  <div>
    <Header />
    <Content />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/HeaderComponent.vue"
import Content from "./components/ContentComponent.vue"
import Footer from "./components/FooterComponent.vue"

export default {
  name: "App",
  components: {
    Header,
    Content,
    Footer,
  },
};
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: var(--white);
    min-height: 100%;

    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: auto 1fr auto;
    gap: 10px;
  }

</style>
