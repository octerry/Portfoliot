// Coucou toi qui regarde dans le code


// /‾‾‾‾‾\ /‾‾‾‾‾] [‾‾‾‾‾‾‾‾] |‾‾‾‾‾] |‾‾‾‾‾\ |‾‾‾‾‾\ |‾| /‾/
// | |‾| | | |‾‾‾   ‾‾|  |‾‾  | |‾‾‾  |     | |     | | |/ /
// | | | | | |        |  |    |  ___] |     / |     / |  _/
// | |_| | | |___     |  |    | |___  | |\ \  | |\ \  | |
// \_____/ \_____]    |__|    |_____] |_| \_\ |_| \_\ |_|
// MADE ON EARTH BY HUMANS

//DEFINITION DES FONCTIONS
const indexMenu = document.getElementById("indexMenu")
let indexAcceuil = document.getElementById('indexAcceuil')
let indexCode = document.getElementById("indexMenuCode")
let indexArt = document.getElementById("indexMenuArt")
let indexRobot = document.getElementById("indexMenuRobot")
let indexPro = document.getElementById("indexMenuPro")


//MENU FLOTTANT
//OUVERTURE DU MENU FLOTTANT
function indexHideMenu () {
    var menu = document.getElementById('indexMenu')
    let isHide = (menu.style.marginTop == "0px")

    if (isHide) {
        menu.style.marginTop = "-100vh";
        document.body.classList.add("remove-scrolling"); 
    }
    else {
        menu.style.marginTop = "0";
        document.body.classList.remove("remove-scrolling"); 
    }

    console.log(document.body.classList)
}


//ANIMATION DU FOND DU MENU FLOTTANT
indexAcceuil.addEventListener("mouseenter", () => {
    indexMenu.style.backgroundImage = 'linear-gradient(0.25turn, #00000080, #00000000), url("source/optimizedIllustrationAcceuil.png")';
    indexMenu.style.backgroundPosition = "left 30% top";
    indexMenu.style.backgroundSize = 'cover';
    indexMenu.style.transition = 'background-image 2s';
    let img = new Image(); //à partir de là c'est pour avoir une image le temps que l'image en 4K charge
    img.src = "source/illustrationAcceuil.jpeg";
    img.onload = () => {
        indexMenu.style.backgroundImage = 'linear-gradient(0.25turn, #000000B0, #00000000), url("source/illustrationAcceuil.jpeg")';
        indexMenu.classList.add("loaded");
    }
})
indexAcceuil.addEventListener("mouseleave", () => {
        indexMenu.style.background = '#00000070'
        indexMenu.style.transition = 'ease 300ms';
})

indexCode.addEventListener("mouseenter", () => {
    indexMenu.style.backgroundImage = 'linear-gradient(0.25turn, #00000080, #00000000), url("source/optimizedIllustrationCode.png")';
    indexMenu.style.backgroundPosition = "right 30% top";
    indexMenu.style.backgroundSize = 'cover';
    indexMenu.style.transition = 'background-image 2s';
    let img = new Image(); //à partir de là c'est pour avoir une image le temps que l'image en 4K charge
    img.src = "source/illustrationCode.jpeg";
    img.onload = () => {
        indexMenu.style.backgroundImage = 'linear-gradient(0.25turn, #000000B0, #00000000), url("source/illustrationCode.jpeg")';
        indexMenu.classList.add("loaded");
    }
})
indexCode.addEventListener("mouseleave", () => {
        indexMenu.style.background = '#00000070'
        indexMenu.style.transition = 'ease 300ms';
})

indexRobot.addEventListener("mouseenter", () => {
    indexMenu.style.backgroundImage = 'linear-gradient(0.25turn, #000000B0, #00000000), url("source/optimizedIllustrationRobot.png")'
    indexMenu.style.backgroundPosition = "right 30% bottom"
    indexMenu.style.backgroundSize = 'cover'
    indexMenu.style.transition = 'background-image 2s';
    let img = new Image(); //à partir de là c'est pour avoir une image le temps que l'image en 4K charge
    img.src = "source/illustrationRobot.jpeg";
    img.onload = () => {
        indexMenu.style.backgroundImage = 'linear-gradient(0.25turn, #000000B0, #00000000), url("source/illustrationRobot.jpeg")';
        indexMenu.classList.add("loaded");
    }
})
indexRobot.addEventListener("mouseleave", () => {
        indexMenu.style.background = '#00000070'
        indexMenu.style.transition = 'ease 300ms';
})

indexArt.addEventListener("mouseenter", () => {
    indexMenu.style.backgroundImage = 'linear-gradient(0.25turn, #000000F0, #00000000), url("source/optimizedIllustrationArt.png")'
    indexMenu.style.backgroundPosition = "right 38% bottom"
    indexMenu.style.backgroundSize = 'cover'
    indexMenu.style.transition = 'background-image 2s';
    let img = new Image(); //à partir de là c'est pour avoir une image le temps que l'image en 4K charge
    img.src = "source/illustrationArt.jpeg";
    img.onload = () => {
        indexMenu.style.backgroundImage = 'linear-gradient(0.25turn, #000000F0, #00000000), url("source/illustrationArt.jpeg")';
        indexMenu.classList.add("loaded");
    }
})
indexArt.addEventListener("mouseleave", () => {
        indexMenu.style.background = '#00000070'
        indexMenu.style.transition = 'ease 300ms';
})

indexPro.addEventListener("mouseenter", () => {
    indexMenu.style.backgroundImage = 'linear-gradient(0.25turn, #000000B0, #00000000), url("source/optimizedIllustrationPro.png")'
    indexMenu.style.backgroundPosition = "right 50% bottom"
    indexMenu.style.backgroundSize = 'cover'
    indexMenu.style.transition = 'background-image 2s';
    let img = new Image(); //à partir de là c'est pour avoir une image le temps que l'image en 4K charge
    img.src = "source/illustrationPro.jpeg";
    img.onload = () => {
        indexMenu.style.backgroundImage = 'linear-gradient(0.25turn, #000000B0, #00000000), url("source/illustrationPro.jpeg")';
        indexMenu.classList.add("loaded");
    }
})
indexPro.addEventListener("mouseleave", () => {
        indexMenu.style.background = '#00000070'
        indexMenu.style.transition = 'ease 300ms';
})