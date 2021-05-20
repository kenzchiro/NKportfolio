<template>
  <div id="app">
        <div class="wrapper">
        <Scrollama @step-enter="stepEnterHandler">
        <div class="wrapper">
          <Intro ref="IntroComponent"/>
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
        <div class="wrapper">
          <Certifications class="step" id="certifications" ref="CertificationsComponent"/>
        </div>
        <div class="wrapper custom">          
        </div>
        
        </Scrollama>

        <div class="copyright">&copy; KenzChiro. All rights reserved. Credit Design:
          <a href="https://html5up.net">HTML5 UP</a>.</div>
        </div>
  </div>
</template>

<script>
import 'intersection-observer' // for cross-browser support
import Scrollama from 'vue-scrollama'
import Intro from './views/Intro'
import Skills from './views/Skills'
import Education from './views/Education'
import Work from './views/Work'
import Certifications from './views/Certifications'
import Projects from './views/Projects'


export default {
  name: "App",
  components: {
    Intro,
    Skills,
    Education,
    Work,
    Projects,
    Certifications,
    Scrollama,
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
