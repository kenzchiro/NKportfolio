<template>
  <section>
			<header>
				<div data-aos="fade-right"><h2>WORK<br>EXPERIENCE</h2></div>
			</header>
			<div class="content">
          <div class="spacing">
            <timeline title="WORK" :data="work" ref="Timeline"></timeline>
          </div>
			</div>
	</section>

</template>

<script>
import Timeline from '@/components/Timeline'
import { work } from '@/assets/data/work.json'

export default {
  name: 'Work',
  components: {
  Timeline
  },
  data() {
    return {
      work
    }
  }
}
</script>

<style>
.spacing{
padding-bottom: 2rem;
}
</style>
