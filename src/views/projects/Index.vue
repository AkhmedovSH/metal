<template>
	<div class="mt96">
		<div class="page-px py-5">
			<div class="d-flex flex-wrap">
				<div class="breadcrumb-last">
					Проекты
				</div>
			</div>
		</div>

		<div class="position-relative projects_bg">
			<div class="about-img-overlay"></div>
			<div class="position-absolute page-px about-img-content">
				<div class="media mb-5">
					<img src="@/assets/images/red_element.svg" alt="logo" class="mr-5 d-none-mobile" height="96">
					<div class="media-body">
						<h1>Проекты</h1>
					</div>
				</div>
				<p class="color-2">
					Компания Avant Metal Group зарекомендовала себя как надежного и <br>
					ответственного производителя, в продукции которого вы можете быть <br>
					уверены. 
				</p>
			</div>
		</div>

		<div class="row no-gutters">
			<div class="col-lg-8 col-md-8 bg-5">
				<div class="page-px pt-5 position-relative">
					<img class="triangle" src="@/assets/images/triangle.png" alt="1">
					<div class="section-breadcrumbs mb-5">
						<span>Уникальные здания и сооружения</span> <span class="mx-3">/</span> Металлоконструкции
					</div>
					<div class="section-2-title">
						Высокотехнологичные и дуступные решения в области металлоконструкций и стройматериалов.
					</div>

					<hr class="mb-5">

					<div class="section-2-description mb-5">
						<p class="mb-5 opacity05">
							<span class="ml-4"></span> 
							Мы стремимся к тому, чтобы все наши решения и технологии были максимально полезны на практике и делали жизнь лучше.  <br>
							<span class="ml-4"></span> 
							Производственный комплекс компании позволяет предложить такие виды услуг как строительство сооружений любой
							сложности из ЧМК и ЛСТК, возведение сооружений из систем Мархи, а также широкий спектр продуктов и
							услуг применяемых в строительстве больших высотных зданий.
						</p>
					</div>

					<button class="button-danger content-over-video-button mt-3">
						<div>Подробнее</div>
						<img src="@/assets/images/button_chevron.svg">
					</button>
				</div>
			</div>

			<div class="col-lg-4 col-md-4">
				<div>
					<img src="@/assets/images/projects/image1.png" alt="1">
				</div>
			</div>
		</div>

		<div class="row no-gutters">
			<div class="col-lg-6">
				<div>
					<img src="@/assets/images/projects/image2.png" alt="1">
				</div>
			</div>

			<div class="col-lg-6 bg-5">
				<div class="page-px pt-5 position-relative">
					<img class="triangle" src="@/assets/images/triangle.png" alt="1">
					<div class="section-breadcrumbs mb-5">
						Уникальные здания и сооружения
					</div>
					<div class="section-2-title">
						«Здание-лотос» The Lotus Building
					</div>
					<p>г. Ташкент. Шайхантахурский район.</p>

					<hr class="mb-5">

					<div class="section-2-description mb-5">
						<p class="mb-5 opacity05">
							<span class="ml-4"></span> 
							По задумке австралийских архитекторов, «Здание-лотос» ,состоящее из трех частей, символизирует три этапа в жизни цветка лотоса.
						</p>
					</div>

					<button class="button-danger content-over-video-button mt-3">
						<div>Подробнее</div>
						<img src="@/assets/images/button_chevron.svg">
					</button>
				</div>
			</div>
		</div>

		<div class="row no-gutters">
			<div class="col-lg-8 col-md-8 bg-5">
				<div class="page-px pt-5 position-relative">
					<img class="triangle" src="@/assets/images/triangle.png" alt="1">
					<div class="section-breadcrumbs mb-5">
						<span>Уникальные здания и сооружения</span> <span class="mx-3">/</span> Металлоконструкции
					</div>
					<div class="section-2-title">
						Высокотехнологичные и дуступные решения в области металлоконструкций и стройматериалов.
					</div>

					<hr class="mb-5">

					<div class="section-2-description mb-5">
						<p class="mb-5 opacity05">
							<span class="ml-4"></span> 
							Мы стремимся к тому, чтобы все наши решения и технологии были максимально полезны на практике и делали жизнь лучше.  <br>
							<span class="ml-4"></span> 
							Производственный комплекс компании позволяет предложить такие виды услуг как строительство сооружений любой
							сложности из ЧМК и ЛСТК, возведение сооружений из систем Мархи, а также широкий спектр продуктов и
							услуг применяемых в строительстве больших высотных зданий.
						</p>
					</div>

					<button class="button-danger content-over-video-button mt-3">
						<div>Подробнее</div>
						<img src="@/assets/images/button_chevron.svg">
					</button>
				</div>
			</div>

			<div class="col-lg-4 col-md-4">
				<div>
					<img src="@/assets/images/projects/image3.png" alt="1">
				</div>
			</div>
		</div>

		<news></news>

	</div>
</template>

<script>
import News from '@/components/News.vue'
export default {
	components: { News },
}
</script>