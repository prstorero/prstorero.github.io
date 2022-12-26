<template>
  <div class="section">
    <h2>Projects</h2>
    <CardComponent v-for="project in projects" :key="project.title"
      :title="project.title"
      :description="project.description"
      :image="project.image"
      :imageAlt="project.altText"
      :link="project.link"
    />
  </div>
</template>

<script>
import CardComponent from '../../CardComponent.vue'

export default {
  name: "ProjectsComponent",
  components: {
    CardComponent
  },
  methods: {
  },
  data() {
    return {
      projects: [
        {
          title: 'Web RS3 Flip Tracker',
          description: 'This was a React-based project I wrote for a game called RuneScape3. You can make money by buying items at a lower price and selling for a higher price in a process called "flipping". When you are working with a lot of items, it can be difficult to manage the update times, so I made this project as a way to ease that burden.',
          image: require('@/assets/projects/flip-tracker/rs3-flip-tracker.png'),
          altText: 'Picture of the flip tracker project',
          link: 'https://github.com/prstorero/runescape-flip-tracker',
        },
        {
          title: 'Mobile RS3 Flip Tracker',
          description: 'This was my first attempt at making a tool to help me track my game flips. It is a relatively simple Android-based application. It had a few nice utilities for managing the items being flipped.',
          image: require('@/assets/projects/mobile-flip-tracker/mobile-rs3-flip-tracker.png'),
        },
      ],
    }
  }
};
</script>

<style scoped>
  a {
    color: #67daff;
  }

  .company-box {
    display: flex;
  }

  .experience-item {
    max-width: 10rem;
    margin: 1rem;
    padding: 0.5rem;
    display: inline-block;
  }

  .container-icons {
    display: flex;
    text-align: center;
    flex-wrap: wrap;
  }

  .card, ::v-deep .card-img {
    margin-bottom: 1rem;
  }
</style>