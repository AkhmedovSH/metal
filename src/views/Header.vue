<template>
	<header class="bg-f2">
		<div class="d-flex">
			<div class="header-logo-wrapper mr-4">
				<div class="vertical-center">
					<router-link :to="{ name: 'home' }">
						<img src="@/assets/images/header_logo.svg" alt="logo" width="56" height="56">
					</router-link>
				</div>
			</div>
			<div class="header-navbar-nav bg-f2">
				<ul class="header-navbar-ul h-100">
					<li class="vertical-center header-navbar-ul-li">
						<a class="parent-link" href="#">Услуги</a>
						<ul class="child-ul child-ul-big">
							<li><a class="child-link" href="#">Конструкторское бюро</a></li>
							<li><a class="child-link" href="#">Здание на проектирование</a></li>
						</ul>
					</li>
					<li class="vertical-center header-navbar-ul-li">
						<a class="parent-link" href="#">Производство</a>
						<ul class="child-ul child-ul-big">
							<li><a class="child-link" href="#">Уникальные здания</a></li>
							<li><a class="child-link" href="#">Мархи</a></li>
							<li>
								<router-link class="child-link" :to="{ name: 'hangars' }">
									Ангары
								</router-link>
							</li>
							<hr class="my-1">
							<li>
								<router-link class="ml-3 child-link-inner" :to="{ name: 'archedHangars' }">
									Арочные ангары
								</router-link>
							</li>
							<li><a class="ml-3 child-link-inner" href="#">Прямостенные ангары</a></li>
							<li><a class="ml-3 child-link-inner" href="#">Шатровые ангары</a></li>
							<li><a class="ml-3 child-link-inner" href="#">Полигональные ангары</a></li>
							<li><a class="child-link" href="#">Промышленные здания</a></li>
							<li><a class="child-link" href="#">Строительные краны</a></li>
							<li><a class="ml-3 child-link-inner" href="#">Козловые краны</a></li>
							<li><a class="ml-3 child-link-inner" href="#">Мостовые краны</a></li>
							<li><a class="child-link" href="#">Металлопрокат</a></li>
							<li><a class="ml-3 child-link-inner" href="#">Двутавр</a></li>
							<li><a class="ml-3 child-link-inner" href="#">Тавр</a></li>
							<li><a class="ml-3 child-link-inner" href="#">Швеллер</a></li>
							<li><a class="ml-3 child-link-inner" href="#">Уголок</a></li>
							<li><a class="ml-3 child-link-inner" href="#">Листовой материал</a></li>
							<li><a class="ml-3 child-link-inner" href="#">Гофрированная балка</a></li>
						</ul>
					</li>
					<li class="vertical-center"><a class="parent-link" href="#">Партнеры</a></li>
					<li class="vertical-center"><a class="parent-link" href="#">Проекты</a></li>
					<li class="vertical-center header-navbar-ul-li">
						<a class="parent-link" href="#">О нас</a>
						<ul class="child-ul child-ul-big">
							<li>
								<router-link class="child-link" :to="{ name: 'about' }">
									О компании
								</router-link>
							<li>
								<router-link class="child-link" :to="{ name: 'productionComplex' }">
									Производтвенный комплекс
								</router-link>
							</li>
						</ul>
					</li>
					<li class="vertical-center"><a class="parent-link" href="#">Новости</a></li>
					<li class="vertical-center">
						<router-link class="parent-link" :to="{ name: 'contact' }">
							Контакты
						</router-link>
					</li>
				</ul>
				<div class="header-navbar-buttons">
					<div class="header-toggle-menu" @click="showMenu = !showMenu">
						<div class="d-flex justify-content-center h-100">
							<div class="vertical-center">
								<img src="@/assets/images/general/menu_icon.png" alt="icon_search" width="32">
							</div>
						</div>
					</div>
					<div class="d-flex justify-content-center header-search-block">
						<div class="vertical-center ">
							<img src="@/assets/images/Icon_search.svg" alt="icon_search" width="32">
						</div>
					</div>
					<div class="header-recall-btn cursor-pointer px-5">
						<div class="color-fb text-center">Заказать звонок</div>
					</div>
				</div>
			</div>
		</div>
		<div class="mobile-menu" :style="{ display:showMenu ? 'block' : 'none' }">
			<div class="mobile-menu-wrapper">
				<div class="p-3">
					<div class="d-flex">
						<div class="w-50">
							<div class="parent-link">
								О нас
							</div>
							<ul class="child-ul">
								<li><a class="child-link" href="#">О компании</a></li>
								<li><a class="child-link" href="#">Производтвенный <br> комплекс</a></li>
							</ul>
							<div class="parent-link">
								Услуги
							</div>
							<ul class="child-ul">
								<li><a class="child-link" href="#">Конструкторское бюро</a></li>
								<li><a class="child-link" href="#">Задание на  <br> проектирование</a></li>
							</ul>
							<div class="py-2">
								<a class="parent-link" href="#">Партнеры</a>
							</div>
							<div class="py-2">
							<a class="parent-link" href="#">Проекты</a>
							</div>
							<div class="py-2">
								<a class="parent-link" href="#">Новости</a>
							</div>
							<div class="py-2">
								<a class="parent-link" href="#">контакты</a>
							</div>
							<p class="position-absolute m-0 mobile-menu-info">
								По вопросам партнерства <br>
								+998 71 203 00 00 <br>
								info@akfagroup.com
							</p>
						</div>
						<div class="w-50">
							<a class="parent-link" href="">Производство</a>
							<ul class="child-ul">
								<li><a class="child-link" href="#">Уникальные здания</a></li>
								<li><a class="child-link" href="#">Мархи</a></li>
								<li>
									<a class="child-link">Ангары</a>
									<hr class="my-1">
									<ul class="child-ul">
										<li><a href="#" class="ml-3 child-link-inner">Арочные ангары</a></li>
										<li><a href="#" class="ml-3 child-link-inner">Прямостенные ангары</a></li>
										<li><a href="#" class="ml-3 child-link-inner">Шатровые ангары</a></li>
										<li><a href="#" class="ml-3 child-link-inner">Полигональные ангары</a></li>
									</ul>
								</li>
							</ul>
							
							<ul class="child-ul">
								<li><a href="#" class="child-link">Промышленные здания</a></li>
								<li>
									<a href="#" class="child-link">Строительные краны</a>
									<ul class="child-ul">
										<li><a href="#" class="ml-3 child-link-inner">Козловые краны</a></li>
										<li><a href="#" class="ml-3 child-link-inner">Мостовые краны</a></li>
									</ul>
								</li>
							</ul>

							<ul class="child-ul">
								<li>
									<a href="#" class="child-link">Металлопрокат</a>
									<ul class="child-ul">
										<li><a href="#" class="ml-3 child-link-inner">Двутавр</a></li>
										<li><a href="#" class="ml-3 child-link-inner">Тавр</a></li>
										<li><a href="#" class="ml-3 child-link-inner">Швеллер</a></li>
										<li><a href="#" class="ml-3 child-link-inner">Уголок</a></li>
										<li><a href="#" class="ml-3 child-link-inner">Листовой материал</a></li>
										<li><a href="#" class="ml-3 child-link-inner">Гофрированная балка</a></li>
									</ul>
								</li>
							</ul>
						</div>
				</div>
				<hr>
				<div class="p-3">
					<div class="d-flex flex-wrap">
						<div class="footer-icon">
							<img src="@/assets/images/general/facebook-w.svg" width="16">
						</div>
						<div class="footer-icon">
							<img src="@/assets/images/general/telegram-w.svg" width="16">
						</div>
						<div class="footer-icon">
							<img src="@/assets/images/general/instagram-w.svg" width="16">
						</div>
					</div>
				</div>
				</div>
			</div>
		</div>
	</header>
</template>

<script>
export default {
  name: 'App',
	data() {
		return {
			showMenu: false,
		}
	}
}
</script>