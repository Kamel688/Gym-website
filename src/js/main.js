const burgerBtn = document.querySelector(".burger-btn");
const bars = document.querySelector(".burger-btn__bars");
const navbar = document.querySelector(".navbar");
const navbarList = document.querySelector(".navbar__list");
const navbarItems = document.querySelectorAll(".navbar__list-item"); //wersja mobilna
const menuItems = document.querySelectorAll(".navbar__desktop-list-item");
const scrollspySections = document.querySelectorAll('section');
const year = document.querySelector(".footer__logo-year");
const header = document.querySelector('.header');


//Functions


const handleScrollspy = () => {
	if(document.body.classList.contains('main-page')){
		const sections = []; // jesli jestesmy na samym poczatku scrollowania to wszystkie sekcje zostaną umieszczone i zostanie wzięty zawsze 1 element tablicy.
		scrollspySections.forEach(section => {
			if((window.scrollY <= section.offsetTop + section.offsetHeight - navbar.offsetHeight) && (window.scrollY >= header.offsetTop + header.offsetHeight - navbar.offsetHeight)){
				sections.push(section);
	
				const navbarLinks = document.querySelectorAll(`[href*="${sections[0].id}"]`); //pobranie linku dla wersji mobilnej i desktopowej
				const activeLinkMobile = navbarLinks[0]; //link wersji mobilnej
				const activeLink = navbarLinks[1]; //link wersji desktopowej
	
				navbarItems.forEach(navbarItem => navbarItem.classList.remove('active'));//usunięcie klasy active dla wszystkich linkow nawigacji wersji mobilnej
				menuItems.forEach(menuItem => menuItem.classList.remove('active')); //usunięcie klasy active dla wszystkich linkow nawigacji
	
				activeLinkMobile.classList.add('active');
				activeLink.classList.add('active'); //dodanie klasy aby podświetlić aktywny link
				
			}else{
				navbarItems.forEach(navbarItem => navbarItem.classList.remove('active'));
				menuItems.forEach(menuItem => menuItem.classList.remove('active')); //usunięcie podświetlenia z wszystkich linkow
				navbarItems[0].classList.add('active');
				menuItems[0].classList.add('active');  //dodanie podswietlenia dla linkow home
			}
		})
	}
}

const handleNav = () => {
	navbarList.classList.toggle("show-navbar");
	bars.classList.toggle("show-xmark");
};

const scrollNavbar = () => {
	const currentLocation = window.scrollY;

	if (currentLocation > 111) {
		navbar.classList.add("navbar-color");
	} else {
		navbar.classList.remove("navbar-color");
	}
};

const handleYear = () => {
	const currentDate = new Date();
	year.textContent = currentDate.getFullYear();
};



handleYear();

burgerBtn.addEventListener("click", handleNav);
addEventListener("scroll", scrollNavbar);

navbarItems.forEach((item) => {
	item.addEventListener("click", handleNav);
});

window.addEventListener('scroll', handleScrollspy);