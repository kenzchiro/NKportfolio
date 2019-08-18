<template>
  <section>
			<header>
				<h2>EDUCATION</h2>
			</header>
			  <div class="content">
          <div class="spacing">
            <timeline  title="EDUCATION" :data="education" ref="Timeline"></timeline>
          </div>
			</div>
	</section>

</template>

<script>
import Timeline from '@/components/Timeline'
import { education } from '@/assets/data/education.json'

export default {
  name: 'Education',
  components: {
    Timeline
  },
  data() {
    return {
      education
    }
  }
}
</script>

<style>
.spacing{
padding-bottom: 2rem;
}
</style>
