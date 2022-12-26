<template>
  <div class="container-contact">
    <h2>Get In Touch</h2>
    <p>I am actively looking for new opportunities and I look forward to hearing from you!</p>
    <a href="https://www.linkedin.com/in/scott-johnson-187446101/" target="_blank">Say Hi</a>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .container-contact {
    text-align: center;
    grid-column: 2/12;
  }

  a {
    background: var(--bg-color-primary);
    color: white;
    padding: 12px 16px;
    border-radius: 4px;
    letter-spacing: 1px;
    cursor: pointer;
    text-decoration: none;

    transition: all 250ms ease-in;
  }
  a:hover {
    /* Don't want the light blue for this link since it looks like a button */
    color: inherit;

    background-color: var(--bg-color-light);
    text-decoration: none;
  }

  p {
    margin-bottom: 25px;
  }
</style>