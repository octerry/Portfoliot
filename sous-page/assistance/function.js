const fileInput = document.getElementById("file_input")
const fileNameElement = document.getElementById("file_name")
const recommand = document.getElementById("recommand_file")
const cross = document.getElementById("cross");

const browserSelection = document.getElementById("selection_browser")
const browserMenus = document.getElementById("browser_list")
const browserSections = document.getElementsByClassName("browser_section")

let selected;

fileInput.addEventListener('change', function() {
    const files = fileInput.files;

    recommand.style.display = "none";
    cross.style.display = "block";

    if(files.length > 0){
        const fileName = files[0].name;
        fileNameElement.innerHTML = fileName;
    } else {
        fileNameElement.innerHTML = 'Aucun fichier séléctionné';
    };
});

cross.addEventListener('click', function() {
    recommand.style.display = "block";
    cross.style.display = "none";

    fileNameElement.innerHTML = "Ajouter un screenshot";
})

browserSelection.addEventListener("click", function() {
    console.log(browserMenus)
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
        selected = this.id
        console.log(selected)
        browserMenus.style.display = "none";
        actualiseBrowser()
    })
}

function actualiseBrowser() {
    let browserTxt = browserSelection.children[1]
    browserTxt.innerHTML = selected
}