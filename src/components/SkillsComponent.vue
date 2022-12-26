<template>
  <div class="section">
    <h2>Skills & Tools</h2>
    <div class="company-box">
      <span class="container-icons">
        <div class="box-icon" stagger="2150" v-for="skill in skills" :key="skill.iconName" ref="skills">
          <i :class="['devicon', `devicon-${skill.iconName}-plain`]"></i>
          <p>{{ skill.displayName }}</p>
        </div>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "SkillsComponent",
  mounted: function() {
    let additionalDelay = 100;
    this.$refs.skills.forEach(skill => {
      window.setTimeout(() => skill.className += ' show', 0 + additionalDelay)
      additionalDelay += 500
    });
    this.$bvToast.show('hoverTip')
  },
  methods: {
    removeItem(toRemove) {
      this.skills = this.skills.filter((skill) => skill !== toRemove)
    },
  },
  data() {
    return {
      skills: [
        {
          iconName: 'vuejs',
          displayName: 'Vue JS',
        },
        {
          iconName: 'javascript',
          displayName: 'JavaScript',
        },
        {
          iconName: 'css3',
          displayName: 'CSS3',
        },
        {
          iconName: 'html5',
          displayName: 'HTML5',
        },
        {
          iconName: 'react',
          displayName: 'React',
        },
        {
          iconName: 'vscode',
          displayName: 'VS Code',
        },
        {
          iconName: 'putty',
          displayName: 'Putty',
        },
        {
          iconName: 'ssh',
          displayName: 'SSH',
        },
        {
          iconName: 'bash',
          displayName: 'Bash',
        },
        {
          iconName: 'vim',
          displayName: 'Vim',
        },
        {
          iconName: 'git',
          displayName: 'Git',
        },
        {
          iconName: 'java',
          displayName: 'Java',
        },
      ],
    }
  }
};
</script>

<style scoped>
  img {
    border-radius: 50%;
  }

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

  .box-icon {
    opacity: 0;
    position: relative;
    left: -100px;
    transition: opacity 0.5s;
    transition: all 0.5s;
  }
  .box-icon.show {
    opacity: 100;
    left: 0;
    transition: opacity 0.5s, left 0.5s, transform 0.5s;
  }
  .box-icon:hover {
    transform: translateY(-10px);
    transition: all 0.5s;
  }

  .devicon {
    position: relative;
    font-size: 3.5rem;
    margin: 1rem 2rem;
    transition: font 0.5s, margin 0.5s;
  }

  .devicon::before {
    transition: font 0.5s, margin 0.5s;
  }
  .devicon:hover::before {
    transform: translateY(-100px);
  }
  .box-icon {
    transition: margin 0.5s;
  }
</style>