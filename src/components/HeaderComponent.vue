<template>
  <nav class="header">
    <div class="name">Scott Johnson</div>
    <!-- <a href="#" class="toggle-button" ref="toggleButton" @click="toggleNavMenu">
      <span class="bar"></span>
      <span class="bar"></span>
      <span class="bar"></span>
    </a> -->
    <div class="navigation" ref="navigation">
      <ul>
        <!-- <li class="slide-from-left"><router-link to="/home">Home</router-link></li>
        <li class="slide-from-right"><router-link to="/projects">Projects</router-link></li>
        <li class="slide-from-left"><router-link to="/hobbies">Hobbies</router-link></li> -->
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    toggleNavMenu() {
      const navbarLinks = this.$refs.navigation

      navbarLinks.classList.toggle('active')
      window.setTimeout(() => navbarLinks.firstChild.childNodes.forEach(child => {
        child.classList.toggle('show')
    }), 1)
    }
  },
};
</script>


<style scoped>

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
  }

  .header {
    /* flex properties */
    display: flex;
    justify-content: space-between;
    align-items: center;

    /* Coloring and sizing */
    background-color: #0277bd;
    width: 100%;
    color: #ddd;
  }

  .name {
    font-size: 1.5rem;
    margin: 0.5rem;
  }

  .navigation ul {
    margin: 0;
    padding: 0;

    /* flex properties */
    display: flex;
  }

  .navigation li {
    list-style: none;

    transition: all 250ms ease-in;
  }

  .navigation li a {
    text-decoration: none;
    color: var(--white);
    padding: 1rem;
    display: block;

    /* Animate the scaling */
    transition: all 250ms ease-in;
  }

  .navigation li:hover {
    background-color: #555;
  }

  @media screen and (max-width: 600px) {
    .navigation {
      /* Properties to animate, choosing max-height instead
      of height as you can't animate from 0 to auto. Animating
      max-height is a way to get around this and using
      overflow: hidden to hide the scroll it causes */
      opacity: 0;
      max-height: 0;
      overflow: hidden;
      transition: all 0.5s;
      width: 100%;
    }
    .navigation.active {
      /* These will be animated into */
      opacity: 100;
      max-height: 200px;
    }

    .header {
      flex-direction: column;
      align-items: flex-start;
    }

    .navigation ul {
      width: 100%;
      flex-direction: column;
      position: relative;
      transition: top 1s, left 0.5s;
    }
    .navigation li {
      position: relative;
      transition: all 0.5s;
    }
    .navigation li.slide-from-left {
      left: -200px;
    }
    .navigation li.slide-from-right {
      left: 200px;
    }
    .navigation li.show {
      left: 0;
    }

    .navigation li {
      text-align: center;
    }

    .navigation li a {
      padding: 0.5rem 1rem;
    }

    .navigation.active {
      display: flex;
    }
  }
</style>