const teamContainer = document.querySelector('.team__cards');
const teamCards = document.querySelectorAll('.team__card');
const teamCardLeftArrow = document.querySelector('.team__btn-left');
const teamCardRightArrow = document.querySelector('.team__btn-right');

const carouselSpeed = 3000;
let counter = 0;

let teamCardStyles = teamCards[0].currentStyle || window.getComputedStyle(teamCards[0]); 
let startingWindowWidth = window.innerWidth;



const handleTeamCardCarousel = () => {
    //Przerywamy slider w momencie gdy zmieniamy szerokość przeglądarki
    let windowWidth = window.innerWidth; //szerokośc okna strony
    if(startingWindowWidth != windowWidth){
        resetTeamCardInterval();
        startingWindowWidth = windowWidth;
    }else{
        counter++;
        changeTeamCard();
    }
}

// const handleTeamCardCarousel = () => {
//     counter++;
//     changeTeamCard();
// }

const changeTeamCard = () => {
    let windowWidth = window.innerWidth; //szerokośc okna strony
    let teamCardWidth = teamCards[0].clientWidth; //szerokosc jednego elementu
    let teamCardMargin = parseInt(teamCardStyles.marginLeft) + parseInt(teamCardStyles.marginRight); //suma lewego i prawego marginesu

    if(windowWidth < 768){
        if(counter < 0){
            counter = teamCards.length - 1;
        }else if(counter > teamCards.length -1){
            counter = 0;
        } 
    }else if(windowWidth < 992){
        if(counter < 0){
            counter = teamCards.length - 2;
        }else if(counter > teamCards.length - 2){
            counter = 0;
        }
    }else{
        if(counter < 0){
            counter = teamCards.length - 3;
        }else if(counter > teamCards.length - 3){
            counter = 0;
        }
    }

    teamContainer.style.transform = `translateX(${(teamCardWidth + teamCardMargin) * (-counter)}px)`
    // teamCards.forEach(card => {
    //     card.style.left = `${(teamCardWidth + teamCardMargin) * (-counter)}px`;
    // });
}

const nextTeamCard = () => {
    counter++;
    resetTeamCardInterval();
}

const previousTeamCard = () => {
    counter--;
    resetTeamCardInterval();
}

let startTeamCardCarousel = setInterval(handleTeamCardCarousel,carouselSpeed);

const resetTeamCardInterval = () => {
    clearInterval(startTeamCardCarousel);
    changeTeamCard();
    startTeamCardCarousel = setInterval(handleTeamCardCarousel,carouselSpeed);
}




teamCardLeftArrow.addEventListener('click', previousTeamCard);
teamCardRightArrow.addEventListener('click', nextTeamCard);
window.addEventListener('resize', changeTeamCard);