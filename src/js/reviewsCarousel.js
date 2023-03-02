const reviewsContainer = document.querySelector('.reviews__cards');
const reviewsCards = document.querySelectorAll('.reviews__card');
const btnLeft = document.querySelector('.reviews__btn-left');
const btnRight = document.querySelector('.reviews__btn-right');

let reviewsCardStyle = reviewsCards[0].currentStyle || window.getComputedStyle(reviewsCards[0]);
let reviewsCardMarginLeft = parseInt(reviewsCardStyle.marginLeft);
let reviewsCardMarginRight = parseInt(reviewsCardStyle.marginRight);

let startWindowWidth = window.innerWidth;


let shift = 0;
const sliderSpeed = 3000;


const handleRewievSlider = () => {
    shift++;
    changeReviewCard();
}


const changeReviewCard = () => {
    let windowWidth = window.innerWidth; //szerokośc okna strony
    let reviewsCardWidth = reviewsCards[0].clientWidth; // szerokosć elementu
    if(windowWidth < 768){
        if(shift < 0){
            shift = reviewsCards.length -1;
        }else if(shift > reviewsCards.length - 1){
            shift = 0;
        }
    }else if(windowWidth < 992){
        if(shift < 0){
            shift = reviewsCards.length -2;
        }else if(shift > reviewsCards.length - 2){
            shift = 0;
        }
    }else{
        if(shift < 0){
            shift = reviewsCards.length -3;
        }else if(shift > reviewsCards.length - 3){
            shift = 0;
        }
    }
    reviewsContainer.style.transform = `translateX(${-(reviewsCardWidth + reviewsCardMarginLeft + reviewsCardMarginRight) * shift}px)`;
}


const previousCard = () => {
    shift--;
    resetSliderInterval()
}

const nextCard = () => {
    shift++;
    resetSliderInterval()
}

let startReviewSlider =  setInterval(handleRewievSlider, sliderSpeed);

const resetSliderInterval = () =>{
    clearInterval(startReviewSlider);
    changeReviewCard();
    startReviewSlider = setInterval(handleRewievSlider, sliderSpeed);
}

btnLeft.addEventListener('click', previousCard);
btnRight.addEventListener('click', nextCard);
window.addEventListener('scroll', resetSliderInterval); // zatrzmany slider po zmianie szerokości
window.addEventListener('scroll', changeReviewCard); // po zmianie szerokości należy ponownie dokonać obliczeń (ponowne wywołanie funkcji)