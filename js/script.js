
let curretSlide = 0;
const slideItem = document.querySelector('.slide-item')
const totalSlides = document.querySelectorAll('.slide-item').length;
const slideContent = document.querySelector('.slider-content');
const btnPrev = document.querySelector('.slider-control-left');
const btnNext = document.querySelector('.slider-control-right');

slideContent.style.width = 
    `calc(100vw * ${totalSlides})`;

function goPrev(){
    curretSlide--;

    if(curretSlide < 0){
        curretSlide = totalSlides - 1;
    }
    updateMargin();
}

function goNext(){
    curretSlide++;

    if(curretSlide > (totalSlides - 1)){
        curretSlide = 0;
    }
    updateMargin();
}

function updateMargin(){
    
    let newMargin = (curretSlide * slideItem.clientWidth);

    slideContent.style.marginLeft = `-${newMargin}px`;
}

btnPrev.addEventListener('click', goPrev);
btnNext.addEventListener('click', goNext);
setInterval(goNext, 5000)
