<template>
  <section>
			<header>
				<h2>CERTOFICATIONS</h2>
			</header>
			<div class="content">
          <div class="spacing">
            <timeline title="CERTOFICATIONS" :data="certifications" ref="Timeline"></timeline>
          </div>
			</div>
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

<style>
.spacing{
padding-bottom: 2rem;
}
</style>
