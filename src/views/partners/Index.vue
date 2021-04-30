<template>
	<div class="mt96">
		<div class="page-px py-5">
			<div class="d-flex flex-wrap">
				<div class="breadcrumb-last">
					Партнеры
				</div>
			</div>
		</div>

		<div class="position-relative partners_bg">
			<div class="about-img-overlay"></div>
			<div class="position-absolute page-px about-img-content">
				<div class="media mb-5">
					<img src="@/assets/images/red_element.svg" alt="logo" class="mr-5 d-none-mobile" height="96">
					<div class="media-body">
						<h1>Партнеры</h1>
					</div>
				</div>
				<p class="color-2">
					На площади комплекса собрано оборудования мировых лидеров в <br>
					области металлообработки .
				</p>
			</div>
		</div>

		<div class="page-px py-5 bg-2 position-relative">
			<img src="@/assets/images/section_2_figure.svg" alt="1" class="section-2-left-bg" width="200" style="top:0">
			<div class="row">
				<div class="col-md-6">
					<hr>
					<p class="section-3-text mb-4 px-3">
						<span class="ml-4"></span>
						Avant Metal Group тесно сотрудничает с различными локальными и лидирующими 
						зарубежными компаниями в таких странах как Корея, Турция, Китай, Россия.
					</p>
				</div>
				<div class="col-md-6">
					<hr>
					<p class="section-3-text px-3">
						<span class="ml-4"></span> 
						На площади комплекса собрано оборудования мировых лидеров в области металлообработки .
					</p>
				</div>
			</div>

			<hr class="my-5">

			<div class="row mb-5">
				<div class="col-md-6">
					<div class="media">
						<img src="@/assets/images/red_element.svg" alt="logo" class="mr-5" height="96">
						<div class="media-body">
							<p class="color-1"><span class="ml-4"></span>
							На площади комплекса размещено оборудование мировых лидеров в области металлообработки, таких как: 
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="row no-gutters">
			<div class="col-lg-6 col-md-12 bg-5">
				<div class="d-flex flex-wrap justify-content-around page-px my-5">
					<img src="@/assets/images/partners/image1.png">
					<div class="w-50">
						<h3>Voortman steel <br> machinery</h3>
						<p>(Нидерланды)</p>
						<hr>
						<p>Автоматизированная линия по <br> обработке металлопроката.</p>
					</div>
				</div>
				<div class="position-relative">
					<div class="img-overlay position-absolute"></div>
					<img src="@/assets/images/partners/image3.png">
				</div>
				<div class="d-flex flex-wrap justify-content-around page-px my-5">
					<img src="@/assets/images/partners/image4.png">
					<div class="w-50">
						<h3>GG Group. HGG Pipe profiling equipment. </h3>
						<p>(Нидерланды)</p>
						<hr>
						<p>Линия по 3D профилированию труб. </p>
					</div>
				</div>
			</div>
			<div class="col-lg-6 col-md-12">
				<div class="position-relative">
					<div class="img-overlay position-absolute"></div>
					<img src="@/assets/images/partners/image2.png">
				</div>
				<div class="d-flex flex-wrap justify-content-around page-px my-5">
					<img src="@/assets/images/partners/image6.png">
					<div class="w-50">
						<h3>NUOVA C.M.M.</h3>
						<p>(Италия)</p>
						<hr>
						<p>Линия производства сварной балки. </p>
					</div>
				</div>
				<div class="position-relative">
					<div class="img-overlay position-absolute"></div>
					<img src="@/assets/images/partners/image5.png">
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