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