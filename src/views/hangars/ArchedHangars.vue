<template>
	<div class="mt96">
		<div class="page-px py-5">
			<div class="section-breadcrumbs">
				Производство <span class="mx-3">/</span> Агары <span class="mx-3">/</span> <strong>Арочные Агары</strong>
			</div>
		</div>

		<div class="position-relative arched_hangars_bg">
			<div class="about-img-overlay"></div>
			<div class="position-absolute page-px about-img-content">
				<div class="media mb-5">
					<img src="@/assets/images/hangars/arched/main_1.svg" alt="logo" class="mr-5" height="96">
					<div class="media-body">
						<h1>Арочные ангары</h1>
					</div>
				</div>
				<p class="color-2">
				В арочном ангаре может быть естественное освещение, конструкция <br>
				допускает любое количество окон, в любом месте.
				</p>
			</div>
		</div>

		<news></news>

	</div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import '@/assets/css/vue-slick.css'
import '@/assets/css/vue-slick-theme.css'
import News from '@/components/News.vue'

export default {
  name: 'Home',
	components: { VueSlickCarousel, News },
	data() {
		return {
			productionTypes: {
				dots: false,
				arrows: false,
				infinite: false,
				speed: 500,
				slidesToShow: 4,
				slidesToScroll: 1,
				initialSlide: 0,
				responsive: [
					{
						breakpoint: 991,
						settings: {
							slidesToShow: 2
						}
					},
					{
						breakpoint: 767,
						settings: {
							slidesToShow: 1
						}
					},
					{
						breakpoint: 580,
						settings: {
							slidesToShow: 1
						}
					}
				]
			},
		}
	}
}
</script>