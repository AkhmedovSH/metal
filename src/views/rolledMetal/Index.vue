<template>
	<div class="mt96">
		<div class="page-px py-5">
			<div class="d-flex flex-wrap">
				<div class="section-breadcrumbs">
					Производство <span class="mx-3">/</span>
				</div>
				<div class="breadcrumb-last">
					Металлопрокат
				</div>
			</div>
		</div>

		<div class="position-relative rolled_metal_bg">
			<div class="about-img-overlay"></div>
			<div class="position-absolute page-px about-img-content">
				<div class="media mb-5">
					<img src="@/assets/images/industrial_building/icon_main.svg" alt="logo" class="mr-5 d-none-mobile" height="96">
					<div class="media-body">
						<h1>Металлопрокат</h1>
					</div>
				</div>
				<p class="color-2">
				Производство штучных и мелкооптовых партий изделий из черного <br> металла.
				</p>
			</div>
		</div>

		<div class="row no-gutters bg-1">
			<div class="col-lg-6 col-md-12 bg-ff">
				<div class="mx-50 page-px">
					<img class="triangle" src="@/assets/images/triangle.png" alt="1">
				<div>
					<div class="section-breadcrumbs">
						Металлопрокат <span class="mx-3">/</span> Производство
					</div>

					<hr class="mb-5">

					<div class="section-2-description mb-5">
						<p class="opacity05">
							<span class="ml-4"></span>
							«Avant Metal Group»  принимает заказы на производство штучных и мелкооптовых партий изделий из черного металла.
						</p>
						<p class="opacity05">
							<span class="ml-4"></span>
							Технические мощности предприятия укомплектованы современным оборудованием, к работам привлекается квалифицированный персонал.
						</p>
						<p class="mb-3 color-danger">
							<span class="ml-4"></span>
							На всю линейку продукции распростроняются гарантийные обязательства.
						</p>
					</div>
				</div>
			</div>
			</div>
			<div class="col-lg-6 col-md-12">
				<div class="img-overlay position-absolute"></div>
				<img src="@/assets/images/rolled_metal/image1.png">
			</div>
		</div>

		<div class="page-px py-5">
			<div class="section-breadcrumbs mb-5">
				Производство <span class="mx-3">/</span> Реализованные проекты
			</div>

			<div class="media">
				<img src="@/assets/images/red_element.svg" alt="logo" class="mr-5 d-none-mobile" height="96">
				<div class="media-body">
					<p>
						<span class="ml-4">Компания</span> Avant Metal Group зарекомендовала себя как <br>
						надежного и ответственного производителя, в продукции<br>
						которого вы можете быть уверены.
					</p>
				</div>
			</div>
		</div>
		
		<VueSlickCarousel v-bind="slider3">
			<div class="container-fluid p-0">
				<div class="row">
					<div class="col-md-12">
						<div class="slider3" :style="{'background-image': 'url(' + require('@/assets/images/slider3/images_.svg') + ')'}">
							<div class="slider-2-overlay"></div>
							<div class=" slider2-content">
								<div class="vertical-center h-100">
									<div class="d-flex">
										<img src="@/assets/images/slider1/ico1.svg" alt="logo" class="mr-5">
										<div>
											<h2>«Здание-лотос» The Lotus Building</h2>
											<p>г.Ташкент. Шайхантахурский район.</p>
											<hr class="mb-3">
											<p>
												По задумке австралийских архитекторов, «Здание-лотос», состоящее из трех <br> 
												частей, символизирует три этапа в жизни цветка лотоса.
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="container-fluid p-0">
				<div class="row">
					<div class="col-md-12">
						<div class="slider3" :style="{'background-image': 'url(' + require('@/assets/images/slider3/images_.svg') + ')'}">
							<div class="slider-2-overlay"></div>
							<div class=" slider2-content">
								<div class="vertical-center h-100">
									<div class="d-flex">
										<img src="@/assets/images/slider1/ico1.svg" alt="logo" class="mr-5">
										<div>
											<h2>«Здание-лотос» The Lotus Building</h2>
											<p>г.Ташкент. Шайхантахурский район.</p>
											<hr class="mb-3">
											<p>
												По задумке австралийских архитекторов, «Здание-лотос», состоящее из трех <br> 
												частей, символизирует три этапа в жизни цветка лотоса.
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
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
  name: 'Home',
	components: { VueSlickCarousel, News },
	data() {
		return {
			slider3: {
				dots: false,
				arrows: true,
				infinite: true,
				speed: 500,
				slidesToShow: 1,
				slidesToScroll: 1,
				initialSlide: 0,
			},
		}
	}
}
</script>