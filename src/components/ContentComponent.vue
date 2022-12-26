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
    <div v-auto-animate class="sidebar-container">
      <a href="mailto:prssecustom94@gmail.com" class="sidebar">prssecustom94@gmail.com</a>
      <div class="bar"></div>
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

  .sidebar-container {
    position: fixed;
    right: 0;
    bottom: 0;
    margin-right: 2rem;
  }
  .sidebar {
    /* Make our text vertical */
    writing-mode: vertical-lr;

    /* Space between text and line */
    margin-bottom: 1rem;

    /* Font styling */
    color: var(--white);

    transition: all 0.25s ease-in;
  }
  .sidebar:hover {
    transform: translateY(-3px);
    color: var(--color-primary-light);
  }
  .bar:after {
    content: "";
    display: block;
    width: 1px;
    height: 90px;
    margin: 0px auto;
    background-color: var(--color-primary-light);
  }

  @media screen and (max-width: 600px) {
    .sidebar-container {
      display: none;
    }
  }

  ::v-deep .section {
    border-radius: 10px;
    color: var(--white);
    padding: 0.5rem;
  }
</style>