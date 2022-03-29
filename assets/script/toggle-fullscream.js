function fullscream() {
    let conatiner = document.querySelector('#main');
    let toggleBtn = document.querySelector('#fullscream-emoji');

    if (conatiner.classList.contains("fullscream")) {
        conatiner.classList.remove("fullscream");

        toggleBtn.classList.add("fa-expand");
        toggleBtn.classList.remove("fa-compress");
    } else {
        conatiner.classList.add("fullscream");

        toggleBtn.classList.add("fa-compress");
        toggleBtn.classList.remove("fa-expand");
    }
}