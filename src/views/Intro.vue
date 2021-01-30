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
        <li>
          <a href="https://nattawuteleven.wixsite.com/kenzchiro">
            <i class="fab fa-wix"></i>
          </a>
        </li>
      </ul>
    </header>
    <div class="content spacing">
      <span class="layer"  data-position="center">
      <img :src="asset0" class="layer" data-speed="2">
      <span class="layer"  data-position="center" >
        <img :src="asset1" class="layer" >
      </span> 
      <img :src="asset2" class="layer" data-speed="3">
      <img :src="asset3" class="layer" data-speed="-6">
      <img :src="asset4" class="layer" data-speed="4">
      <img :src="asset5" class="layer" data-speed="-2.5">
      <span class="image circular--portrait" data-position="center"  >
        <img src="../assets/intro_profile.jpeg" />
      </span> 
      <img :src="asset6" class="layer" data-speed="5">
      <img :src="asset7" class="layer" data-speed="-5">
      <img :src="asset8" class="layer" data-speed="-1.5">
      <img :src="asset9" class="layer" data-speed="-1">
      <img :src="asset10" class="layer" data-speed="1">
    </span> 
    </div>
  </section>
</template>

<script>
import { info } from "@/assets/data/me.json";
// import anime from 'animejs';
import asset0 from "../assets/asset0.svg";
import asset1 from "../assets/asset1.svg";
import asset2 from "../assets/asset2.svg";
import asset3 from "../assets/asset3.svg";
import asset4 from "../assets/asset4.svg";
import asset5 from "../assets/asset5.svg";
import asset6 from "../assets/asset6.svg";
import asset7 from "../assets/asset7.svg";
import asset8 from "../assets/asset8.svg";
import asset9 from "../assets/asset9.svg";
import asset10 from "../assets/asset10.svg";

export default {
  name: "Intro",
  data() {
    return {
      info,
      asset0,
      asset1,
      asset2,
      asset3,
      asset4,
      asset5,
      asset6,
      asset7,
      asset8,
      asset9,
      asset10
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
document.addEventListener('mousemove', e => parallax(e));

const parallax = (e) => {
	document.querySelectorAll('.layer').forEach(layer => {
		const speed = layer.getAttribute('data-speed');

		const x = (window.innerWidth - e.pageX * speed) / 100;
		const y = (window.innerHeight - e.pageY * speed) / 100;

		layer.style.transform = `translate(${x}px, ${y}px)`;
	});
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

*:focus {
  outline: 0;
}

html {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

body {
	background-color: #111111;
	font-family: 'Poppins', sans-serif;
}



section img {
	height: 90vh;
	left: 0;
	object-fit: contain;
	position: absolute;
	top: 0;
	width: 100%;
}

section h2 {
	color: #ffffff;
	font-size: 12rem;
	position: relative;
}

@media screen and (max-width: 990px) {
	section h2 {
		font-size: 9rem;
	}
}

@media screen and (max-width: 768px) {
	section h2 {
		font-size: 6rem;
	}
}

@media screen and (max-width: 550px) {
	section h2 {
		font-size: 4rem;
	}
}
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
