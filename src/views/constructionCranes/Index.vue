<template>
	<div class="mt96">
		<div class="page-px py-5">
			<div class="section-breadcrumbs">
				Производство <span class="mx-3">/</span> <strong>Агары</strong>
			</div>
		</div>
		<VueSlickCarousel v-bind="productionTypes">
			<div class="product-type position-relative" :style="{'background-image': 'url(' + require('@/assets/images/construction_cranes/slider1.png') + ')'}">
				<div class="img-overlay position-absolute"></div>
				<div class="product-type-img position-absolute d-flex justify-content-center w-100 h-100">
					<div class="vertical-center">
						<div class="d-flex justify-content-center w-100 mb-3">
							<img src="@/assets/images/slider1/ico1.svg" alt="section_2_bg_overlay" width="144">
						</div>
						<p class="color-white text-center">Прямостенные ангары</p>
					</div>
				</div>
				<img class="position-absolute product-type-bg-overlay h-100" src="@/assets/images/slider_bg_overlay.png" alt="slider_bg_overlay">
			</div>
			<div class="product-type position-relative" :style="{'background-image': 'url(' + require('@/assets/images/construction_cranes/slider2.png') + ')'}">
				<div class="img-overlay position-absolute"></div>
				<div class="product-type-img position-absolute d-flex justify-content-center w-100 h-100">
					<div class="vertical-center">
						<div class="d-flex justify-content-center w-100 mb-3">
							<img src="@/assets/images/slider1/ico2.svg" alt="section_2_bg_overlay" width="144">
						</div>
						<p class="color-white text-center">Арочные ангары</p>
					</div>
				</div>
				<img class="position-absolute product-type-bg-overlay h-100" src="@/assets/images/slider_bg_overlay.png" alt="slider_bg_overlay">
			</div>
			<div class="product-type position-relative" :style="{'background-image': 'url(' + require('@/assets/images/hangars/arched/arched3.png') + ')'}">
				<div class="img-overlay position-absolute"></div>
				<div class="product-type-img position-absolute d-flex justify-content-center w-100 h-100">
					<div class="vertical-center">
						<div class="d-flex justify-content-center w-100 mb-3">
							<img src="@/assets/images/slider1/ico3.svg" alt="section_2_bg_overlay" width="144">
						</div>
						<p class="color-white text-center">Шатровые ангары</p>
					</div>
				</div>
				<img class="position-absolute product-type-bg-overlay h-100" src="@/assets/images/slider_bg_overlay.png" alt="slider_bg_overlay">
			</div>
			<div class="product-type position-relative" :style="{'background-image': 'url(' + require('@/assets/images/hangars/arched/arched4.png') + ')'}">
				<div class="img-overlay position-absolute"></div>
				<div class="product-type-img position-absolute d-flex justify-content-center w-100 h-100">
					<div class="vertical-center">
						<div class="d-flex justify-content-center w-100 mb-3">
							<img src="@/assets/images/slider1/ico4.svg" alt="section_2_bg_overlay" width="144">
						</div>
						<p class="color-white text-center">Полигональные ангары</p>
					</div>
				</div>
				<img class="position-absolute product-type-bg-overlay h-100" src="@/assets/images/slider_bg_overlay.png" alt="slider_bg_overlay">
			</div>
		</VueSlickCarousel>

		<news></news>

	</div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import '@/assets/css/vue-slick.css'
import '@/assets/css/vue-slick-theme.css'
import News from '@/components/News.vue'

export default {
	components: { VueSlickCarousel, News },
	data() {
		return {
			productionTypes: {
				dots: false,
				arrows: false,
				infinite: false,
				speed: 500,
				slidesToShow: 2,
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