const HEADER = (document.getElementsByTagName("header"))[0];
const MAIN = (document.getElementsByTagName("main"))[0];
const FOOTER = (document.getElementsByTagName("footer"))[0];

const MENU = (document.getElementsByTagName("nav"))[0];
const MENU_ELEMENTS = document.getElementsByClassName("nav-text")
const MENU_BUTTON = document.getElementById("menuButton");

const desktopMedia = window.matchMedia("(min-width: 768px)");

MENU_BUTTON.style.transform = "rotate(360deg)";

function openMenuBar(button) {
    for (let MENU_ELEMENT of MENU_ELEMENTS) {
        if (MENU_ELEMENT.style.display == "" || MENU_ELEMENT.style.display == "none") {
            MENU_ELEMENT.style.display = "inline-block";
            MENU_BUTTON.style.transform = "rotate(180deg)";
        } else {
            MENU_ELEMENT.style.display = "none";
            MENU_BUTTON.style.transform = "rotate(360deg)";
        }
    }
    menuResponsive();
}

// This function change the width and the margin of the footer and the main section acording to menu with
function menuResponsive() {
    let menuWidth = MENU.getBoundingClientRect().width;
    if (desktopMedia.matches) {
        HEADER.style.marginLeft = menuWidth + "px";
        HEADER.style.width = "calc( 100% - " + menuWidth + "px";
        MAIN.style.marginLeft = menuWidth + "px";
        MAIN.style.width = "calc( 100% - " + menuWidth + "px";
        FOOTER.style.marginLeft = menuWidth + "px";
        FOOTER.style.width = "calc( 100% - " + menuWidth + "px";
    } else {
        HEADER.style.marginLeft = "0px";
        HEADER.style.width = "100%";
        MAIN.style.marginLeft = "0px";
        MAIN.style.width = "100%";
        FOOTER.style.marginLeft = "0px";
        FOOTER.style.width = "100%";
    }
}