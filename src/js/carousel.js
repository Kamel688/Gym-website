const reviewsBoxContainer = document.querySelector('.reviews__boxes');
const reviewsBoxes = document.querySelectorAll('.reviews__box');

const leftArrow = document.querySelector('.reviews__btn-left');
const rightArrow = document.querySelector('.reviews__btn-right');

let carouselSpeed = 3000; //szybkośc przesuwania kart
let index = 0;

const reviewBoxStyles = reviewsBoxes[0].currentStyle || window.getComputedStyle(reviewsBoxes[0]); //wszystkie style elementu
let startingWidth = window.innerWidth;



//Funkcja do obsługi karuzeli
const handleCarousel = () => {
    //Przerywamy slider w momencie gdy zmieniamy szerokość przeglądarki
    let currentWidth = window.innerWidth;
    if(startingWidth != currentWidth){
        resetInterval();
        startingWidth = currentWidth;
    }else{
        index++;
        changeReviewCard();
    }
}

//Funcka, która przesuwa karty
const changeReviewCard = () => {
    let windowWidth = window.innerWidth; //szerokość okna strony
    let reviewBoxWidth = reviewsBoxes[0].offsetWidth; //szerokość jednego elementu
    let reviewBoxMargin = parseInt(reviewBoxStyles.marginLeft) + parseInt(reviewBoxStyles.marginRight); //margines lewy i prawy
    if(windowWidth < 992){ //jedna karta
        if(index < 0){
            index = reviewsBoxes.length -1;
        }else if(index > reviewsBoxes.length -1){
            index = 0;
        }
        console.log(index);
    }else{ //dwie karty
        if(index < 0){
            index = reviewsBoxes.length - 2;
        }else if(index > reviewsBoxes.length - 2){
            index = 0;
        }
    }
    reviewsBoxContainer.style.transform = `translateX(${(reviewBoxWidth + reviewBoxMargin) * (-index)}px)`;
}

let startCarousel = setInterval(handleCarousel, carouselSpeed);

const handleLeftArrow = () => {
    index--;
    resetInterval();
}

const handleRightArrow = () => {
    index++;
    resetInterval();
}

const resetInterval = () => {
    clearInterval(startCarousel);
    startCarousel = setInterval(handleCarousel, carouselSpeed);
    changeReviewCard();
}

leftArrow.addEventListener('click', handleLeftArrow);
rightArrow.addEventListener('click', handleRightArrow);
window.addEventListener('resize', changeReviewCard);