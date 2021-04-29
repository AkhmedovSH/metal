<template>
	<div class="mt96">
		<div class="page-px py-5">
			<div class="d-flex flex-wrap">
				<div class="section-breadcrumbs">
					Производство <span class="mx-3">/</span> Уникальные здания и сооружения <span class="mx-3">/</span>
				</div>
				<div class="breadcrumb-last">
					Арочные Агары
				</div>
			</div>
		</div>

		<div class="position-relative unique_building_bg">
			<div class="about-img-overlay"></div>
			<div class="position-absolute page-px about-img-content">
				<div class="media mb-5">
					<img src="@/assets/images/unique_buildings/icon1.svg" alt="logo" class="mr-5 d-none-mobile" height="96">
					<div class="media-body">
						<h1>Уникальные здания и сооружения</h1>
					</div>
				</div>
				<p class="color-2">
					Помещения характерезующиеся эксклюзивным экстерьером и <br>
					вместительностью более 1 тыс. человек.
				</p>
			</div>
		</div>

		<div class="d-flex flex-wrap section-2">
			<img class="triangle" src="@/assets/images/triangle.png" alt="1">
			<div class="section-2-left page-px">
				<img class="triangle" src="@/assets/images/triangle.png" alt="1">
				<div>

					<hr class="mb-5">

					<div class="section-2-description mb-5">
						<p class="mb-3 opacity05">
							<span class="ml-4"></span>
							Строительство зданий и сооружений с каждым годом набирает все
							большие темпы. Крупные города будут расти вверх - таковамировая
							тенденция. Серьезное внимание при этом уделяется особенностям строительства.
							Таким образом, чтобы возводить эти сооружения, нужны специалисты нового образца,
							обладающие уникальными знаниями, способные креативно воспринимать новую информацию
							и воплощать ее в удивительных проектах.
						</p>
						<p class="color-danger">
							<span class="ml-4"></span>
							Специалисты Avant Metal Group владеют всеми необходимыми навыками для проектирования и возведения подобных зданий и сооружений.
						</p>
					</div>
				</div>
			</div>
			<div class="section-2-right position-relative" :style="{'background-image': 'url(' + require('@/assets/images/unique_buildings/image2.png') + ')'}">
				<div class="img-overlay position-absolute"></div>
				<img class="position-absolute h-100" src="@/assets/images/section_2_bg_overlay.png" alt="section_2_bg_overlay" style="right:0">
			</div>
		</div>

		<div class="page-px py-5 bg-1 element_bg">
			<div class="section-breadcrumbs mb-5">
				Уникальные здания и сооружения <span class="mx-3">/</span> Характеристтики
			</div>

			<div class="media mb-5">
				<img src="@/assets/images/red_element.svg" alt="logo" class="mr-5 d-none-mobile" height="96">
				<div class="media-body">
					<p>
						<span class="ml-4"></span>
						К уникальным сооружениям относятся те объекты, <br>
						на которые в проектной докумнтации предусмотрена <br>
						хотя бы одна из следующих характеристик:
					</p>
				</div>
			</div>

			<div class="row mx-md-n5 pt-5">
				<div class="col-lg-4 col-md-6 col-sm-12 px-md-5">
					<div class="media mb-5">
						<img src="@/assets/images/unique_buildings/icon_2.svg" alt="1" class="mr-5">
						<div class="media-body section-6-blocks main-color">
							<p>
								Использование конструкций и конструктивных систем, требующих нестандартных методов расчета, эксперементальной проверки на физических моделях, применяемых на территориях с сесмичностью до 9 баллов;
							</p>
						</div>
					</div>
				</div>
				<div class="col-lg-4 col-md-6 col-sm-12 px-md-5">
					<div class="media mb-5">
						<img src="@/assets/images/unique_buildings/icon_3.svg" alt="1" class="mr-5">
						<div class="media-body section-6-blocks main-color">
							<p>Пролет более 60 м ;</p>
						</div>
					</div>

					<div class="media mb-5">
						<img src="@/assets/images/unique_buildings/icon_4.svg" alt="1" class="mr-5">
						<div class="media-body section-6-blocks main-color">
							<p>Высота более 50 м ;</p>
						</div>
					</div>
				</div>
				<div class="col-lg-4 col-md-6 col-sm-12 px-md-5">
					<div class="media mb-5">
						<img src="@/assets/images/unique_buildings/icon_5.svg" alt="1" class="mr-5">
						<div class="media-body section-6-blocks main-color">
							<p>
								Заглубление подземной части ниже (полностью или частично) планировочной отметки земли более чем на 15 м, с пролетом более 50 м или со строительным объемом более 100 тыс.м³ и с одновременным пребыванием более 500 человек. 
							</p>
						</div>
					</div>
				</div>
			</div>

		</div>

		<div class="page-px py-5 bg-1 element_bg">
			<div class="row no-gutters">
				<div class="col-lg-12 col-md-12">
					<div class="section-breadcrumbs mb-5">
						Уникальные здания и сооружения <span class="mx-3">/</span> типы
					</div>
					<div class="section-2-title">
						К уникальным сооружениям относятся :
					</div>
					<hr class="mb-5">

					<div class="row mx-md-n5">
						<div class="col-lg-4 col-md-6 col-sm-12 px-md-5">
							<div class="media mb-5">
								<img src="@/assets/images/unique_buildings/unique_icon1.svg" alt="1" class="mr-5">
								<div class="media-body section-6-blocks main-color">
									<p>Спортивные, зрелищные культовые сооружения;</p>
								</div>
							</div>

							<div class="media mb-5">
								<img src="@/assets/images/unique_buildings/unique_icon2.svg" alt="1" class="mr-5">
								<div class="media-body section-6-blocks main-color">
									<p>Торгово-развлекательные комплексы;</p>
								</div>
							</div>

							<div class="media mb-5">
								<img src="@/assets/images/unique_buildings/unique_icon3.svg" alt="1" class="mr-5">
								<div class="media-body section-6-blocks main-color">
									<p>Вокзалы;</p>
								</div>
							</div>
						</div>
						<div class="col-lg-4 col-md-6 col-sm-12 px-md-5">
							<div class="media mb-5">
								<img src="@/assets/images/unique_buildings/unique_icon4.svg" alt="1" class="mr-5">
								<div class="media-body section-6-blocks main-color">
									<p>Многофункциональные офисы;</p>
								</div>
							</div>

							<div class="media mb-5">
								<img src="@/assets/images/unique_buildings/unique_icon5.svg" alt="1" class="mr-5">
								<div class="media-body section-6-blocks main-color">
									<p>Гостиницы;</p>
								</div>
							</div>

							<div class="media mb-5">
								<img src="@/assets/images/unique_buildings/unique_icon6.svg" alt="1" class="mr-5">
								<div class="media-body section-6-blocks main-color">
									<p>Музеи;</p>
								</div>
							</div>
						</div>
						<div class="col-lg-4 col-md-6 col-sm-12 px-md-5">
							<div class="media mb-5">
								<img src="@/assets/images/unique_buildings/unique_icon7.svg" alt="1" class="mr-5">
								<div class="media-body section-6-blocks main-color">
									<p>Выставочные павильоны;</p>
								</div>
							</div>

							<div class="media mb-5">
								<img src="@/assets/images/unique_buildings/unique_icon8.svg" alt="1" class="mr-5">
								<div class="media-body section-6-blocks main-color">
									<p>Аэропорты;</p>
								</div>
							</div>

							<div class="media mb-5">
								<img src="@/assets/images/unique_buildings/unique_icon9.svg" alt="1" class="mr-5">
								<div class="media-body section-6-blocks main-color">
									<p>Помещения характерезующиеся эксклюзивным экстерьером и вместительностью более 1 тыс. человек.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
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