<template>
  <div id="app">
        <div class="wrapper">
        <Scrollama @step-enter="stepEnterHandler">
        <div class="wrapper">
          <Intro ref="IntroComponent"/>
        </div>
        <div class="wrapper">
          <Info class="step" id = "info" ref="InfoComponent"/>
        </div>
        <div class="wrapper">
          <Skills class="step" id = "skills" ref="SkillsComponent"/>
        </div>
        <div class="wrapper">
          <Education class="step" id="education" ref="EducationComponent" />
        </div>
        <div class="wrapper">
          <Work class="step" id="work" ref="WorkComponent"/>
        </div>
        <div class="wrapper">
          <Projects class="step" id="projects" ref="ProjectsComponent"/>
        </div>
        </Scrollama>
        <div class="wrapper custom">
          <Contact ref="ContactComponent"/>
        </div>
        <div class="copyright">&copy; KenzChiro. All rights reserved. Credit Design:
          <a href="https://html5up.net">HTML5 UP</a>.</div>
        </div>
      </div>
</template>

<script>
import 'intersection-observer' // for cross-browser support
import Scrollama from 'vue-scrollama'
import Intro from './views/Intro'
import Info from './views/Info'
import Skills from './views/Skills'
import Education from './views/Education'
import Work from './views/Work'
//import Activities from './views/Activities'
import Contact from './views/Contact'
import Projects from './views/Projects'


export default {
  name: "App",
  components: {
    Intro,
    Info,
    Skills,
    Education,
    Work,
    Projects,
    Scrollama,
    //Activities,
    Contact
      },
  data() {
    return {
      activeStage: 0,
    }
  },
  mounted() {
    this.$refs.InfoComponent.$emit('onEnter')
  },
  methods: {
    stepEnterHandler ({element, index, direction}) {
      //console.log('Enter', element,index, direction)

      if (direction === 'down') {
        switch (index) {
          case 0:
            break;
          case 1:
            this.$refs.InfoComponent.$refs.Timeline.$emit('onEnter')
            break;
          case 2:
            this.$refs.EducationComponent.$refs.Timeline.$emit('onEnter')
            break;
          case 3:
            this.$refs.WorkComponent.$refs.Timeline.$emit('onEnter')
            break;
          case 4:
            this.$refs.ProjectsComponent.$refs.Timeline.$emit('onEnter')
            break;
        }
      }else {
        switch (index) {
          case 0:
            this.$refs.NavbarComponent.$emit('onLeave')
            break;
        }
      }

    }
  }
}

</script>

<style>
@import './assets/css/main.css';

.step{
color: antiquewhite
}

.custom{
	height: 100%;
}
</style>
