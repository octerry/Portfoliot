// Coucou toi qui regarde dans le code


// /‾‾‾‾‾\ /‾‾‾‾‾] [‾‾‾‾‾‾‾‾] |‾‾‾‾‾] |‾‾‾‾‾\ |‾‾‾‾‾\ |‾| /‾/
// | |‾| | | |‾‾‾   ‾‾|  |‾‾  | |‾‾‾  |     | |     | | |/ /
// | | | | | |        |  |    |  ___] |     / |     / |  _/
// | |_| | | |___     |  |    | |___  | |\ \  | |\ \  | |
// \_____/ \_____]    |__|    |_____] |_| \_\ |_| \_\ |_|
// MADE ON EARTH BY HUMANS

const headerButton = document.getElementsByClassName('header_button')
const acceuilButton = headerButton[0];
const codeButton = headerButton[1];
const robotButton = headerButton[2];
const plusButton = headerButton[3];

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
}

function goToWeb() {
    preambulePageContent.style.display = "none";
    webPageContent.style.display = "block";
    pythonPageContent.style.display = "none";
    autrePageContent.style.display = "none";
}

function goToPython() {
    preambulePageContent.style.display = "none";
    webPageContent.style.display = "none";
    pythonPageContent.style.display = "block";
    autrePageContent.style.display = "none";
}

function goToAutre() {
    preambulePageContent.style.display = "none";
    webPageContent.style.display = "none";
    pythonPageContent.style.display = "none";
    autrePageContent.style.display = "block";
}