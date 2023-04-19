let Description = document.getElementsByClassName("Description")
let Link = document.getElementById("Link")
let space = "<br>"
let ynovref = "https://github.com/SlayzerZ/Ynov-Rentiel"
let Matchstick = new Image (1000,500); Matchstick.src = '../assets/matchstick.jpg'
let Hangman = new Image (1000,500); Hangman.src = '../assets/pictures/hangman.gif'
let HangmanWeb = new Image (1000,600); HangmanWeb.src = '../assets/pictures/hangman-web.gif'
let MusicShop = new Image (1000,600); MusicShop.src = '../assets/pictures/music-shop.gif'
let Groupie1 = new Image (1000,500); Groupie1.src = '../assets/pictures/groupie-tracker1.gif'
let Groupie2 = new Image (1000,500); Groupie2.src = '../assets/pictures/groupie-tracker2.gif'
let Groupie3 = new Image (1000,500); Groupie3.src = '../assets/pictures/groupie-tracker3.gif'
let GetThemAll = new Image (1000,600); GetThemAll.src = '../assets/pictures/get-them-all.gif'
let BuildBrick = new Image (1000,600); BuildBrick.src = '../assets/pictures/brick.gif'
let Pimp = new Image (1000,600); Pimp.src = '../assets/pictures/pimp.gif'
let Keycodes = new Image (1000,600); Keycodes.src = '../assets/pictures/keycodes.gif'
let Sortable1 = new Image (1000,600); Sortable1.src = '../assets/pictures/sortable1.gif'
let Sortable2 = new Image (1000,600); Sortable2.src = '../assets/pictures/sortable2.gif'
let Boxxle = new Image (1100,600); Boxxle.src = '../assets/pictures/boxxle.gif'
Description[0].appendChild(Matchstick)
Description[1].appendChild(Hangman)
Description[2].appendChild(HangmanWeb)
Description[3].appendChild(MusicShop)
Description[4].appendChild(Groupie1)
Description[4].appendChild(Groupie2)
Description[4].appendChild(Groupie3)
Description[5].appendChild(GetThemAll)
Description[6].appendChild(BuildBrick)
Description[7].appendChild(Pimp)
Description[8].appendChild(Keycodes)
Description[9].appendChild(Sortable1)
Description[9].appendChild(Sortable2)
Description[10].appendChild(Boxxle)
Link.innerHTML ="<b>" + "Lien des projets : " + "</b>" + space + "<a href=" +ynovref+ "> Ici</a>"
// hj
// L