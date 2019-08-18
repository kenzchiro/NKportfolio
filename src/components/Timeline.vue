<template>
	<div class="TimelineBox">
    <div :class="'layer-'+layerClass" v-for="(event,e) in data" :key="e">
			<div class="TimelineBox-item">
			  <div class="TimelineBox-info">
					<span>{{event.time}}</span>
				</div>
				<div class="TimelineBox-marker"></div>
					<div class="TimelineBox-content">
						<h6 class="TimelineBox-title">{{event.topic}}</h6>
								<div class="TimelineBox-detail">
									<v-icon> {{event.icon}}</v-icon>  {{event.detail}}
								</div>
              <p><span v-for="(line,l) in event.text" :key="l">{{line}}<br></span></p>
					</div>
					<br>
        </div>
        <div class="TimelineBox-item period">
				</div>
     </div>
       <div class="TimelineBox-item period">
					<div class="TimelineBox-marker"></div>
			</div>
	</div>

</template>

<script>
import anime from 'animejs'

export default {
  name: 'Timeline',
  props: ['title','data'],
  computed: {
    layerClass() {
      return this.title.slice(0,2).toLowerCase()
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
        targets: '.layer-'+this.layerClass,
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
body {
  color: #768390;
  font-family: "Effra", Helvetica, sans-serif;
  padding: 0;
  -webkit-font-smoothing: antialiased;
}


h1, h2, h3, h4, h5, h6 {
  color: #001a33;
  margin-top: 0;
  margin-bottom: -10px;
  padding-bottom: -10px;
  letter-spacing: 1px;
  text-transform: none;
}

a {
  color: #001a33;
}
a:hover {
  color: #ff9a9a;
  text-decoration: none;
}



.container-fluid .row {
  padding: 0 0 4em 0;
}
.container-fluid .row:nth-child(even) {
  background: #F1F4F5;
}

/*==================================
    TimelineBox
==================================*/
/*-- GENERAL STYLES
------------------------------*/
.TimelineBox {
  line-height: 1.4em;
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
}
.TimelineBox h1, .TimelineBox h2, .TimelineBox h3, .TimelineBox h4, .TimelineBox h5, .TimelineBox h6 {
  line-height: inherit;
  margin-bottom:3px;

}

/*----- TimelineBox ITEM -----*/
.TimelineBox-item {
  padding-left: 40px;
  position: relative;
}
.TimelineBox-item:last-child {
  padding-bottom: 0;
}

/*----- TimelineBox INFO -----*/
.TimelineBox-info {
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 3px;
  margin: 0 0 .5em 0;
  text-transform: uppercase;
  white-space: nowrap;
}


.TimelineBox-marker:before {
  background: #FF6B6B;
  border: 3px solid transparent;
  border-radius: 100%;
  content: "";
  display: block;
  height: 15px;
  position: absolute;
  top: 4px;
  left: 0;
  width: 15px;
  transition: background 0.3s ease-in-out, border 0.3s ease-in-out;
}
.TimelineBox-marker:after {
  content: "";
  width: 3px;
  background: #CCD5DB;
  display: block;
  position: absolute;
  top: 24px;
  bottom: 0;
  left: 6px;
}
.TimelineBox-item:last-child .TimelineBox-marker:after {
  content: none;
}

.TimelineBox-item:not(.period):hover .TimelineBox-marker:before {
  background: transparent;
  border: 3px solid #FF6B6B;
}

/*----- TimelineBox CONTENT -----*/
.TimelineBox-content {
  color: #001a33;
  background: white;
  padding: 1rem;
  border-radius: 6px;
  box-shadow: 0 1px 19px 0 rgba(0,0,0,0.10);

}


.TimelineBox-content:hover {
  background: ghostwhite;
  text-decoration: none;
}
.TimelineBox-detail {
  font-size: 12px;
  color: #768390;
  margin-bottom: 10px;
}
.TimelineBox-content p:last-child {
  margin-bottom: 0;
}

/*----- TimelineBox PERIOD -----*/
.period {
  padding: 0;
}
.period .TimelineBox-info {
  display: none;
}
.period .TimelineBox-marker:before {
  background: transparent;
  content: "";
  width: 15px;
  height: auto;
  border: none;
  border-radius: 0;
  top: -5px;
  bottom: 30px;
  position: absolute;
  border-top: 3px solid #CCD5DB;
  border-bottom: 3px solid #CCD5DB;
}
.period .TimelineBox-marker:after {
  content: "";
  height: 32px;
  top: auto;
}
.period .TimelineBox-content {
  padding: 40px 0 70px;
}
.period .TimelineBox-title {
  margin: 0;
}



</style>

