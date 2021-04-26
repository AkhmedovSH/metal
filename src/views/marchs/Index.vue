<template>
	<div class="mt96">
		<div class="page-px py-5">
			<div class="section-breadcrumbs">
				Производство <span class="mx-3">/</span> <strong>Арочные Агары</strong>
			</div>
		</div>

		<div class="position-relative marchs_bg">
			<div class="about-img-overlay"></div>
			<div class="position-absolute page-px about-img-content">
				<div class="media mb-5">
					<img src="@/assets/images/unique_buildings/icon1.svg" alt="logo" class="mr-5" height="96">
					<div class="media-body">
						<h1>Мархи</h1>
					</div>
				</div>
				<p class="color-2">
					Помещения характерезующиеся эксклюзивным экстерьером и <br>
					вместительностью более 1 тыс. человек.
				</p>
			</div>
		</div>

		<div class="d-flex flex-wrap section-2">
			<div class="section-2-left page-px">
				<img class="section-2-left-bg" src="@/assets/images/section_2_figure.svg" alt="1">
				<div>

					<hr class="mb-5">

					<div class="section-2-description mb-5">
						<p class="mb-3">
							<span class="ml-4"></span>
							Одним из интересных и перспективных направлений компании «Avant Metal Group»
							является производство стежневых элементов для систем МАРХИ.
						</p>
						<p class="mb-3">
							<span class="ml-4"></span>
							Мы готовы изготовить по вашему запросу любое количество стержневых элементов
							с розличными диаметрами. Система МАРХИ в строительстве обладает широкими
							возможностями фоотобразования, позволяя создвать любые объемы, и решать
							сложные архетектурные задачи.
						</p>
						<p class="mb-3">
							<span class="ml-4"></span>
							Такая система выполняет не только функцию перекрытия пространства, но и является
							своего рода «скелетом» композиции всего сооружения.
						</p>
					</div>
				</div>
			</div>
			<div class="section-2-right position-relative" :style="{'background-image': 'url(' + require('@/assets/images/marchs/image1.png') + ')'}">
				<div class="img-overlay position-absolute"></div>
				<img class="position-absolute h-100" src="@/assets/images/section_2_bg_overlay.png" alt="section_2_bg_overlay" style="right:0">
			</div>
		</div>

		<div class="row no-gutters">
			<div class="col-lg-6 col-md-12">
				<div class="page-px my-5">
					<div class="section-2-title">
						Основные составляющие :
					</div>
					<hr class="mb-5">

					<div class="row">
						<div class="col-md-6 mb-5">
							<div class="media">
								<img src="@/assets/images/marchs/icon1.svg" class="mr-5">
								<div class="media-body section-3-text">
									<p>Трубчатые соединения</p>
								</div>
							</div>
						</div>
						<div class="col-md-6 mb-5">
							<div class="media">
								<img src="@/assets/images/marchs/icon2.svg" class="mr-5">
								<div class="media-body section-3-text">
									<p>Узлы</p>
								</div>
							</div>
						</div>
						<div class="col-md-6 mb-5">
							<div class="media">
								<img src="@/assets/images/marchs/icon3.svg" class="mr-5">
								<div class="media-body section-3-text">
									<p>Болты</p>
								</div>
							</div>
						</div>
						<div class="col-md-6 mb-5">
							<div class="media">
								<img src="@/assets/images/marchs/icon4.svg" class="mr-5">
								<div class="media-body section-3-text">
									<p>Муфты</p>
								</div>
							</div>
						</div>
					</div>

					<h4 class="mb-3 color-danger">Основные характеристики :</h4>
					<table class="table">
						<thead>
							<tr>
								<th>Длина пролетов без промежуточных опор</th>
								<th class="color-danger">до 120 м</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<th>Длина пролетов без промежуточных опор</th>
								<th class="color-danger">до 120 м</th>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
			<div class="col-lg-6 col-md-12">
				<div>
					<img src="@/assets/images/marchs/image2.png">
				</div>
			</div>
		</div>

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