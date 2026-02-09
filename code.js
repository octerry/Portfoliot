// Coucou toi qui regarde dans le code


// /‾‾‾‾‾\ /‾‾‾‾‾] [‾‾‾‾‾‾‾‾] |‾‾‾‾‾] |‾‾‾‾‾\ |‾‾‾‾‾\ |‾| /‾/
// | |‾| | | |‾‾‾   ‾‾|  |‾‾  | |‾‾‾  |     | |     | | |/ /
// | | | | | |        |  |    |  ___] |     / |     / |  _/
// | |_| | | |___     |  |    | |___  | |\ \  | |\ \  | |
// \_____/ \_____]    |__|    |_____] |_| \_\ |_| \_\ |_|
// MADE ON EARTH BY HUMANS

const codeCursor = document.getElementById('code_up_cursor');

const webButton = document.getElementById('web_button');
const pythonButton = document.getElementById('python_button');
const autreButton = document.getElementById('autre_button');

const preambuleUpButton = document.getElementById('preambule_div');
const webUpButton = document.getElementById('web_div');
const pythonUpButton = document.getElementById('python_div');
const autreUpButton = document.getElementById('autre_div');

const preambulePageContent = document.getElementById('preambule_page_content');
const webPageContent = document.getElementById('web_page_content');
const pythonPageContent = document.getElementById('python_page_content');
const autrePageContent = document.getElementById('autre_page_content');

const acceuilButton = document.getElementById('acceuil_button');
const acceuilMenu = document.getElementById('acceuil_menu');
const codeButton = document.getElementById('code_button');
const codeMenu = document.getElementById('code_menu');
const robotiqueButton = document.getElementById('robotique_button');
const robotiqueMenu = document.getElementById('robotique_menu');
const artButton = document.getElementById('art_button');
const artMenu = document.getElementById('art_menu');
const plusButton = document.getElementById('plus_button');
const plusMenu = document.getElementById('plus_menu');


preambuleUpButton.addEventListener('click', function() { goToPreambule() });

webButton.addEventListener('click', function() { goToWeb() });
webUpButton.addEventListener('click', function() { goToWeb() });

pythonButton.addEventListener('click', function() { goToPython() })
pythonUpButton.addEventListener('click', function() { goToPython() })

autreButton.addEventListener('click', function() { goToAutre() })
autreUpButton.addEventListener('click', function() { goToAutre() })

function goToPreambule() {
    preambulePageContent.style.display = "block";
    webPageContent.style.display = "none";
    pythonPageContent.style.display = "none";
    autrePageContent.style.display = "none";
    codeCursor.style.marginLeft = "clamp(3vh,30px,3vw)"
    codeCursor.style.width = "clamp(13vh,130px,13vw)"
}

function goToWeb() {
    preambulePageContent.style.display = "none";
    webPageContent.style.display = "block";
    pythonPageContent.style.display = "none";
    autrePageContent.style.display = "none";
    codeCursor.style.marginLeft = "clamp(21vh,210px,21vw)"
    codeCursor.style.width = "clamp(8vh,80px,8vw)"
}

function goToPython() {
    preambulePageContent.style.display = "none";
    webPageContent.style.display = "none";
    pythonPageContent.style.display = "block";
    autrePageContent.style.display = "none";
    codeCursor.style.marginLeft = "clamp(34vh,340px,34vw)"
    codeCursor.style.width = "clamp(10vh,100px,10vw)"
}

function goToAutre() {
    preambulePageContent.style.display = "none";
    webPageContent.style.display = "none";
    pythonPageContent.style.display = "none";
    autrePageContent.style.display = "block";
    codeCursor.style.marginLeft = "clamp(49vh,490px,49vw)"
    codeCursor.style.width = "clamp(9vh,90px,9vw)"
}

window.addEventListener('click', event => {
    if ( !(acceuilMenu.contains(event.target) || 
        acceuilButton.contains(event.target) ||
        codeMenu.contains(event.target) || 
        codeButton.contains(event.target) ||
        robotiqueMenu.contains(event.target) || 
        robotiqueButton.contains(event.target) ||
        artMenu.contains(event.target) || 
        artButton.contains(event.target) ||
        plusMenu.contains(event.target)||
        plusButton.contains(event.target))) {
            plusMenu.style.display ="none";
            acceuilMenu.style.display = "none";
            codeMenu.style.display = "none";
            robotiqueMenu.style.display = "none";
            artMenu.style.display = "none";
    }
})

acceuilButton.addEventListener('click', function() {
    if (acceuilMenu.style.display == "block") {
        acceuilMenu.style.display = "none";
    } else {
        acceuilMenu.style.display = "block";

        codeMenu.style.display = "none";
        robotiqueMenu.style.display = "none";
        artMenu.style.display = "none";
        plusMenu.style.display = "none";
    }
}) 

codeButton.addEventListener('click', function() {
    if (codeMenu.style.display == "block") {
        codeMenu.style.display = "none";
    } else {
        codeMenu.style.display = "block";

        acceuilMenu.style.display = "none";
        robotiqueMenu.style.display = "none";
        artMenu.style.display = "none";
        plusMenu.style.display = "none";
    }
}) 

robotiqueButton.addEventListener('click', function() {
    if (robotiqueMenu.style.display == "block") {
        robotiqueMenu.style.display = "none";
    } else {
        robotiqueMenu.style.display = "block";

        acceuilMenu.style.display = "none";
        codeMenu.style.display = "none";
        artMenu.style.display = "none";
        plusMenu.style.display = "none";
    }
}) 

artButton.addEventListener('click', function() {
    if (artMenu.style.display == "block") {
        artMenu.style.display = "none";
    } else {
        artMenu.style.display = "block";

        acceuilMenu.style.display = "none";
        codeMenu.style.display = "none";
        robotiqueMenu.style.display = "none";
        plusMenu.style.display = "none";
    }
}) 

plusButton.addEventListener('click', function() {
    if (plusMenu.style.display == "block") {
        plusMenu.style.display = "none";
    } else {
        plusMenu.style.display = "block";

        acceuilMenu.style.display = "none";
        codeMenu.style.display = "none";
        robotiqueMenu.style.display = "none";
        artMenu.style.display = "none";
    }
}) 