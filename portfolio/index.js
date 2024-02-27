let Description = document.getElementsByClassName("Description")
let Description2 = document.getElementsByClassName("Description2")
let Projet = document.getElementsByClassName("projet")
let Link = document.getElementById("Link")
let space = "<br>"
let Separator = `<fieldset class="pose"></fieldset>`
let Separator2 = `<hr class="pose"></hr>`
let ynovref = "https://github.com/SlayzerZ/Ynov-Rentiel"
let Matchstick = new Image(1000, 500); Matchstick.src = './assets/pictures/matchstick.jpg'
let Hangman = new Image(1000, 500); Hangman.src = './assets/pictures/hangman.gif'
let HangmanWeb = new Image(1000, 600); HangmanWeb.src = './assets/pictures/hangman-web.gif'
let MusicShop = new Image(1000, 600); MusicShop.src = './assets/pictures/music-shop.gif'
let Groupie1 = new Image(1000, 500); Groupie1.src = './assets/pictures/groupie-tracker1.gif'
let Groupie2 = new Image(1000, 500); Groupie2.src = './assets/pictures/groupie-tracker2.gif'
let Groupie3 = new Image(1000, 500); Groupie3.src = './assets/pictures/groupie-tracker3.gif'
let GetThemAll = new Image(1000, 600); GetThemAll.src = './assets/pictures/get-them-all.gif'
let BuildBrick = new Image(1000, 600); BuildBrick.src = './assets/pictures/brick.gif'
let Pimp = new Image(1000, 600); Pimp.src = './assets/pictures/pimp.gif'
let Keycodes = new Image(1000, 600); Keycodes.src = './assets/pictures/keycodes.gif'
let Sortable1 = new Image(1000, 600); Sortable1.src = './assets/pictures/sortable1.gif'
let Sortable2 = new Image(1000, 600); Sortable2.src = './assets/pictures/sortable2.gif'
let Boxxle = new Image(1100, 600); Boxxle.src = './assets/pictures/boxxle.gif'
let Simon = new Image(1100, 600); Simon.src = './assets/pictures/simon.gif'
let Forum1 = new Image(1000, 600); Forum1.src = './assets/pictures/forum1.gif'
let Forum2 = new Image(1000, 600); Forum2.src = './assets/pictures/forum2.gif'
let To_do1 = new Image(1000, 600); To_do1.src = './assets/pictures/to-do1.gif'
let To_do2 = new Image(1000, 600); To_do2.src = './assets/pictures/to-do2.gif'
let To_do3 = new Image(1000, 600); To_do3.src = './assets/pictures/to-do3.gif'
let To_do4 = new Image(1000, 600); To_do4.src = './assets/pictures/to-do4.gif'
let Tamago1 = new Image(800, 1000); Tamago1.src = './assets/pictures/tamago1.gif'
let Tamago2 = new Image(800, 1000); Tamago2.src = './assets/pictures/tamago2.gif'
let Tamago3 = new Image(800, 1000); Tamago3.src = './assets/pictures/tamago3.gif'
let Dactylo = new Image(1000, 600); Dactylo.src = './assets/pictures/dactylo.gif'
let Php1 = new Image(1000, 600); Php1.src = './assets/pictures/php1.gif'
let Php2 = new Image(1000, 600); Php2.src = './assets/pictures/php2.gif'
let ProtoLaunch = new Image(1000, 600); ProtoLaunch.src = './assets/pictures/launch.jpg'
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
Description[11].appendChild(Simon)
Description[12].appendChild(To_do1)
Description[12].appendChild(To_do2)
Description[12].appendChild(To_do3)
Description[12].appendChild(To_do4)
Description[13].appendChild(Tamago1)
Description[13].appendChild(Tamago2)
Description[13].appendChild(Tamago3)
Description[14].appendChild(Dactylo)
Description[15].appendChild(Forum1)
Description[15].appendChild(Forum2)
Description[16].appendChild(Php1)
Description[16].appendChild(Php2)
Description[17].appendChild(ProtoLaunch)
Link.innerHTML = "<b>" + "Lien des projets : " + "</b>" + space + "<a href=" + ynovref + "> Ici</a>"

let To_do = new Image(1000, 600); To_do.src = './assets/pictures/to-do.gif'
let DVD = new Image(1000, 600); DVD.src = './assets/pictures/dvd.gif'
let Currency = new Image(1000, 600); Currency.src = './assets/pictures/currency.gif'
Description2[0].appendChild(Currency)
Description2[1].appendChild(DVD)
Description2[2].appendChild(To_do)

//console.log(Description[14])
for (i = 0; i < Projet.length; i++) {
  Projet[i].innerHTML = Projet[i].innerHTML + Separator2
}