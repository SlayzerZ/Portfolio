let x = 400;
let y = 250;
let speed = 1;
let Top = false;
let Left = false;
let dvd = document.querySelectorAll('#dvd');

function generateColor(){
    let color = '#'
    return color += Math.random().toString(16).slice(2, 8).toUpperCase();
}

function move(){
    let height = window.innerHeight -200;
    let width = window.innerWidth -300;
    if (y >= height){
        Top = true;
        dvd[1].style.fill = generateColor();
    } else if (y <= -80){
        Top = false;
        dvd[1].style.fill = generateColor();
    }
    if (Top){
        y -= speed
    } else {
        y += speed
    }
    if (x >= width){
        Left = true;
        dvd[1].style.fill = generateColor();
    } else if (x <= 0){
        Left = false;
        dvd[1].style.fill = generateColor();
    }
    if (Left){
        x -= speed
    } else {
        x += speed
    }
    dvd[1].style.top = `${y}px`;
    dvd[1].style.left = `${x}px`;
    window.requestAnimationFrame(move)
}
window.requestAnimationFrame(move)