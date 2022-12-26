<template>
  <div>
    <div class="container">
      <About />
      <Contact />
      <Skills />
      <Projects />
      <Hobbies />
      <AboutSite />
    </div>
  </div>
</template>

<script>
import About from "./AboutMe.vue"
import Skills from "./SkillsComponent.vue"
import Contact from "./ContactMe.vue"
import AboutSite from "./AboutSite.vue"
import Projects from "./features/projects/ProjectsComponent.vue"
import Hobbies from "./HobbiesComponent.vue"

export default {
  name: "ContentComponent",
  components: {
    About,
    Skills,
    Contact,
    AboutSite,
    Projects,
    Hobbies,
  },
};
</script>

<style scoped>
  .container {
    /* Grid properties */
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(24, auto);
    gap: 10px;
  }

  /* Allocate the same number of columns to each content child */
  .container > * {
    grid-column: 2/12;
  }

  ::v-deep .section {
    border-radius: 10px;
    color: var(--white);
    padding: 0.5rem;
  }
</style>