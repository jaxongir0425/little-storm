var slidePage1 = document.getElementById('slide-page-1');
var slidePage2 = document.getElementById('slide-page-2');
var slidePage3 = document.getElementById('slide-page-3');
var nextSlide = document.getElementById('nextSlide');

slidePage1.style = 'opacity: 1; z-index: 3; transform: translateY(0) scale(1);';
slidePage2.style = 'opacity: 0; z-index: 2; transform: translateY(10%) scale(0.9);';
slidePage3.style = 'opacity: 0; z-index: 1; transform: translateY(20%) scale(0.8);';

function next() {
    for (i=0;i<100;i++){
        if (nextSlide.style.zIndex === '4') {
            slidePage1.style = 'opacity: 0; z-index: 3; transform: translateY(-20%) scale(1.2);  transition: 0.5s;';
            slidePage2.style = 'opacity: 1; z-index: 3; transform: translateY(0) scale(1);  transition: 0.5s;';
            slidePage3.style = 'opacity: 0; z-index: 2; transform: translateY(10%) scale(0.9);  transition: 0.5s;';
            nextSlide.style.zIndex = 5;

        } else if (nextSlide.style.zIndex === '5') {
            slidePage1.style = 'opacity: 0; z-index: 2; transform: translateY(10%) scale(0.9);  transition: 0.5s;';
            slidePage2.style = 'opacity: 0; z-index: 3; transform: translateY(-20%) scale(1.2);  transition: 0.5s;';
            slidePage3.style = 'opacity: 1; z-index: 3; transform: translateY(0) scale(1);  transition: 0.5s;';
            nextSlide.style.zIndex = 6
        } else {
            slidePage1.style = 'opacity: 1; z-index: 3; transform: translateY(0) scale(1);  transition: 0.5s;';
            slidePage2.style = 'opacity: 0; z-index: 2; transform: translateY(10%) scale(0.9);  transition: 0.5s;';
            slidePage3.style = 'opacity: 0; z-index: 3; transform: translateY(-20%) scale(1.2);  transition: 0.5s;';
            nextSlide.style.zIndex = 4
        }

    }

}

