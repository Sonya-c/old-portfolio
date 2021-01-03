const MODAL = document.getElementById("modal-img");
const MODAl_IMG = document.getElementById("modal-img-image");
const BODY = document.body;

function closeModal() {
    MODAL.style.display = "none";
    BODY.style.overflow = "auto";
}

function openModal(img) {
    MODAl_IMG.src = img.src;
    MODAL.style.display = "block";
    BODY.style.overflow = "hidden";
}