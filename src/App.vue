<template>
  <div id="app">
    
		<header class="bg-f2">
			<div class="d-flex">
				<div class="header-logo-wrapper mr-4">
					<div class="vertical-center">
						<img src="@/assets/images/header_logo.svg" alt="logo">
					</div>
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
						<div class="header-recall-btn cursor-pointer px-5">
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
				<img class="section-2-left-bg" src="@/assets/images/section_2_figure.svg" alt="section_2_figure">
				<div>
					<div class="section-2-menu-name mb-5">
						Коротко о нас
					</div>
					<div class="section-2-title">
						Мы стремимся к тому, чтобы все наши 
						решения и технологии были 
						максимально полезны на практике и 
						делали жизнь лучше.
					</div>

					<hr class="mb-5">

					<div class="section-2-description mb-5">
						<p>
							<span class="ml-4">Avant Metal Group - компания, которая</span>
							зарекомендовала себя как надежного и
							ответственного производителя. Также, тесно
							сотрудничает с различными локальными и
							лидирующими зарубежными компаниями в таких
							странах как Корея, Турция, Китай, Россия.
						</p>
					</div>
 
					<button class="content-over-video-button">
						<div>Подробнее</div>
						<img src="@/assets/images/button_chevron.svg" alt="button_chevron">
					</button>
				</div>
			</div>
			<div class="section-2-right p-relative" :style="{'background-image': 'url(' + require('@/assets/images/section_2_bg.svg') + ')'}">
				<div class="img-overlay p-absolute"></div>
				<img class="p-absolute" src="@/assets/images/section_2_bg_overlay.png" alt="section_2_bg_overlay" style="right:0">
			</div>
		</div>

		<!-- SECTION 3 -->
		<div class="section-3">
			<div class="container-fluid page-px py-5">
				<div class="section-2-menu-name mb-5">
					О производстве
				</div>

				<div class="section-2-title mb-3">
					<h2 class="title-color mb-0">
						Главный двигатель нашей компании – <br>
						высокий уровень мотивации. 
					</h2>
				</div>
				<hr class="mb-5">

				<div class="row">
					<div class="col-md-4">
						<div class="red-element">
							<div class="vertical-center">
								<h1 class="section-3-title">30 000 т.</h1>
								<p class="section-3-description">
									производственной <br>мощности
								</p>
							</div>
						</div>
						<p class="section-3-text">
							<span class="ml-4">В 2021 году AKFA Build планирует</span> достичь 30 000 тонн производственной мощности завода.
						</p>
					</div>
					<div class="col-md-4">
						<div class="red-element">
							<div class="vertical-center">
								<h1 class="section-3-title">22 000</h1>
								<p class="section-3-description">
									квадратных метров
								</p>
							</div>
						</div>
						<p class="section-3-text">
							<span class="ml-4">Площадь производственного </span> комплекса составляет более 22 тысяч квадратных метров.
						</p>
					</div>
					<div class="col-md-4">
						<div class="red-element">
							<div class="vertical-center">
								<h1 class="section-3-title">250</h1>
								<p class="section-3-description">
									человек
								</p>
							</div>
						</div>
						<p class="section-3-text">
							<span class="ml-4">Штат сотрудников насчитывает</span> <br>250 человек.
						</p>
					</div>
				</div>
			</div>
		</div>

		<!-- SECTION 4 -->
		<div class="section-4 bg-2">
			<div class="container-fluid page-px py-5">
				<div class="section-2-menu-name mb-2">
					виды производства / Продукция
				</div>
			</div>

			<VueSlickCarousel v-bind="productionTypes">
				<div class="product-type p-relative" :style="{'background-image': 'url(' + require('@/assets/images/slider1/prod_type1.svg') + ')'}">
					<div class="img-overlay p-absolute"></div>
					<div class="product-type-img p-absolute d-flex justify-content-center w-100 h-100">
						<div class="vertical-center">
							<div class="d-flex justify-content-center w-100 mb-3">
								<img src="@/assets/images/slider1/ico1.svg" alt="section_2_bg_overlay" width="144">
							</div>
							<p class="color-white">Уникальные здания</p>
						</div>
					</div>
				</div>
				<div class="product-type p-relative" :style="{'background-image': 'url(' + require('@/assets/images/slider1/prod_type2.svg') + ')'}">
					<div class="img-overlay p-absolute"></div>
					<div class="product-type-img p-absolute d-flex justify-content-center w-100 h-100">
						<div class="vertical-center">
							<div class="d-flex justify-content-center w-100 mb-3">
								<img src="@/assets/images/slider1/ico2.svg" alt="section_2_bg_overlay" width="144">
							</div>
							<p class="color-white">Уникальные здания</p>
						</div>
					</div>
				</div>
			</VueSlickCarousel>
		</div>

		<!-- SECTION 5 -->
		<div class="section-5 bg-2">
			<img src="@/assets/images/section_5_figure.svg" alt="section_5_figure" style="position: absolute;right: 0;">
			<div class="container-fluid page-px py-5">
				<div class="section-2-menu-name mb-5">
					Оборудование / наши партнеры
				</div>

				<div class="section-2-title mb-3">
					<h2 class="title-color mb-0">
						Оборудования мировых лидеров
					</h2>
				</div>

				<hr class="mb-5">

				<div class="media">
					<img src="@/assets/images/red_element.svg" alt="logo" class="mr-5" height="96">
					<div class="media-body">
						<p><span class="ml-4">На</span> площади комплекса размещено оборудование <br> мировыхлидеров в области металлообработки, таких как: </p>
					</div>
				</div>
				
			</div>
		</div>

		<div class="slider2" :style="{'background-image': 'url(' + require('@/assets/images/slider2/image1.svg') + ')'}">
			<div class="slider-2-overlay"></div>
		</div>

		<div class="section-6 bg-2">
			<div class="container-fluid page-px py-5">
				<div class="section-2-menu-name mb-5">
					Конструкторское бюро
				</div>

				<div class="section-2-title mb-4">
					Конструкторское бюро
				</div>

				<hr class="mb-5">

				<div class="d-flex justify-content-between flex-wrap mb-5">
					<div class="media">
						<img src="@/assets/images/red_element.svg" alt="logo" class="mr-5" height="64" width="64">
						<div class="media-body">
							<h5 class="mb-5">Разработка чертежей КМ и КМД</h5>
							<p class="m-0 opacity05">
								<span class="ml-4">Исходным</span> документом для проектирования любого здания или <br>
								 сооружения является задание на проектирование, составленное <br> заказчиком.
							</p>
						</div>
					</div>
					<div class="vertical-end flex-wrap">
						<div class="header-recall-btn cursor-pointer p-3">
							<div class="color-fb">задание на проектирование</div>
						</div>
					</div>
				</div>

				<hr class="mb-5">

				<div class="media mb-5">
					<img src="@/assets/images/red_element.svg" alt="logo" class="mr-5" height="64" width="64">
					<div class="media-body">
						<h5>Перечень работ по проектированию на стадии КМ :</h5>
					</div>
				</div>

				<div class="row">
					<div class="col-md-4">
						<div class="media">
							<img src="@/assets/images/section6/1.svg" alt="1" class="mr-5">
							<div class="media-body">
								<p>Создание 3D расчётной схемы каркаса сооружения</p>
							</div>
						</div>

						<div class="media">
							<img src="@/assets/images/section6/2.svg" alt="1" class="mr-5">
							<div class="media-body">
								<p>Сбор постоянных и временных нагрузок, действующих на сооружение</p>
							</div>
						</div>
					</div>
					<div class="col-md-4">
						<div class="media">
							<img src="@/assets/images/section6/3.svg" alt="1" class="mr-5">
							<div class="media-body">
								<p>Стадия расчетов, графического анализа и подбора сечений профилей</p>
							</div>
						</div>

						<div class="media">
							<img src="@/assets/images/section6/4.svg" alt="1" class="mr-5">
							<div class="media-body">
								<p>Разработка принципиальных узловых соединений элементов конструкции</p>
							</div>
						</div>
					</div>
					<div class="col-md-4">
						<div class="media">
							<img src="@/assets/images/section6/5.svg" alt="1" class="mr-5">
							<div class="media-body">
								<p>Выпуск комплектов чертежей проектной (стадия П) и/или рабочей документации (стадия Р) марки КМ (конструкции металлические) </p>
							</div>
						</div>
					</div>
				</div>
				
			</div>
		</div>

		<!-- SECTION 7 -->
		<div class="section-7 bg-1">
			<div class="container-fluid page-px py-5">
				<div class="section-2-menu-name mb-5">
					Производство / Реализованные проекты
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

			<div class="slider2" :style="{'background-image': 'url(' + require('@/assets/images/slider2/image1.svg') + ')'}">
				<div class="slider-2-overlay"></div>
			</div>
		</div>

		<div class="section-8">
			<div class="container-fluid page-px py-5">
				<div class="section-2-menu-name mb-5">
					Актуальные новости
				</div>

				<div class="section-2-title d-flex justify-content-between flex-wrap mb-5">
					<h2>
						Главный двигатель нашей компании – <br>
						высокий уровень мотивации.
					</h2>
					<button class="content-over-video-button">все новости ></button>
				</div>

				<div class="row">
					<div class="col-md-3">
						<div class="d-flex justify-content-between flex-column h-100">
							<h4 class="section-5-news-title mb-3">COVID-19 Бизнес-инвестиционный бонус.</h4>
							<div>
								<span class="section-5-news-date">16 февраля 2021 г.</span>
								<hr>
								<img src="@/assets/images/news/1.svg" alt="1">
							</div>
						</div>
					</div>
					<div class="col-md-3">
						<div class="d-flex justify-content-between flex-column h-100">
							<h4 class="section-5-news-title mb-3">COVID-19 Бизнес-инвестиционный бонус.</h4>
							<div>
								<span class="section-5-news-date">16 февраля 2021 г.</span>
								<hr>
								<img src="@/assets/images/news/2.svg" alt="2">
							</div>
						</div>
					</div>
					<div class="col-md-3">
						<div class="d-flex justify-content-between flex-column h-100">
							<h4 class="section-5-news-title mb-3">HGG Under the Hood -  Стратегическое партнерство.</h4>
							<div>
								<span class="section-5-news-date">16 февраля 2021 г.</span>
								<hr>
								<img src="@/assets/images/news/3.svg" alt="3">
							</div>
						</div>
					</div>
					<div class="col-md-3">
						<div class="d-flex justify-content-between flex-column h-100">
							<h4 class="section-5-news-title mb-3">Новые установки от компании Voortman Steel Machinery. </h4>
							<div>
								<span class="section-5-news-date">16 февраля 2021 г.</span>
								<hr>
								<img src="@/assets/images/news/4.svg" alt="4">
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<footer class="page-px">
			<div class="footer-wrapper">
				<div class="row py-5">
					<div class="col-md-6">
						<div class="media">
							<div>
								<img src="@/assets/images/logo2.svg" alt="logo" class="mr-5" width="96">
							</div>
							<div class="media-body opacity05">
								<p>
									Компания Avant Metal Group зарекомендовала<br>
									себя как надежного и ответственного<br>
									производителя, в продукции которого вы можете<br>
									быть уверены. 
								</p>
								<hr>
								la la la
							</div>
						</div>
					</div>
					<div class="col-md-6">
						<div class="d-flex flex-wrap">
							<div class="col-md-4">
								<div class="mb-3">
									Производство
								</div>
								<ul>
									<li>
										<a href="">Ангары</a>
									</li>
									<li>
										<a href="">Уникальные здания</a>
									</li>
									<li>
										<a href="">Мархи</a>
									</li>
									<li>
										<a href="">Промышленные здания</a>
									</li>
									<li>
										<a href="">Строительные краны</a>
									</li>
									<li>
										<a href="">Металлопрокат</a>
									</li>
								</ul>
							</div>
							<div class="col-md-4">
								<div class="mb-3">
									О компании
								</div>
								<ul>
									<li>
										<a href="">Производтвенный комплекс</a>
									</li>
									<li>
										<a href="">Конструкторское бюро</a>
									</li>
									<li>
										<a href="">Оборудование</a>
									</li>
									<li>
										<a href="">Проекты</a>
									</li>
									<li>
										<a href="">Новости</a>
									</li>
								</ul>
							</div>
							<div class="col-md-4">
								<div class="mb-3">
									Контакты
								</div>
								<div class="mb-3">
									Обратная связь
								</div>
								<hr>
								<div class="contacts">
									По вопросам партнерства <br>
									+998 71 203 00 00 <br>
									info@akfagroup.com
								</div>
							</div>
						</div>
					</div>
				</div>

				<hr class="my-0 opacity05">
				<div class="d-flex justify-content-between flex-wrap p-3">
					<div class="opacity05">Avant Metal Group © 2021 Все права защищены</div>
					<div>Условия обработки персональных данных</div>
				</div>
			</div>
		</footer>

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
				infinite: true,
				speed: 500,
				slidesToShow: 3,
				slidesToScroll: 2,
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
							slidesToShow: 2
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