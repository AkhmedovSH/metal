<template>
	<div class="mt96">
		<div class="page-px py-5">
			<div class="section-breadcrumbs">
				Производство <span class="mx-3">/</span> <strong>Агары</strong>
			</div>
		</div>
		<VueSlickCarousel v-bind="productionTypes">
			<div class="product-type position-relative" :style="{'background-image': 'url(' + require('@/assets/images/hangars/arched/arched1.png') + ')'}">
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
			<div class="product-type position-relative" :style="{'background-image': 'url(' + require('@/assets/images/hangars/arched/arched2.png') + ')'}">
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

		<div class="page-px pt-5 bg-2">
			<div class="section-breadcrumbs mb-5">
				<span class="mr-4">Коротко о нас</span>
				<img src="@/assets/images/line.png" alt="1">
			</div>
			<div class="section-2-title">
				Достоинства быстровозводимых ангаров
			</div>

			<hr class="mb-5">

			<div class="media mb-5">
				<img src="@/assets/images/red_element.svg" alt="logo" class="mr-5" height="96">
				<div class="media-body">
					<p><span class="ml-4"></span> Популярность технологиии изготовления ангаров из <br>
					металлоконструкций оправдывается огромным  <br>
					списком достоинств и преимуществ как <br>
					экономических, так и практических: </p>
				</div>
			</div>

			<div class="row">
				<div class="col-md-4 mb-5">
					<div class="d-flex flex-wrap">
						<div class="section-3-block-icon-wrapper">
							<div class="section-3-block-icon"></div>
						</div>
						<div class="section-3-block-content">
							<div class="section-3-block-body">
								<h3 class="section-3-title">Быстрая скорость строительства</h3>
							</div>
						</div>
						<div class="section-3-text">
							которая занимает 1-9 месяцев ;
						</div>
					</div>
				</div>
				<div class="col-md-4 mb-5">
					<div class="d-flex flex-wrap">
						<div class="section-3-block-icon-wrapper">
							<div class="section-3-block-icon"></div>
						</div>
						<div class="section-3-block-content">
							<div class="section-3-block-body">
								<h3 class="section-3-title">Цена ниже <br> на 30 %</h3>
							</div>
						</div>
						<div class="section-3-text">
							По сравнению с возведением копитальных зданий цена на быстровозводимые ангары под ключ в среднем ниже на 30 % ;
						</div>
					</div>
				</div>
				<div class="col-md-4 mb-5">
					<div class="d-flex flex-wrap">
						<div class="section-3-block-icon-wrapper">
							<div class="section-3-block-icon"></div>
						</div>
						<div class="section-3-block-content">
							<div class="section-3-block-body">
								<h3 class="section-3-title">Лёгкость <br> конструкции</h3>
							</div>
						</div>
						<div class="section-3-text">
							За счёт лёгкости конструкции снижаются затраты на транспортровку элементов к месту работ ;
						</div>
					</div>
				</div>
				<div class="col-md-4 mb-5">
					<div class="d-flex flex-wrap">
						<div class="section-3-block-icon-wrapper">
							<div class="section-3-block-icon"></div>
						</div>
						<div class="section-3-block-content">
							<div class="section-3-block-body">
								<h3 class="section-3-title">Не требуется <br> фундамента</h3>
							</div>
						</div>
						<div class="section-3-text">
							Не требуется сооружение мощных фундаметов, некотрые варианты ангаров могут устанавливаться прямо на грунт;
						</div>
					</div>
				</div>
				<div class="col-md-4 mb-5">
					<div class="d-flex flex-wrap">
						<div class="section-3-block-icon-wrapper">
							<div class="section-3-block-icon"></div>
						</div>
						<div class="section-3-block-content">
							<div class="section-3-block-body">
								<h3 class="section-3-title">Пригодность <br>к любому климату !</h3>
							</div>
						</div>
						<div class="section-3-text">
							Ангары пригодны для эксплуатации в любых климатических условиях;
						</div>
					</div>
				</div>
				<div class="col-md-4 mb-5">
					<div class="d-flex flex-wrap">
						<div class="section-3-block-icon-wrapper">
							<div class="section-3-block-icon"></div>
						</div>
						<div class="section-3-block-content">
							<div class="section-3-block-body">
								<h3 class="section-3-title">Круглогодичное <br>строительтество</h3>
							</div>
						</div>
						<div class="section-3-text">
							Строительство может производиться в любое время года;
						</div>
					</div>
				</div>
			</div>

			<div class="section-breadcrumbs mb-5">
				<span class="mr-4">Материалы</span>
				<img src="@/assets/images/line.png" alt="1">
			</div>
			<div class="section-2-title">
				При стрроительстве ангаров применяются;
			</div>

			<hr class="mb-5">

			<div class="row">
				<div class="col-md-4 mb-5">
					<div class="d-flex">
						<div class="mr-3">
							<img src="@/assets/images/hangars/arched/arched_3_1.svg" alt="1">
						</div>
						<div>
							Стальные профлисты с цинковым покрытием  для монтажа каркаса.
						</div>
					</div>
				</div>
				<div class="col-md-4 mb-5">
					<div class="d-flex">
						<div class="mr-3">
							<img src="@/assets/images/hangars/arched/arched_3_2.svg" alt="1">
						</div>
						<div>
							Стальные профлисты для изготовления обшивки.
						</div>
					</div>
				</div>
				<div class="col-md-4 mb-5">
					<div class="d-flex">
						<div class="mr-3">
							<img src="@/assets/images/hangars/arched/arched_3_3.svg" alt="1">
						</div>
						<div>
							Различные типы негорючих утеплителей.
						</div>
					</div>
				</div>
			</div>

		</div>

		<div class="page-px bg-1 ">
			<div class="row">
				<div class="col-md-4">
					<div class="py-3">
						<h5 class="mb-3">Металлоконструкция:</h5>
						<p>
							Стальные профили с цинковым защитным покрытием
						</p>
					</div>
				</div>
				<div class="col-md-4 bg-2">
					<div class="py-3">
						<h5 class="mb-3">Обшивка:</h5>
						<p>
							- стальные профлисты <br>
							- тент <br>
							- сендвич-панели <br>
							- сайдинг
						</p>
					</div>
				</div>
				<div class="col-md-4">
					<div class="py-3">
						<h5 class="mb-3">Теплоизоляционный материал:</h5>
						<p>
							Сендвич-панели: <br>
							- пенополистирол <br>
							- понополиуретан (ППУ) <br>
							- базальт
						</p>
					</div>
				</div>
			</div>
		</div>

		<div class="row no-gutters">
			<div class="col-md-6">
				<div class="page-px my-5">
					<div class="media">
					<img src="@/assets/images/red_element.svg" alt="logo" class="mr-5" height="96">
					<div class="media-body">
						<p class="mb-5"><span class="ml-4"></span> 
							Для каркасного строительства ангаров и складов применяются ЧМК 
							и тонкостенные (до 3 мм) быстровозводимые конструкции из ЛСТК-профилей,
							которые производятся из специальной стали S350GDZn275.
						</p>

						<h4 class="mb-3 color-danger">Некопитальное сооружение (ангары)</h4>
						<table class="table">
							<thead>
								<tr>
									<th></th>
									<th>ЧМК</th>
									<th>ЛСТК</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>Ширина (Пролет)</td>
									<td>30 м</td>
									<td>24 м</td>
								</tr>
								<tr>
									<td>Шаг колонн</td>
									<td>6 м</td>
									<td>6 м</td>
								</tr>
							</tbody>
						</table>
					</div>
					</div>
				</div>
			</div>
			<div class="col-md-6">
				<div>
					<img src="@/assets/images/hangars/arched/screen1.png" alt="">
				</div>
			</div>
		</div>

		<div class="row no-gutters bg-1">
			<div class="col-md-6">
				<div class="page-px my-5">
					<div class="section-breadcrumbs mb-5">
						<span class="mr-4">Тип производимых ангаров</span>
						<img src="@/assets/images/line.png" alt="1">
					</div>
					<div class="section-2-title">
						Прямостенные ангары
					</div>
					<hr class="mb-5">

					<div class="row">
						<div class="col-md-6 mb-3">
							<img class="mb-3" src="@/assets/images/hangars/arched/arched_i_1.png">
							<p class="section-3-text">
								Не имеет ограничений по параметрам : ширина, длина, высота.
							</p>
						</div>
						<div class="col-md-6 mb-3">
							<img class="mb-3" src="@/assets/images/hangars/arched/arched_i_2.png">
							<p class="section-3-text">
								Не имеет ограничений по параметрам : ширина, длина, высота.
							</p>
						</div>
						<div class="col-md-6 mb-3">
							<img class="mb-3" src="@/assets/images/hangars/arched/arched_i_3.png">
							<p class="section-3-text">
								Не имеет ограничений по параметрам : ширина, длина, высота.
							</p>
						</div>
						<div class="col-md-6 mb-3">
							<img class="mb-3" src="@/assets/images/hangars/arched/arched_i_4.png">
							<p class="section-3-text">
								Не имеет ограничений по параметрам : ширина, длина, высота.
							</p>
						</div>
					</div>

					<button class="button-danger content-over-video-button mt-3">
						<div>Подробнее</div>
						<img src="@/assets/images/button_chevron.svg">
					</button>
				</div>
			</div>
			<div class="col-md-6">
				<img src="@/assets/images/hangars/arched/screen2.png">
			</div>
		</div>

		<div class="row no-gutters bg-1">
			<div class="col-md-6">
				<img src="@/assets/images/hangars/arched/screen3.png" alt="">
			</div>
			<div class="col-md-6">
				<div class="page-px my-5">
					<div class="section-breadcrumbs mb-5">
						<span class="mr-4">Тип производимых ангаров</span>
						<img src="@/assets/images/line.png" alt="1">
					</div>
					<div class="section-2-title">
						Арочные ангары
					</div>
					<hr class="mb-5">

					<div class="row">
						<div class="col-md-6 mb-3">
							<img class="mb-3" src="@/assets/images/hangars/arched/arched_i_5.png">
							<p class="section-3-text">
								Простота технологии сборки.
							</p>
						</div>
						<div class="col-md-6 mb-3">
							<img class="mb-3" src="@/assets/images/hangars/arched/arched_i_6.png">
							<p class="section-3-text">
								Конструкция допускает любое количество окон, возможность естественного освещения.
							</p>
						</div>
						<div class="col-md-6 mb-3">
							<img class="mb-3" src="@/assets/images/hangars/arched/arched_i_7.png">
							<p class="section-3-text">
							Уменьшенная нагрузка на фундамент.
							</p>
						</div>
					</div>

					<button class="button-danger content-over-video-button mt-3">
						<div>Подробнее</div>
						<img src="@/assets/images/button_chevron.svg">
					</button>
				</div>
			</div>
		</div>

		<div class="row no-gutters bg-1">
			<div class="col-md-6">
				<div class="page-px my-5">
					<div class="section-breadcrumbs mb-5">
						<span class="mr-4">Тип производимых ангаров</span>
						<img src="@/assets/images/line.png" alt="1">
					</div>
					<div class="section-2-title">
						Шатровые ангары
					</div>
					<hr class="mb-5">

					<div class="row">
						<div class="col-md-6 mb-3">
							<img class="mb-3" src="@/assets/images/hangars/arched/arched_i_8.png">
							<p class="section-3-text">
								«Конек» позвляет збежать скопления снега и наледи на крыше ангаров.
							</p>
						</div>
						<div class="col-md-6 mb-3">
							<img class="mb-3" src="@/assets/images/hangars/arched/arched_i_9.png">
							<p class="section-3-text">
								Максимальное использование всей площади пола.
							</p>
						</div>

						<div class="col-md-12">
							<div class="my-3">
								Каркас шатрового ангара - это закрепленные на фундаменте шатровые арки с шагом 3м. Сверху, поперек арок, закрепляются прогоны.
							</div>
						</div>
					</div>

					<button class="button-danger content-over-video-button mt-3">
						<div>Подробнее</div>
						<img src="@/assets/images/button_chevron.svg">
					</button>
				</div>
			</div>
			<div class="col-md-6">
				<img src="@/assets/images/hangars/arched/screen4.png" alt="">
			</div>
		</div>

		<div class="row no-gutters bg-1">
			<div class="col-md-6">
				<img src="@/assets/images/hangars/arched/screen5.png" alt="">
			</div>
			<div class="col-md-6">
				<div class="page-px my-5">
					<div class="section-breadcrumbs mb-5">
						<span class="mr-4">Тип производимых ангаров</span>
						<img src="@/assets/images/line.png" alt="1">
					</div>
					<div class="section-2-title">
						Полигональные ангары
					</div>
					<hr class="mb-5">

					<div class="my-3">
						Каркас шатрового ангара - это закрепленные на фундаменте шатровые арки с шагом 3м. Сверху, поперек арок, закрепляются прогоны.
					</div>
				</div>
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