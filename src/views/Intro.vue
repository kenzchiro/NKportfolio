<template>
  <section class="intro">
    <header>
      <h1>
        Ken
        <br />Nattawut
      </h1>
      <p>
        A Junior Computer Engineering Student
        <br />in love with integrating code and design
      </p>

      <ul class="icons">
        <li>
          <a href="https://twitter.com/nattawut_nk">
            <v-icon>fab fa-twitter</v-icon>
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/KenzChiro">
            <v-icon>fab fa-facebook</v-icon>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/nk_nattawut/">
            <v-icon>fab fa-instagram</v-icon>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/nk-nattawut/">
            <v-icon>fab fa-linkedin</v-icon>
          </a>
        </li>
        <li>
          <a href="https://github.com/kenzchiro">
            <v-icon>fab fa-github</v-icon>
          </a>
        </li>
        <!-- <li>
          <a href="https://medium.com/@nk.nattawut">
            <v-icon>fab fa-medium-m</v-icon>
          </a>
        </li>-->
        <li>
          <a href="https://nattawuteleven.wixsite.com/kenzchiro">
            <i class="fab fa-wix"></i>
          </a>
        </li>
      </ul>
    </header>
    <div class="content spacing">
      <span class="image fill" data-position="center">
        <img src="../assets/intro_profile.jpeg" alt />
      </span>
    </div>
  </section>
</template>

<script>
import { info } from "@/assets/data/me.json";
// import anime from 'animejs'
export default {
  name: "Intro",
  data() {
    return {
      info
    };
  },
  mounted() {
    const targets = ".imag";
    this.$anime
      .timeline()
      .add({
        targets,
        translateY: -100
      })
      .add({
        targets,
        translateY: 0,
        easing: "easeInQuart"
      });
    /* ... etc ... */
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p {
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
}

h1 {
  font-size: 6.5rem;
  font-weight: 700;
}

ul.icons li {
  display: block;
  cursor: default;
  list-style: none;
  padding-left: 0;
  width: 2.25rem;
  height: 2.25rem;
  text-align: center;
  line-height: 2.25rem;
  border-radius: 2.25rem;
  display: inline-block;
}
ul.icons li:hover {
  background-color: rgba(144, 144, 144, 0.1);
  color: #ff9a9a;
}
a {
  color: #001a33;
  font-size: 20px;
}
.spacing {
  padding-bottom: 2rem;
}
</style>
