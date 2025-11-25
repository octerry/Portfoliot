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
const indexMenu = document.getElementById("indexMenu")

let indexCode = document.getElementById("indexMenuCode")
indexCode.addEventListener("mouseenter", () => {
    indexMenu.style.backgroundImage = 'url("source/illustrationCode.jpeg")'
    indexMenu.style.backgroundSize = 'cover'
    indexMenu.style.transition = 'background-image 2s'
})

indexCode.addEventListener("mouseleave", () => {
        indexMenu.style.background = '#00000070'
})
