<template>
	<div class="mt96">
		<div class="page-px py-5">
			<div class="d-flex flex-wrap">
				<div class="section-breadcrumbs">
					Производство <span class="mx-3">/</span>
				</div>
				<div class="breadcrumb-last">
					Агары
				</div>
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

		<div class="row no-gutters bg-2">
			<div class="col-lg-6 col-md-12">
				<div class="mx-50 page-px">
					<img class="section-2-left-bg" src="@/assets/images/section_2_figure.svg" alt="1">
				<div>

					<hr class="mb-5">

					<div class="section-2-description mb-5">
						<p>
							<span class="ml-4"></span>
							Одним из интересных и перспективных направлений компании «Avant Metal Group» является производство
							строительных кранов. При производстве техники используются инновационные технологии.
						</p>
						<p class="mb-3">
							<span class="ml-4"></span>
							«Avant Metal Group» уникальный источник глобального опыта и знаний, совмещенных с местными уникальными
							технологиями, расширяющими возможности подъемного оборудования и увеличивающими производительность
							и безопасность предприятия. 
						</p>
					</div>
				</div>
			</div>
			</div>
			<div class="col-lg-6 col-md-12">
				<img src="@/assets/images/construction_cranes/image1.png" alt="">
			</div>
		</div>

		<div class="row no-gutters bg-2">
			<div class="col-lg-6 col-md-12">
				<img src="@/assets/images/construction_cranes/image2.png" alt="">
			</div>
			<div class="col-lg-6 col-md-12">
				<div class="mx-50 page-px">
						<img class="section-2-left-bg" src="@/assets/images/section_2_figure.svg" alt="1">
						<div>

						<div class="section-breadcrumbs mb-3">
							Тип строительных кранов <span class="mx-3">/</span> <img src="@/assets/images/line.png" alt="1">
						</div>
						<div class="section-2-title mb-5">
							Козловой ран
						</div>
						
						<hr class="mb-5">

						<div class="section-2-description mb-5">
							<p class="mb-3">
								<span class="ml-4"></span>
								Козловой кран – это габаритное грузоподъемное устройство мостового типа, предназначенное для перемещения
								грузов в портах, на промышленных складах, строительстве. Также козловые краны используются при ремонте техники
								крупных размеров, монтаже сборного оборуддования, разгрузке поездов и в других задачах, предполагающих
								высокоинтенсивную транспортировку грузов.
							</p>
						</div>

						<button class="button-danger content-over-video-button mt-3">
							<div>Подробнее</div>
							<img src="@/assets/images/button_chevron.svg">
						</button>
					</div>
				</div>
			</div>
		</div>

		<div class="row no-gutters bg-2">
			<div class="col-lg-6 col-md-12">
				<div class="mx-50 page-px">
						<img class="section-2-left-bg" src="@/assets/images/section_2_figure.svg" alt="1">
						<div>

						<div class="section-breadcrumbs mb-3">
							Тип строительных кранов <span class="mx-3">/</span> <img src="@/assets/images/line.png" alt="1">
						</div>
						<div class="section-2-title mb-5">
							Мостовой кран
						</div>
						
						<hr class="mb-5">

						<div class="section-2-description mb-5">
							<p class="mb-3">
								<span class="ml-4"></span>
								Мостовой кран – представляет собой грузоподъемное оборудование, которое активно
								используется на производственных предприятиях, складах, строительных площадках.
								Транспортировка материалов выполняется за счет перемещения их по подкрановому пути.
							</p>
							<p class="mb-3">
								<span class="ml-4"></span>
								В промышленности применяются модели с широким диапазоном характеристик.
								Выбор определяется особенностями сферы использования и параметрами грузов.
							</p>
						</div>

						<button class="button-danger content-over-video-button mt-3">
							<div>Подробнее</div>
							<img src="@/assets/images/button_chevron.svg">
						</button>
					</div>
				</div>
			</div>
			<div class="col-lg-6 col-md-12">
				<img src="@/assets/images/construction_cranes/image3.png" alt="">
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