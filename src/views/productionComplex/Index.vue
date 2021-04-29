<template>
	<div class="mt96">
		<div class="page-px py-5 bg-2">
			<div class="d-flex flex-wrap">
				<div class="section-breadcrumbs">
					О нас <span class="mx-3">/</span>
				</div>
				<div class="breadcrumb-last">
					Производтвенный комплекс
				</div>
			</div>
		</div>

		<div class="position-relative pr_complex_bg_1">
			<div class="about-img-overlay"></div>
			<div class="position-absolute page-px about-img-content">
				<div class="media mb-5">
					<img src="@/assets/images/red_element.svg" alt="logo" class="mr-5 d-none-mobile" height="96">
					<div class="media-body">
						<h1>Производтвенный комплекс</h1>
					</div>
				</div>
				<p class="color-2">
					На площади комплекса собрано оборудования мировых лидеров в <br> области металлообработки .
				</p>
			</div>
		</div>

		<div class="page-px py-5 bg-2 position-relative">
			<img src="@/assets/images/section_2_figure.svg" alt="1" class="section-2-left-bg" width="200" style="top:0">
			<div class="row mb-5">
				<div class="col-md-6">
					<hr>
					<p class="section-3-text mb-4 px-3">
						<span class="ml-4"></span>
						Производственный комплекс компании позволяет предложить <br> такие виды услуг как строительство сооружений  
						любой <br> сложности из ЧМК и ЛСТК, возведение сооружений из систем <br> Мархи, а также широкий спектр продуктов
						и услуг применяемых <br> в строительстве больших высотных зданий.
					</p>
				</div>
				<div class="col-md-6">
					<hr>
					<p class="section-3-text px-3">
						<span class="ml-4"></span> Площадь производственного комплекса составляет более 22 <br>
						тысяч квадратных метров. Штат сотрудников насчитывает 250 <br>
						человек. На этой площади собраны оборудования мировых <br> лидеров в области металлообработки .
					</p>
				</div>
			</div>

			<hr class="mb-5">

			<div class="row">
				<div class="col-md-4 mb-5">
					<div class="d-flex flex-wrap">
						<div class="section-3-block-icon-wrapper">
							<div class="section-3-block-icon"></div>
						</div>
						<div class="section-3-block-content">
							<div class="section-3-block-body">
								<h1 class="section-3-title">30 000 т.</h1>
								<p class="section-3-description">
									производственной мощности
								</p>
							</div>
							<div class="section-3-text">
								<span class="ml-4"></span>В 2021 году AKFA Build планирует достичь 30 000 тонн производственной мощности завода.
							</div>
						</div>
					</div>
				</div>
				<div class="col-md-4 mb-5">
					<div class="d-flex">
						<div class="section-3-block-icon-wrapper">
							<div class="section-3-block-icon"></div>
						</div>
						<div class="section-3-block-content">
							<div class="section-3-block-body">
								<h1 class="section-3-title">22 000</h1>
								<p class="section-3-description">
									квадратных метров
								</p>
							</div>
							<div class="section-3-text">
								<span class="ml-4"></span>Площадь производственного комплекса составляет более 22 тысяч квадратных метров.
							</div>
						</div>
					</div>
				</div>
				<div class="col-md-4 mb-5">
					<div class="d-flex">
						<div class="section-3-block-icon-wrapper">
							<div class="section-3-block-icon"></div>
						</div>
						<div class="section-3-block-content">
							<div class="section-3-block-body">
								<h1 class="section-3-title">250</h1>
								<p class="section-3-description">
									человек
								</p>
							</div>
							<div class="section-3-text">
								<span class="ml-4">Штат сотрудников насчитывает</span><br>250 человек.
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="position-relative pr_complex_bg_2 mb-5">
			<div class="about-slogan">
				<div class="container-fluid h-100">
					<div class="row h-100">
						<div class="h-100 about-slogan_block">
							<div class="h-100 bg-4 p-5">
								<img class="ml-3 mb-4" src="@/assets/images/about/about_line.svg">
								<p class="color-2 about-slogan_block_text">
									На площади комплекса <br>
									размещено оборудование <br>
									мировых лидеров в области <br>
									металлообработки лучше.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<VueSlickCarousel v-bind="slider3">
			<div class="slider2" :style="{'background-image': 'url(' + require('@/assets/images/slider2/image1.svg') + ')'}">
				<div class="slider-2-overlay"></div>
				<div class="slider2-content">
					<div class="w-100 page-px">
						<div class="slider2-img-wrapper">
							<img class="slider2-img" src="@/assets/images/slider2/img1.png" alt="logo" style="display: initial;">
						</div>
						<div class="vertical-center h-100">
							<div class="d-flex">
								<div class="mr-5">
									<h2>
										ESAB Welding & <br> Cutting 
									</h2>
									<p>(Швеция)</p>
									<hr>
									<p>Сварочное оборудование и сварочные <br> материалы.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="slider2" :style="{'background-image': 'url(' + require('@/assets/images/slider2/image1.svg') + ')'}">
				<div class="slider-2-overlay"></div>
				<div class="slider2-content">
					<div class="w-100 page-px">
						<div class="slider2-img-wrapper">
							<img class="slider2-img" src="@/assets/images/slider2/img1.png" alt="logo" style="display: initial!important;">
						</div>
						<div class="vertical-center h-100">
							<div class="d-flex">
								<div class="mr-5">
									<h2>
										ESAB Welding & <br> Cutting 
									</h2>
									<p>(Швеция)</p>
									<hr>
									<p>Сварочное оборудование и сварочные <br> материалы.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</VueSlickCarousel>

		<div class="page-px py-5">
			<div class="row mb-5">
				<div class="col-md-6">
					<div class="media">
						<img src="@/assets/images/red_element.svg" alt="logo" class="mr-5 d-none-mobile" height="96">
						<div class="media-body">
							<p class="color-1"><span class="ml-4"></span> Avant Metal Group ориентирована на предоставление
								высокотехнологичных и доступных решений в области металлоконструкций и стройматериалов.</p>
						</div>
					</div>
				</div>
			</div>

			<div class="row">
				<div class="col-lg-2 col-md-4 mb-5">
					<div class="bg-1 py-5 icons-block">
						<div class="d-flex justify-content-center mb-3">
							<img src="@/assets/images/about/about_icon_1.svg">
						</div>
						<p class="text-center">Уникальные <br>здания</p>
					</div>
				</div>
				<div class="col-lg-2 col-md-4 mb-5">
					<div class="bg-1 py-5 icons-block">
						<div class="d-flex justify-content-center mb-3">
							<img src="@/assets/images/about/about_icon_2.svg">
						</div>
						<p class="text-center">Мархи</p>
					</div>
				</div>
				<div class="col-lg-2 col-md-4 mb-5">
					<div class="bg-1 py-5 icons-block">
						<div class="d-flex justify-content-center mb-3">
							<img src="@/assets/images/about/about_icon_3.svg">
						</div>
						<p class="text-center">Ангары</p>
					</div>
				</div>
				<div class="col-lg-2 col-md-4 mb-5">
					<div class="bg-1 py-5 icons-block">
						<div class="d-flex justify-content-center mb-3">
							<img src="@/assets/images/about/about_icon_4.svg">
						</div>
						<p class="text-center">Промышленные <br>здания</p>
					</div>
				</div>
				<div class="col-lg-2 col-md-4 mb-5">
					<div class="bg-1 py-5 icons-block">
						<div class="d-flex justify-content-center mb-3">
							<img src="@/assets/images/about/about_icon_5.svg">
						</div>
						<p class="text-center">Строительные <br>краны</p>
					</div>
				</div>
				<div class="col-lg-2 col-md-4 mb-5">
					<div class="bg-1 py-5 icons-block">
						<div class="d-flex justify-content-center mb-3">
							<img src="@/assets/images/about/about_icon_6.svg">
						</div>
						<p class="text-center">Металлопрокат</p>
					</div>
				</div>
			</div>
		</div>

		<div class="page-px py-5 bg-1">
			<div class="section-breadcrumbs">
				Производство <span class="mx-3">/</span> <strong>Реализованные проекты</strong>
			</div>
		</div>

		<VueSlickCarousel v-bind="slider3">
			<div class="container-fluid p-0">
				<div class="row">
					<div class="col-md-12">
						<div class="slider3" :style="{'background-image': 'url(' + require('@/assets/images/production_complex/slider_1.png') + ')'}">
							<div class="slider-2-overlay"></div>
							<div class=" slider2-content">
								<div class="vertical-center h-100">
									<div class="d-flex">
										<img src="@/assets/images/production_complex/slider_icon1.svg" alt="logo" class="mr-5">
										<div>
											<h2>ЛСТК и ЛМК</h2>
											<hr class="mb-3">
											<p>
												Производство и поставка профилей ЛСТК и ЛМК для строительства <br> быстровозводимого здания.
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