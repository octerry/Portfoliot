const fileInput = document.getElementById("file_input")
const fileNameElement = document.getElementById("file_name")

fileInput.addEventListener('change', function() {
    const files = fileInput.files;
    if(files.length > 0){
        const fileName = files [0].name;
        fileNameElement.innerHTML = fileName
    } else {
        fileNameElement.innerHTML = 'Aucun fichier séléctionné';
    };
});