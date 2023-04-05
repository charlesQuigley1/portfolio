function initializeModalOutClick() {
    window.addEventListener("click", clickOutOfModal);
}

function clickOutOfModal(evt) {
    let mod = document.querySelector(".modal.open");
    let modContent = mod.querySelector(".modal-content");

    if (evt.target !== modContent && evt !== "buttonClick" && !evt.target.classList.contains('inModal')) {
        mod.classList.remove("open");
    }
}

function showModal(modalID) {
    new Promise((resolve, reject) => {
        window.removeEventListener("click", clickOutOfModal);
        let selectedModal = document.querySelector('#' + modalID);
        let modalData = selectedModal.querySelector(".modal-data");
        let modalPlaceholder = document.querySelector(".modal-dynamic-data");
        modalPlaceholder.innerHTML = modalData.innerHTML;
        resolve();
    }).then(() => {
        let mod = document.querySelector(".modal");
        mod.classList.add("open");
    }).then(() => {
        setTimeout( () => {
            initializeModalOutClick();
        }, 500);
    }).catch((e) => {
        console.log(e);
    });

}