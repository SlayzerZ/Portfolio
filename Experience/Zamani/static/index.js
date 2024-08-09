let dropdown = document.querySelector('.dropdown');
let dropbtn = dropdown.querySelector('.dropbtn');
let content = dropdown.querySelector('.content');

console.log(content.className)

dropbtn.addEventListener('click', function () {
    if (content.style.display == "block") {
        content.style.display = "none"
    } else {
        content.style.display = "block"
    }
})

window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        content.style.display = "none"
    }
}