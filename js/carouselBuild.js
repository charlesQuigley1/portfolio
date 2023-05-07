async function buildCarouselHTML() {
    let viewport_class = "carousel-viewport"; 
    let html = "";
    let cWrapper = document.querySelector(".carousel-wrapper");
    let cView = document.createElement("div");
    cView.classList.add(viewport_class);
    cView.id = "carousel-1";

    let cJSON = await fetchCarouselData();
    
    if (!cJSON) {
        return;
    }

    cWrapper.innerHTML += carouselAssets("leftBtn", cView.id);

    cJSON.forEach(item => {
        html += buildItem(item, cView.id);
    });

    cView.innerHTML = html;

    cWrapper.appendChild(cView);

    cWrapper.innerHTML += carouselAssets("rightBtn", cView.id);
}

async function fetchCarouselData() {
    let json = null;
    try {
        json = await fetch("json/carousel.json").then((response) => {
            if(response.ok) {
                return response.json();
            }
            else {
                console.error("Carousel Error -- Failed to load the JSON file. ");
            }
        });
    }
    catch (e) {
        console.error(e);
    }

    return json;
}

function buildItem(item, carousel_view_id) {
    let idName = "c-item-" + item.id;
    let className = "cItem";
    let modalName = "modal-" + item.id;
    let htmlStr = "<div id=\"" + idName + "\" class=\"" + className + "\">";
    htmlStr += "<button onclick=\"showModal('" + modalName + "')\">";
    htmlStr += "<img src=\"" + item.image + "\" alt=\"" + item.title + "\" \>"
    htmlStr += "<h3 class=\"title\">" + item.title + "</h3>";

    htmlStr += "</button>";
    htmlStr += "<div id=\"" + modalName + "\">";
    htmlStr += "<div class=\"modal-data\">";
    htmlStr += "<div class=\"inModal modal-background-color\">" + item.modal_background_color + "</div>";
    htmlStr += "<div class=\"modal-data-title inModal\">";
    htmlStr += "<h3 class=\"inModal\" style=\"--modal-title-color: " + item.detail.title_highlight + "\">" + item.title + "</h3>"
    htmlStr += "<div class=\"modal-close\" onclick=\"clickOutOfModal('buttonClick')\">" + carouselAssets("closeIcon", carousel_view_id) + "</div>";
    htmlStr += "</div>";
    htmlStr += "<p class=\"inModal modal-descr\" style=\"color:" + item.detail.text_color + "\">" + item.detail.description + "</p>";
    htmlStr += item.detail.additional_html;
    htmlStr += "<div class=\"youtube-data\">";
    htmlStr += item.detail.video_url;
    htmlStr += "</div>";
    htmlStr += "<div class=\"inModal imgHolder\">";
    htmlStr += "<a class=\"inModal\" href=" + item.detail.image + "> <img class=\"inModal\" src=\"" + item.detail.image + "\"></a>";
    htmlStr += "</div>";
    htmlStr += "</div>";
    htmlStr += "</div>"; 
    htmlStr += "</div>";

    return htmlStr;
}


function carouselAssets(assetName, carouselID) {
    let leftBtn = "<button class=\"carousel-btn left-carousel-btn\" onclick=\"cPrev('" + carouselID + "')\"><div>" + 
        "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"50\" height=\"50\" fill=\"currentColor\" " +
        "class=\"bi bi-caret-left-fill carousel-caret\" viewBox=\"0 0 16 16\"> " +
        "<path d=\"m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z\"/>\n" +
        "</svg>";
        + "</div></button>";
    let rightBtn = "<button class=\"carousel-btn right-carousel-btn\"  onclick=\"cNext('" + carouselID + "')\"><div>" +
        "<svg xmlns=\"http://www.w3.org/2000/svg\" " +
        "width=\"50\" height=\"50\" fill=\"currentColor\" class=\"bi bi-caret-right-fill carousel-caret\" viewBox=\"0 0 16 16\"> " +
        "<path d=\"m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 " +
        "4.796a1 1 0 0 1 0 1.506z\"/></svg>";
        + "</div></button>";

    let closeIcon = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" fill=\"currentColor\" class=\"bi bi-x\" viewBox=\"0 0 16 16\">" +
                    "<path d=\"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z\"/>" +
                    "</svg>";

    if (assetName === "leftBtn") {
        return leftBtn;
    }

    if (assetName === "rightBtn") {
        return rightBtn;
    }

    
    if (assetName === "closeIcon") {
        return closeIcon;
    }

    return null;
}
