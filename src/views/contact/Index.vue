<template>
	<div class="mt96">
		<div class="page-px py-5 bg-2">
			<div class="section-breadcrumbs">
				Контакты
			</div>
		</div>

		<div class="position-relative">
			<div class="about-img-overlay"></div>
			<img src="@/assets/images/contact/1.png">
			<div class="position-absolute page-px about-img-content">
				<div class="media mb-5">
					<img src="@/assets/images/red_element.svg" alt="logo" class="mr-5" height="96">
					<div class="media-body">
						<h1>Контакты</h1>
					</div>
				</div>
			</div>
		</div>

		<div class="page-px py-5">

			<div class="section-2-title mb-3">
				<h2 class="main-color mb-0">
					Заполните форму обратной связи и мы <br> оперативно свяжемся с вами !
				</h2>
			</div>
			<hr>

			<div class="container-fluid">
				<div class="row">
					<div class="col-md-12 mb-3">
						<div class="text-default">
							Поля отмеченные (*) оязательные для заполнения !
						</div>
					</div>

					<div class="col-md-6">
						<input type="text" class="form-control mb-3" placeholder="Ваше Имя" autocomplete="off">
						<input type="text" class="form-control" placeholder="Ваше Фамилия" autocomplete="off">

						<hr class="my-4">

						<input type="text" class="form-control mb-3" placeholder="Ваш телефон" autocomplete="off">
					</div>
					<div class="col-md-6">
						<textarea class="form-control" cols="30" rows="3"></textarea>
						<hr>
						<button class="btn btn-danger w-100">Заказать звонок</button>
					</div>
				</div>
			</div>
		</div>

		<div class="container-fluid p-0">
			<div class="row no-gutters">
				<div class="col-md-6 bg-4 p-5">
					<img class="ml-3 mb-4" src="@/assets/images/about/about_line.svg">
					<p class="color-2 ml-4 mb-4">
						г. Ташкент, ул. Катта-Хирмонтепа, 1.
					</p>

					<img class="ml-3 mb-4" src="@/assets/images/about/about_line.svg">
					<p class="color-2 ml-4 mb-4">
						info@avantmetalgroup.com
					</p>

					<img class="ml-3 mb-4" src="@/assets/images/about/about_line.svg">
					<p class="color-2 ml-4">
						По вопросам партнерства <br>
						+998 71 203 00 00
					</p>
				</div>
				<div class="col-md-6">
					<iframe class="iframe-map w-100" 
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23982.167647406324!2d69.25026835707436!3d41.29208909931861!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b2020878009%3A0x90f60f5cf233ff60!2z0JrQvtGB0LzQvtC90LDQstGC0L7Qsg!5e0!3m2!1sru!2s!4v1616501613333!5m2!1sru!2s"
						height="500" style="border:0;" allowfullscreen="" loading="lazy">
					</iframe>
				</div>
			</div>
		</div>
		
	</div>
</template>
