<template>
  <section>
			<header>
				<div data-aos="fade-right"><h2>PROJECTS</h2></div>
			</header>
			<div class="content">
          <div class="spacing">
            <timeline title="PROJECTS" :data="projects" ref="Timeline"></timeline>
          </div>
			</div>
	</section>

</template>

<script>
import Timeline from '@/components/Timeline'
import { projects } from '@/assets/data/projects.json'

export default {
  name: 'Projects',
  components: {
  Timeline
  },
  data() {
    return {
      projects
    }
  }
}
</script>

<style>
</style>
