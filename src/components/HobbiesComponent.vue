<template>
  <div class="section">
    <h2>Hobbies</h2>
    <CardComponent v-for="hobby in hobbies" :key="hobby.title"
      :title="hobby.title"
      :description="hobby.description">
    </CardComponent>
  </div>
</template>

<script>
import CardComponent from './CardComponent.vue'

export default {
  name: "HobbiesComponent",
  components: {
    CardComponent
  },
  methods: {
  },
  data() {
    return {
      hobbies: [
        {
          title: 'Programming',
          description: 'I enjoy writing code and learning new things. I occasionally practice algorithms to try and maintain my problem solving skills.'
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

  .card {
    margin-bottom: 1rem;
  }
</style>