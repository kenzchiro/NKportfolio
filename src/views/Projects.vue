<template>
  <section>
			<header>
				<h2>PROJECTS</h2>
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
