function initializeModalOutClick() {
    window.addEventListener("click", clickOutOfModal);
}

function clickOutOfModal(evt) {
    let mod = document.querySelector(".modal.open");
    let parentElem = mod.parentElement;
    let modBtn = parentElem.querySelector("button");
    let modContent = mod.querySelector(".modal-content");

    if (evt.target !== modContent && evt.target !== modBtn) {
        mod.classList.remove("open");
    }
}

function showModal(modalID) {
    new Promise((resolve, reject) => {
        window.removeEventListener("click", clickOutOfModal);
        console.log("here");
        resolve();
    }).then(() => {
        console.log("there");
        let mods = document.querySelectorAll(".modal");
        let mod = document.querySelector('#' + modalID);
        mods.forEach(m => {
            m.classList.remove("open");
        });
    
        mod.classList.add("open");
    }).then(() => {
        setTimeout( () => {
            initializeModalOutClick();
        }, 500);
    }).catch((e) => {
        console.log(e);
    });

}