//slider in Portfolio.html
let slider_img = document.querySelector('.slider-img');
let images = ['port1.jpg', 'port2.jpg', 'port3.jpg', 'port4.jpg'];
let i = 0; // current index

function Back(){
    if(i <= 0) i = images.length;
    i--;
    return setImg();
};

function Next(){
    if(i >= images.length - 1) i = -1; i++;
    return setImg();
};

function setImg() {
    return slider_img.setAttribute('src', images[i]);
};