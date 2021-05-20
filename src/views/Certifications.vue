<template>
  <section>
			<header>
				<div data-aos="fade-right"><h2>CERTIFICATIONS</h2></div>
			</header>
			<div class="content">
          <div class="spacing">
            <timeline title="CERTOFICATIONS" :data="certifications" ref="Timeline"></timeline>
          </div>
			</div>
          <footer></footer>

	</section>

</template>

<script>
import Timeline from '@/components/Timeline'
import { certifications } from '@/assets/data/certifications.json'

export default {
  name: 'Certifications',
  components: {
  Timeline
  },
  data() {
    return {
      certifications
    }
  }
}
</script>


<style scoped>
ul.icons li {
  display: inline-block;
  cursor: default;
  list-style: none;
  width: 2rem;
  height: 2rem;
  text-align: center;
  align-content: center;
  border-radius: 100%;
  vertical-align: middle;
}
ul.icons li:hover {
  background-color: rgba(144, 144, 144, 0.1);
  color: #ff9a9a;
}
p {
  margin-bottom: 2em;
  color: darkslategrey;
}
a {
  color: darkslategrey;
}
h3 {
  margin-bottom: 0.1em;
}
.spacing {
  padding: 1rem;
}
.wrapper > section:last-of-type > header:before {
  height: 100%;
}

.wrapper > section:last-of-type > header:after {
  background: #43d9b8;
  border-radius: 0.5rem;
  bottom: -1.5rem;
  content: "";
  display: block;
  height: 0.5rem;
  position: absolute;
  width: 0.5rem;
  z-index: 1;
}

@media screen and (max-width: 1152px) {
  .wrapper > section:last-of-type > header:after {
    display: none;
  }
}
h4,
h5,
h6 {
  color: #001a33;
  margin-top: 0;
  margin-bottom: 5px;
  letter-spacing: 1px;
  text-transform: none;
  font-size: 90%;
}
</style>