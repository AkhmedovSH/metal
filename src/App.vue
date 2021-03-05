<template>
  <div id="app">
    
		<header class="bg-f2">
			<div class="d-flex">
				<div class="mr-4">
					<img src="@/assets/images/logo.svg" alt="logo">
				</div>
				<div class="header-navbar-nav bg-f2">
					<ul class="header-navbar-ul">
						<li><a href="#">Услуги</a></li>
						<li><a href="#">Производство</a></li>
						<li><a href="#">Проекты</a></li>
						<li><a href="#">партнеры</a></li>
						<li><a href="#">О компании</a></li>
						<li><a href="#">Новости</a></li>
						<li><a href="#">контакты</a></li>
					</ul>
					<div class="d-flex h-100">
						<div class="bg-ea vertical-center px-4">
							<img src="@/assets/images/Icon_search.svg" alt="icon_search">
						</div>
						<div class="header-recall-btn cursor-pointer">
							<div class="color-fb">Заказать звонок</div>
						</div>
					</div>
				</div>
			</div>
		</header>

		<div class="bg-video-wrap">
			<video src="promo.mp4" loop muted autoplay>
			</video>
			<div class="overlay"></div>
			<div class="content-over-video">
				<div class="mr-5">
					<img src="@/assets/images/logo2.svg" alt="logo"> <br>
					<div class="text-center mt-2">AVANT METAL GROUP</div>
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
					<button class="content-over-video-button">Подробнее о производстве ></button>
				</div>
			</div>
		</div>

		<!-- SECTION 2 -->
		<div class="d-flex flex-wrap section-2">
			<div class="section-2-left">
				<img class="section-2-left-bg" src="@/assets/images/section_2_figure.svg" alt="section_2_figure">
				<div>
					<div class="section-2-menu-name mb-5">
						Коротко о нас
					</div>
					<div class="section-2-title">
						Мы стремимся к тому, чтобы все наши <br>
						решения и технологии были <br>
						максимально полезны на практике и <br>
						делали жизнь лучше.
					</div>

					<hr class="mb-5">

					<div class="section-2-description mb-5">
						<p>
							<span class="ml-4">Avant Metal Group - компания, которая</span> <br>
							зарекомендовала себя как надежного и <br>
							ответственного производителя. Также, тесно <br>
							сотрудничает с различными локальными и <br>
							лидирующими зарубежными компаниями в таких <br>
							странах как Корея, Турция, Китай, Россия.
						</p>
					</div>
 
					<button class="content-over-video-button">
						<div>Подробнее</div>
						<img src="@/assets/images/button_chevron.svg" alt="button_chevron">
					</button>
				</div>
			</div>
			<div class="section-2-right" :style="{'background-image': 'url(' + require('@/assets/images/section_2_bg.svg') + ')'}">
				<!-- <img src="@/assets/images/section_2_bg.svg" alt="logo"> -->
			</div>
		</div>

		<!-- SECTION 3 -->
		<div class="section-3">
			<div class="container-fluid page-px py-5">
				<div class="section-2-menu-name mb-5">
					О производстве
				</div>

				<div class="section-2-title mb-5">
					<h1>
						Главный двигатель нашей компании – <br>
						высокий уровень мотивации. 
					</h1>
				</div>

				<div class="row">
					<div class="col-md-4">
						<div>
							<div class="red-element">
								<div>
									<h1 class="section-3-title">30 000 т.</h1>
									<p class="section-3-description">
										производственной <br>мощности
									</p>
								</div>
							</div>
							<p class="section-3-text">
								<span class="ml-4">В 2021 году AKFA Build планирует</span> <br> достичь 30 000 тонн <br> производственной мощности завода.
							</p>
						</div>
					</div>
					<div class="col-md-4">
						<div>
							<h1 class="section-3-title">22 000</h1>
							<p class="section-3-description">
								квадратных метров
							</p>
							<p class="section-3-text">
								<span class="ml-4">Площадь производственного </span> <br> комплекса составляет более 22 тысяч <br> квадратных метров.
							</p>
						</div>
					</div>
					<div class="col-md-4">
						<div>
							<h1 class="section-3-title">250</h1>
							<p class="section-3-description">
								человек
							</p>
							<p class="section-3-text">
								<span class="ml-4">Штат сотрудников насчитывает</span> <br>250 человек.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- SECTION 4 -->
		<div>
			<div class="container-fluid page-px py-5">
				<div class="section-2-menu-name mb-2">
					виды производства / Продукция
				</div>
			</div>

			<VueSlickCarousel v-bind="productionTypes">
				<div class="product-type">
					<div class="product-type-photo" :style="{'background-image': 'url(' + require('@/assets/images/slider1/prod_type1.svg') + ')'}"></div>
				</div>
				<div class="product-type">
					<div class="product-type-photo" :style="{'background-image': 'url(' + require('@/assets/images/slider1/prod_type2.svg') + ')'}"></div>
				</div>
				<div class="product-type">
					<div class="product-type-photo" :style="{'background-image': 'url(' + require('@/assets/images/slider1/prod_type3.svg') + ')'}"></div>
				</div>
			</VueSlickCarousel>
		</div>

		<!-- SECTION 5 -->
		<div class="section-5">
			<div class="container-fluid page-px py-5">
				<div class="section-2-menu-name mb-2">
					Оборудование / наши партнеры
				</div>

				<div class="section-2-title mb-5">
					Оборудования мировых лидеров
				</div>

				<hr>

				<div class="section-2-description">
					<span class="ml-4">
						На площади комплекса размещено оборудование мировых <br>лидеров в области металлообработки, таких как: 
					</span>
				</div>
				
			</div>
		</div>

		<div class="slider2" :style="{'background-image': 'url(' + require('@/assets/images/slider2/image1.svg') + ')'}">
			<div class="slider-2-overlay"></div>
		</div>

		<div class="section-5">
			<div class="container-fluid page-px py-5">
				<div class="section-2-menu-name mb-2">
					Конструкторское бюро
				</div>

				<div class="section-2-title mb-5">
					Конструкторское бюро
				</div>

				<hr>
				
			</div>
		</div>

  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'	
export default {
  name: 'App',
	components: { VueSlickCarousel },
	data() {
		return {
			productionTypes: {
				dots: false,
				arrows: false,
				infinite: false,
				speed: 500,
				slidesToShow: 3,
				slidesToScroll: 2,
				initialSlide: 0,
				responsive: [
					{
						breakpoint: 991,
						settings: {
							slidesToShow: 4
						}
					},
					{
						breakpoint: 767,
						settings: {
							slidesToShow: 3
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