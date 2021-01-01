const MENU_ELEMENTS = document.getElementsByClassName("nav-text")

function openMenuBar(button) {
    document.getElementById("menuButton").classList.toggle("spin");

    for (let MENU_ELEMENT of MENU_ELEMENTS) {
        if (MENU_ELEMENT.style.display == "" || MENU_ELEMENT.style.display == "none")
            MENU_ELEMENT.style.display = "inline";
        else
            MENU_ELEMENT.style.display = "none";
    }

}