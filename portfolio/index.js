let Description = document.getElementsByClassName("Description")
let Link = document.getElementsByClassName("Link")
let Matchstick = new Image (800,500); Matchstick.src = '../assets/pictures/matchstick.jpg'
let Hangman = new Image (900,500); Hangman.src = '../assets/pictures/hangman.gif'
let HangmanWeb = new Image (1000,600); HangmanWeb.src = '../assets/pictures/hangman-web.gif'
let Groupie1 = new Image (900,500); Groupie1.src = '../assets/pictures/groupie-tracker1.gif'
let Groupie2 = new Image (900,500); Groupie2.src = '../assets/pictures/groupie-tracker2.gif'
let Groupie3 = new Image (900,500); Groupie3.src = '../assets/pictures/groupie-tracker3.gif'
let Sortable1 = new Image (900,500); Sortable1.src = '../assets/pictures/sortable1.gif'
let Sortable2 = new Image (900,500); Sortable2.src = '../assets/pictures/sortable2.gif'
let Boxxle = new Image (1100,600); Boxxle.src = '../assets/pictures/boxxle.gif'
console.log(Description)
Description[0].appendChild(Matchstick)
Description[1].appendChild(Hangman)
Description[2].appendChild(HangmanWeb)
Description[4].appendChild(Groupie1)
Description[4].appendChild(Groupie2)
Description[4].appendChild(Groupie3)
Description[9].appendChild(Sortable1)
Description[9].appendChild(Sortable2)
Description[10].appendChild(Boxxle)