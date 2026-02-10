// Coucou toi qui regarde dans le code
//
//
// /‾‾‾‾‾\ /‾‾‾‾‾] [‾‾‾‾‾‾‾‾] |‾‾‾‾‾] |‾‾‾‾‾\ |‾‾‾‾‾\ |‾| /‾/
// | |‾| | | |‾‾‾   ‾‾|  |‾‾  | |‾‾‾  |     | |     | | |/ /
// | | | | | |        |  |    |  ___] |     / |     / |  _/
// | |_| | | |___     |  |    | |___  | |\ \  | |\ \  | |
// \_____/ \_____]    |__|    |_____] |_| \_\ |_| \_\ |_|
// MADE ON EARTH BY HUMANS

const browserSelection = document.getElementById("selection_browser");
const browserMenus = document.getElementById("browser_list");
const browserSections = document.getElementsByClassName("browser_section");
const browserInput = document.getElementById("browser_input");

let browserSelected;

const signalInput = document.getElementById("signal_input");

const fileInput = document.getElementById("file_input");
const fileNameElement = document.getElementById("file_name");
const recommand = document.getElementById("recommand_file");
const cross = document.getElementById("cross");

const sendButton = document.getElementById("send_button");

let fileLink = "";


browserSelection.addEventListener("click", function() {
    if (browserMenus.style.display == "block") {
        browserMenus.style.display = "none"
    } else {
        browserMenus.style.display = "block"
    }
})

window.addEventListener('click', event => {
    if ( !( browserMenus.contains(event.target) || browserSelection.contains(event.target) ) ) {
        browserMenus.style.display = "none";
    }
})

for (const element of browserSections) {
    element.addEventListener('click', function() {
        browserSelected = this.id
        browserMenus.style.display = "none";
        actualiseBrowser()
    })
}

function actualiseBrowser() {
    let browserLogo = browserSelection.children[1]
    let browserTxt = browserSelection.children[2]

    browserLogo.style.display = "block";
    browserLogo.src = `../../source/${browserSelected}.svg`
    browserTxt.style.color = "#fff"
    browserTxt.innerHTML = browserSelected.charAt(0).toUpperCase() + browserSelected.slice(1)
    browserSelection.style.background = "#00000000"

    console.log(browserSelected, browserInput)
    if (browserSelected == "autre") {
        browserInput.style.display = "block";
    } else {
        browserInput.style.display = "none";
    }
}


signalInput.addEventListener("input", function() {
    signalInput.style.height = "auto"
    signalInput.style.height = signalInput.scrollHeight + "px";
})

fileInput.addEventListener('click', function() {
    alert("❌\nMalheureusement la gestion des fichiers n'est pas disponible pour le moment.\nSi une fenetre s'ouvre vous pouvez la fermer, le fichier que vous donnerez ne sera pas traité.")
})

// fileInput.addEventListener('change', function() {
//     const files = fileInput.files;

//     recommand.style.display = "none";
//     cross.style.display = "flex";

//     if(files.length > 0){
//         const fileName = files[0].name;
//         fileNameElement.innerHTML = fileName;
//     } else {
//         fileNameElement.innerHTML = 'Aucun fichier séléctionné';
//     };
// });

cross.addEventListener('click', function() {
    recommand.style.display = "block";
    cross.style.display = "none";

    fileNameElement.innerHTML = "Ajouter un screenshot";
})


sendButton.addEventListener('click', function(){
    sendMail()
});

function sendMail() {
    if (browserSelected) {
        let choosenBrowser = browserSelected.charAt(0).toUpperCase() + browserSelected.slice(1);
        if (browserSelected == "autre") {
            choosenBrowser = browserInput.value + " (Autre)" ;
        };

        let params = {
            browser : choosenBrowser + ` [${navigator.userAgent}]`,
            message : signalInput.value,
            link : "",
            extension : "",
        }

        emailjs.send("service_wcaz37m","template_pbivz0k",params).then(
            alert("✅ Signalement envoyé ✅\nMerci pour votre retour :)"),
            window.location.reload()
        );
    } else {
        alert("Vous avez laissez un champ vide, merci de bien tout remplir pour envoyer le signalement.")
    }
}  