// Coucou toi qui regarde dans le code


// /‾‾‾‾‾\ /‾‾‾‾‾] [‾‾‾‾‾‾‾‾] |‾‾‾‾‾] |‾‾‾‾‾\ |‾‾‾‾‾\ |‾| /‾/
// | |‾| | | |‾‾‾   ‾‾|  |‾‾  | |‾‾‾  |     | |     | | |/ /
// | | | | | |        |  |    |  ___] |     / |     / |  _/
// | |_| | | |___     |  |    | |___  | |\ \  | |\ \  | |
// \_____/ \_____]    |__|    |_____] |_| \_\ |_| \_\ |_|
// MADE ON EARTH BY HUMANS

//DEFINITION DES FONCTIONS
let all = document.querySelectorAll('*')

let nightModeCheck = document.getElementById("darkModeToggle-state")
let changeThisLogo = document.getElementsByClassName('logoToChange')

//BOUTON MODE SOMBRE
// D'abord on mets le darkmode si la personne a un darkmode sur son navigateur
const isDarkMode = () => window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
nightModeCheck.checked = isDarkMode()
changeDarkmode()

nightModeCheck.addEventListener('click', function() {
    changeDarkmode()
})

function changeDarkmode() {
    let condition = nightModeCheck.checked

    if (condition) {
        for (const element of all) {
            element.classList.add('dark')
        }
        for (const element of changeThisLogo) {
            let elementURL = element.src.toString()
            if (!elementURL.includes('Green')) {
                elementURL = elementURL.replace('.svg','Green.svg')
                element.src = elementURL
            }
        }
    } else {
        for (const element of all) {
            element.classList.remove('dark')
        }
        for (const element of changeThisLogo) {
            let elementURL = element.src.toString()
            if (elementURL.includes('Green')) {
                elementURL = elementURL.replace('Green','')
                element.src = elementURL
            }
        }
    }
}