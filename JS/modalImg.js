const MODAL = document.getElementById("modal-img");
const MODAl_IMG = document.getElementById("modal-img-image");
const MODAL_PRE = document.getElementById("modal-pre");
const MODAL_NEXT = document.getElementById("modal-next");
const MODAL_TEXT = document.getElementById("modal-img-text");
const BODY = document.body;

function closeModal() {
    MODAL.style.display = "none";
    BODY.style.overflow = "auto";
}

function openModal(element) {
    let img = (element.children)[0];
    let previus = element.previousElementSibling;
    let next = element.nextElementSibling;

    if (previus != null) {
        MODAL_PRE.onclick = function () { openModal(previus) };
        MODAL_PRE.style.visibility = "visible";
    } else { MODAL_PRE.style.visibility = "hidden"; }

    if (next != null) {
        MODAL_NEXT.onclick = function () { openModal(next) };
        MODAL_NEXT.style.visibility = "visible";
    } else { MODAL_NEXT.style.visibility = "hidden"; }

    MODAl_IMG.src = img.src;
    MODAl_IMG.alt = img.alt;
    MODAL_TEXT.innerHTML = img.alt;
    MODAL.style.display = "block";
    BODY.style.overflow = "hidden";
}
// filter: 
document.onkeydown = function (event) {
    if (event.key == "Escape" && MODAL.style.display == "block") closeModal();
}