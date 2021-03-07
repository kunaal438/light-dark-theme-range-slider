const slider = document.querySelector('.slider');
const img = document.querySelector('.right-container .img');
const html = document.querySelector('html');

slider.addEventListener('input', () => {
    let value = slider.value;

    img.style.transform = `translate(-50%, -50%) rotate(${value}deg)`;

    if(value >= 180){
        html.setAttribute('theme', 'dark');
    } else{
        html.setAttribute('theme', 'light');
    }
})