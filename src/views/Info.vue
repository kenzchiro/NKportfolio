<template>
  <section>
			<header>
				<div data-aos="fade-right"><h2>PERSONAL<br>INFORMATION</h2></div>
			</header>
			<div class="content">
          <div class="columns spacing_top">
          <div class="column is-fill ">
            <div v-for="(index,i) in info" :key="i" :class="'columns is-mobile'">
              <div class="column is-1">
                <span><h4><v-icon class="custom">{{index.icon}}</v-icon></h4></span>
              </div>
              <div class="column is-11">
                <span><label class="custom">{{index.text}}</label></span>
            </div>
            </div>
          </div>
        </div>
			</div>
	</section>
</template>

<script>
import anime from 'animejs'
import { info } from '@/assets/data/me.json'
export default {
  name: 'Info',
  data() {
    return {
        info
    }
  },
  mounted() {
    this.$once('onEnter', () => {

    anime.timeline({
        loop: false,
        easing: 'easeOutQuad',
      })
      .add({
        targets: '.stage',
        direction: 'normal',
        opacity: [0,1],
        duration: 1,
      })
      .add({
        targets: '.item',
        direction: 'normal',
        translateY: ['10vw',0],
        opacity: [0,1],
        duration: 1500,
        delay: (el,i) => i*100,
      })
    })
  },
}
</script>

<style scope>
h1{
  font-size:1.8rem;
  padding-top:10px;
  vertical-align: middle;
  color: #001a33;
}
.custom{
  color: #001a33;
  font-size: 18px;
}
.spacing_top{
padding-top: 4rem;
padding-bottom: 2rem;
}

</style>
