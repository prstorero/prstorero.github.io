<template>
  <div class="section">
    <h2>About Me</h2>
    <div class="container-content">
      <div class="container-image">
        <img src="../assets/headshot.jpg" alt="Scott Johnson headhshot">
      </div>

      <div class="container-text">  
        <p>
          I'm a software engineer that enjoys developing innovative solutions to customer problems.
          I strive to provide a positive user experience with both ease of use and readable code in mind.
        </p>
        <p>
          I have a BA in Software Engineering from The University of Texas at Dallas. I developed a virtual reality application to improve distance perception in the virtual environment as part of a research project for <a href="https://cs.utdallas.edu/people/faculty-alumni/mcmahan-ryan/">Dr. Ryan McMahan</a>.
        </p>
        <p>
          I'm happiest when solving problems, learning, and brainstorming how the product can be improved
          to deliver more value to the customer. I'm currently learning Vue to expand my modern technology
          knowledge base.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .container-image {
    max-width: 300px;
    width: 30%;
  }

  img {
    border-radius: 50%;
    width: 100%;

    transition: all 0.25s ease-in;
  }
  img:hover {
    transform: scale(1.05);
    transition: all 0.25s ease-in;
  }

  .container-text {
    width: 70%;
    margin-top: 1rem;
  }

  p {
    margin: 1rem;
  }

  .container-content {
    display: flex;
  }

  @media screen and (max-width: 600px) {
    .container-content {
      flex-direction: column;
      align-items: center;
    }

    .container-image {
      /* text-align: center; */
      width: 100%;
    }

    .container-text {
      width: unset;
    }
  }
</style>