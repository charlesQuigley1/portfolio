function clickOutOfModal() {
    let mod = document.querySelector(".modal.open");
    mod.classList.remove("open");
}

function showModal(modalID) {
    let selectedModal = document.querySelector('#' + modalID);
    let modalData = selectedModal.querySelector(".modal-data");
    let modalPlaceholder = document.querySelector(".modal-dynamic-data");
    modalPlaceholder.innerHTML = modalData.innerHTML;

    let modal_background = modalPlaceholder.querySelector(".modal-background-color");

    let mod = document.querySelector(".modal");
    mod.style.backgroundColor = modal_background.innerText;
    mod.classList.add("open");
}

function openVideo(id) {
    let ytPlayer = document.querySelector(".youtubePlayer");
    let ytIFrame = ytPlayer.querySelector("iframe");
    let vidUrl = document.querySelector(".modal").querySelector(".youtube-data");
    ytIFrame.src = vidUrl.innerText;
    ytPlayer.classList.add("openVideo");
}

function closeVideo(id) {
    let ytPlayer = document.querySelector(".youtubePlayer");
    let ytIFrame = ytPlayer.querySelector("iframe");
    ytIFrame.src = "";
    ytPlayer.classList.remove("openVideo");
}


function showModalImg() {
    let imgBtn = document.querySelector(".modal .imgBtn");
    let img = document.querySelector(".modal img");

    img.classList.toggle('modalImgOpen');
    imgBtn.classList.toggle('modalImgOpen');

 }
