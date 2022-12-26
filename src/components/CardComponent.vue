<template>
  <b-card bg-variant="dark" text-variant="white">
    <template #header>
      <div class="d-flex justify-content-between">
        {{ title }}
        <a v-if="link" :href="link" target="_blank" variant="white">View</a>
      </div>
    </template>
    <b-card-img v-if="image" :src="image" :alt="imageAlt"></b-card-img>
    <b-card-text>
      <slot name="description"></slot>
      {{ description }}
    </b-card-text>
  </b-card>
</template>

<script>
export default {
  name: 'CardComponent',
  props: {
    title: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    image: {
      type: String,
      default: '',
    },
    imageAlt: {
      type: String,
      default: '',
    },
    link: {
      type: String,
      default: '',
    }
  },
  methods: {
  }
}
</script>

<style scoped>
  .card {
    border: 1px solid transparent;
    background-color: #444;
    max-width: 700px;
  }

  img {
    /* width: 100%; */
  }

  .card-text {
    /* padding: 10px; */
  }

  .card-header {
    /* padding: 0.5rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
    margin-bottom: 1rem;
    font-size: 1.2rem; */
  }
</style>