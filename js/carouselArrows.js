
let carouselObjs = [];

function initializeCarouselScroll() {
    let carousels = document.querySelectorAll(".carousel-wrapper");

    carousels.forEach(carousel => {
        let viewport = carousel.querySelector(".carousel-viewport");
        let carouselObj = {
            "id": viewport.id,
            "leftBtn": carousel.querySelector(".left-carousel-btn"),
            "rightBtn": carousel.querySelector(".right-carousel-btn"),
            "wrapper": carousel,
            "viewport": viewport
        }

        carouselObj.leftBtn.classList.add("invisible");

        carouselObjs.push(carouselObj);

        carousel.addEventListener("scroll", () => {
            let maxScroll = carousel.scrollWidth - carousel.clientWidth;
            let leeway = 5;
            
            if (carousel.scrollLeft === 0) {
                carouselObj.leftBtn.classList.add("invisible");
            }
            else if (carousel.scrollLeft >= maxScroll - leeway) {
                carouselObj.rightBtn.classList.add("invisible");
            }
            else {
                carouselObj.leftBtn.classList.remove("invisible");
                carouselObj.rightBtn.classList.remove("invisible");
            }

        });
    });
}

function cNext(cID) {
    let carouselObj = null;
    for (let i = 0; i < carouselObjs.length; i++) {
        if (carouselObjs[i].id === cID) {
            carouselObj = carouselObjs[i];
            break;
        }
    }

    carouselObj.wrapper.scrollLeft += calculateScroll(carouselObj, cID);  
}

function cPrev(cID) {
    let carouselObj = null;
    for (let i = 0; i < carouselObjs.length; i++) {
        if (carouselObjs[i].id === cID) {
            carouselObj = carouselObjs[i];
            break;
        }
    }

    carouselObj.wrapper.scrollLeft -= calculateScroll(carouselObj, cID);
}

function calculateScroll(carouselObj, cID) {

    if (carouselObj !== null) {
        let cItem = carouselObj.viewport.querySelector(".cItem");
        let styles = window.getComputedStyle(cItem);
        let margin_left = Number(styles.getPropertyValue("margin-left").replace("px", ""));
        let margin_right = Number(styles.getPropertyValue("margin-right").replace("px", ""));

        let width = cItem.getBoundingClientRect().width + margin_left + margin_right;

        return width; 
    }
    else {
        return 0;
    }
}