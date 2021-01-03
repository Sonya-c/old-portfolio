const MODAL = document.getElementById("modal-img");
const MODAl_IMG = document.getElementById("modal-img-image");

function closeModal() {
    MODAL.style.display = "none";
}

function openModal(img) {
    MODAl_IMG.src = img.src;
    MODAL.style.display = "block";
}