const slides = document.querySelectorAll('.slide')

for (const slide of slides) {
    slide.addEventListener('click', () =>{
        clearActiveClasses()
        slide.classList.add('active')
    })
}

function clearActiveClasses(){
    slides.forEach((slide) => {
        slide.classList.remove('active')
    })
}

const hideButton = document.getElementById('hideButton');
const container = document.querySelector('.container');

hideButton.addEventListener('click', function () {
    if (container.classList.contains('hidden')) {
        clearActiveClasses();
    }
    container.classList.toggle('hidden');
}); 