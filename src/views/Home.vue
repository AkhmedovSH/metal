<template>
	<div>
		<div class="bg-video-wrap">
			<video src="promo.mp4" loop muted autoplay></video>
			<div class="overlay"></div>
			<div class="content-over-video">
				<div class="content-over-video-image">
					<img src="@/assets/images/general/header_logo.png" alt="logo">
				</div>
				<div class="content-over-video-desc">
					<h1 class="content-over-video-title">
						Высокотехнологичные <br> 
						и доступные решения в области <br> 
						металлоконструкций и <br> стройматериалов
					</h1>
					<p class="content-over-video-description">Компания Avant Metal Group зарекомендовала себя как <br>
					 	надежного и отвественного производителя, в продукции <br>
					  котором вы можете быть уверены.
					</p>
					<div class="content-over-video-button-wrapper">
						<button class="content-over-video-button d-flex">
							<div class="mr-5">Подробнее о производстве</div>
							<img src="@/assets/images/chevron_white.svg" alt="logo">
						</button>
					</div>
				</div>
			</div>
		</div>

		<!-- SECTION 2 -->
		<div class="d-flex flex-wrap section-2">
			<div class="section-2-left page-px">
				<img class="section-2-left-bg" src="@/assets/images/section_2_figure.svg" alt="1">
				<div>
					<div class="section-breadcrumbs mb-5">
						<span class="mr-4">Коротко о нас</span>
						<img src="@/assets/images/line.png" alt="1">
					</div>
					<div class="section-2-title">
						Мы стремимся к тому, чтобы все наши 
						решения и технологии были 
						максимально полезны на практике и 
						делали жизнь лучше.
					</div>

					<hr class="mb-5">

					<div class="section-2-description mb-5">
						<p class="opacity05">
							<span class="ml-4">Avant Metal Group - компания, которая</span>
							зарекомендовала себя как надежного и
							ответственного производителя. Также, тесно
							сотрудничает с различными локальными и
							лидирующими зарубежными компаниями в таких
							странах как Корея, Турция, Китай, Россия.
						</p>
					</div>
 
					<button class="button-danger content-over-video-button">
						<div>Подробнее</div>
						<img src="@/assets/images/button_chevron.svg" alt="button_chevron">
					</button>
				</div>
			</div>
			<div class="section-2-right position-relative" :style="{'background-image': 'url(' + require('@/assets/images/section_2_bg.svg') + ')'}">
				<div class="img-overlay position-absolute"></div>
				<img class="position-absolute h-100" src="@/assets/images/section_2_bg_overlay.png" alt="section_2_bg_overlay" style="right:0">
			</div>
		</div>

		<!-- SECTION 3 -->
		<div class="section-3">
			<div class="page-px py-5">
				<div class="section-breadcrumbs mb-5">
					<span class="mr-4">О производстве</span>
					<img src="@/assets/images/line.png" alt="1">
				</div>

				<div class="section-2-title mb-3">
					<h2 class="main-color mb-0">
						Главный двигатель нашей компании – <br>
						высокий уровень мотивации. 
					</h2>
				</div>
				<hr class="mb-5">

				<div class="row">
					<div class="col-md-12 col-lg-4 mb-5">
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
					<div class="col-md-12 col-lg-4 mb-5">
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
					<div class="col-md-12 col-lg-4 mb-5">
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
		</div>
	
		<!-- SECTION 4 -->
		<div class="section-4">
			<div class="page-px py-5">
				<div class="section-breadcrumbs mb-2">
					виды производства <span class="mx-3">/</span> Продукция
				</div>
			</div>
			<VueSlickCarousel v-bind="productionTypes">
				<div class="product-type position-relative" :style="{'background-image': 'url(' + require('@/assets/images/slider1/prod_type1.svg') + ')'}">
					<div class="img-overlay position-absolute"></div>
					<div class="product-type-img position-absolute d-flex justify-content-center w-100 h-100">
						<div class="vertical-center">
							<div class="d-flex justify-content-center w-100 mb-3">
								<img src="@/assets/images/slider1/ico1.svg" alt="section_2_bg_overlay" width="144">
							</div>
							<p class="color-white text-center">Уникальные здания</p>
						</div>
					</div>
					<img class="position-absolute product-type-bg-overlay h-100" src="@/assets/images/slider_bg_overlay.png" alt="slider_bg_overlay">
				</div>
				<div class="product-type position-relative" :style="{'background-image': 'url(' + require('@/assets/images/slider1/prod_type2.svg') + ')'}">
					<div class="img-overlay position-absolute"></div>
					<div class="product-type-img position-absolute d-flex justify-content-center w-100 h-100">
						<div class="vertical-center">
							<div class="d-flex justify-content-center w-100 mb-3">
								<img src="@/assets/images/slider1/ico2.svg" alt="section_2_bg_overlay" width="144">
							</div>
							<p class="color-white text-center">Мархи</p>
						</div>
					</div>
					<img class="position-absolute product-type-bg-overlay h-100" src="@/assets/images/slider_bg_overlay.png" alt="slider_bg_overlay">
				</div>
				<div class="product-type position-relative" :style="{'background-image': 'url(' + require('@/assets/images/slider1/prod_type3.svg') + ')'}">
					<div class="img-overlay position-absolute"></div>
					<div class="product-type-img position-absolute d-flex justify-content-center w-100 h-100">
						<div class="vertical-center">
							<div class="d-flex justify-content-center w-100 mb-3">
								<img src="@/assets/images/slider1/ico3.svg" alt="section_2_bg_overlay" width="144">
							</div>
							<p class="color-white text-center">Ангары</p>
						</div>
					</div>
					<img class="position-absolute product-type-bg-overlay h-100" src="@/assets/images/slider_bg_overlay.png" alt="slider_bg_overlay">
				</div>
				<div class="product-type position-relative" :style="{'background-image': 'url(' + require('@/assets/images/slider1/prod_type4.svg') + ')'}">
					<div class="img-overlay position-absolute"></div>
					<div class="product-type-img position-absolute d-flex justify-content-center w-100 h-100">
						<div class="vertical-center">
							<div class="d-flex justify-content-center w-100 mb-3">
								<img src="@/assets/images/slider1/ico4.svg" alt="section_2_bg_overlay" width="144">
							</div>
							<p class="color-white text-center">Промышленные здания</p>
						</div>
					</div>
					<img class="position-absolute product-type-bg-overlay h-100" src="@/assets/images/slider_bg_overlay.png" alt="slider_bg_overlay">
				</div>
				<div class="product-type position-relative" :style="{'background-image': 'url(' + require('@/assets/images/slider1/prod_type5.svg') + ')'}">
					<div class="img-overlay position-absolute"></div>
					<div class="product-type-img position-absolute d-flex justify-content-center w-100 h-100">
						<div class="vertical-center">
							<div class="d-flex justify-content-center w-100 mb-3">
								<img src="@/assets/images/slider1/ico5.svg" alt="section_2_bg_overlay" width="144">
							</div>
							<p class="color-white text-center">Мархи</p>
						</div>
					</div>
					<img class="position-absolute product-type-bg-overlay h-100" src="@/assets/images/slider_bg_overlay.png" alt="slider_bg_overlay">
				</div>
				<div class="product-type position-relative" :style="{'background-image': 'url(' + require('@/assets/images/slider1/prod_type6.svg') + ')'}">
					<div class="img-overlay position-absolute"></div>
					<div class="product-type-img position-absolute d-flex justify-content-center w-100 h-100">
						<div class="vertical-center">
							<div class="d-flex justify-content-center w-100 mb-3">
								<img src="@/assets/images/slider1/ico6.svg" alt="section_2_bg_overlay" width="144">
							</div>
							<p class="color-white text-center">Металлопрокат</p>
						</div>
					</div>
					<img class="position-absolute product-type-bg-overlay h-100" src="@/assets/images/slider_bg_overlay.png" alt="slider_bg_overlay">
				</div>
			</VueSlickCarousel>
		</div>

		<!-- SECTION 5 -->
		<div class="section-5">
			<img src="@/assets/images/section_5_figure.svg" alt="section_5_figure" style="position: absolute;right: 0;">
			<div class="page-px py-5">
				<div class="section-breadcrumbs mb-5">
					Оборудование <span class="mx-3">/</span> наши партнеры
				</div>

				<div class="section-2-title mb-3">
					<h2 class="main-color mb-0">
						Оборудования мировых лидеров
					</h2>
				</div>

				<hr class="mb-5">

				<div class="media"
				data-aos="fade-down" 
				data-aos-duration="1000" 
				data-aos-once="true">
					<img src="@/assets/images/red_element.svg" alt="logo" class="mr-5" height="96">
					<div class="media-body">
						<p><span class="ml-4">На</span> площади комплекса размещено оборудование <br> мировыхлидеров в области металлообработки, таких как: </p>
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

		<!-- SECTION 6 -->
		<div class="section-6 bg-2">
			<div class="page-px py-5">
				<div class="section-breadcrumbs mb-5">
					<span class="mr-4">Конструкторское бюро</span>
					<img src="@/assets/images/line.png" alt="1">
				</div>

				<div class="section-2-title mb-4">
					Конструкторское бюро
				</div>

				<hr class="mb-5">

				<div class="d-flex justify-content-between flex-wrap">
					<div class="media mb-5">
						<img src="@/assets/images/red_element.svg" alt="logo" class="mr-5" height="64" width="64">
						<div class="media-body"
						data-aos="fade-down" 
						data-aos-duration="1000" 
						data-aos-once="true">
							<h5 class="mb-5">Разработка чертежей КМ и КМД</h5>
							<p class="m-0 opacity05">
								<span class="ml-4">Исходным</span> документом для проектирования любого здания или <br>
								 сооружения является задание на проектирование, составленное <br> заказчиком.
							</p>
						</div>
					</div>
					<div class="vertical-end flex-wrap mb-5">
						<div class="header-recall-btn cursor-pointer p-3">
							<div class="color-fb">задание на проектирование</div>
						</div>
					</div>
				</div>

				<hr class="mb-5">

				<div class="media mb-5">
					<img src="@/assets/images/red_element.svg" alt="logo" class="mr-5" height="64" width="64">
					<div class="media-body"
					data-aos="fade-down" 
					data-aos-duration="1000" 
					data-aos-once="true">
						<h5>Перечень работ по проектированию на стадии КМ:</h5>
					</div>
				</div>
				
			</div>
		</div>

		<div class="page-px pb-5 bg-2">
			<div class="row mx-md-n5">
				<div class="col-lg-4 col-md-6 col-sm-12 px-md-5 section-6-block-border">
					<div class="media mb-5">
						<img src="@/assets/images/section6/1.svg" alt="1" class="mr-5">
						<div class="media-body section-6-blocks">
							<p>Создание 3D расчётной схемы каркаса сооружения</p>
						</div>
					</div>

					<div class="media mb-5">
						<img src="@/assets/images/section6/2.svg" alt="1" class="mr-5">
						<div class="media-body section-6-blocks">
							<p>Сбор постоянных и временных нагрузок, действующих на сооружение</p>
						</div>
					</div>
				</div>
				<div class="col-lg-4 col-md-6 col-sm-12 px-md-5 section-6-block-border">
					<div class="media mb-5">
						<img src="@/assets/images/section6/3.svg" alt="1" class="mr-5">
						<div class="media-body section-6-blocks">
							<p>Стадия расчетов, графического анализа и подбора сечений профилей</p>
						</div>
					</div>

					<div class="media mb-5">
						<img src="@/assets/images/section6/4.svg" alt="1" class="mr-5">
						<div class="media-body section-6-blocks">
							<p>Разработка принципиальных узловых соединений элементов конструкции</p>
						</div>
					</div>
				</div>
				<div class="col-lg-4 col-md-6 col-sm-12 px-md-5">
					<div class="media mb-5">
						<img src="@/assets/images/section6/5.svg" alt="1" class="mr-5">
						<div class="media-body section-6-blocks">
							<p>Выпуск комплектов чертежей проектной (стадия П) и/или рабочей документации (стадия Р) марки КМ (конструкции металлические)</p>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- SECTION 7 -->
		<div class="section-7 bg-1">
			<div class="page-px py-5">
				<div class="section-breadcrumbs mb-5">
					Производство <span class="mx-3">/</span> Реализованные проекты
				</div>

				<div class="media">
					<img src="@/assets/images/red_element.svg" alt="logo" class="mr-5" height="96">
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
			showMenu: false,
			productionTypes: {
				dots: false,
				arrows: true,
				infinite: true,
				speed: 500,
				slidesToShow: 3,
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