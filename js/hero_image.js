
let maxStarSize = window.getComputedStyle(document.documentElement).getPropertyValue("--maxStarSize");
let maxBlur = window.getComputedStyle(document.documentElement).getPropertyValue("--maxBlur");

function drawCanvases() {

    if (window.innerWidth < 750) {
        return;
    }

    let canvases = document.querySelectorAll("canvas");
    
    canvases.forEach(canvas => {
        const numOfStars = Number(canvas.getAttribute("data-star-count"));
        const fps = 30;

        let [c, ctx] = initializeCanvas(canvas);
    
        let stars = createStarObjs(c, numOfStars, maxStarSize, maxBlur);
    
        animateStars(c, ctx, stars, maxStarSize, maxBlur, fps);
    });
}

function initializeCanvases() {
    let canvases = document.querySelectorAll("canvas");

    canvases.forEach(canvas => {
        initializeCanvas(canvas);
    });

}

function initializeCanvas(c) {
    let parentDiv = c.parentElement;
    let ctx = c.getContext("2d");

    c.width = parentDiv.getBoundingClientRect().width;
    c.height = parentDiv.getBoundingClientRect().height;
   
    const dpi = window.devicePixelRatio;
    c.getContext('2d').scale(dpi, dpi);

    ctx.lineWidth = 2;

    return [c, ctx];
}

function fillBackground(ctx, w, h) {
    ctx.clearRect(0, 0, w, h);
}

function createStarObjs(c, numStars, maxStarSize, maxBlur) {
    let stars = [];
    let strokeColor = "#FFFFFF";
    let shadowColor = "#FFFFFF";
    let colors = ["#FF7171", "#FFB471", "#FFF971", "#B4FF71", "#71FFA0", "#71F9FF", "#719AFF", "#D471FF", "#FF71E7"];
    let minStarSize = 1;

    for (let i = 0; i < numStars; i++) {
        let x = Math.floor(Math.random() * c.width);
        let y = Math.floor(Math.random() * c.height);
        let r = Math.floor(Math.random() * (maxStarSize - maxStarSize + 1) + minStarSize);
        let shadowBlur = Math.floor(Math.random() * maxBlur);
        //let fillColor = colors[Math.floor(Math.random() * colors.length)];
        let fillColor = strokeColor;

        let star = {
            "x" : x,
            "y" : y,
            "r" : r,
            "shadowBlur" : shadowBlur,
            "shadowColor" : shadowColor,
            "strokeColor": strokeColor,
            "fillColor" : fillColor,
            "blurIncreaseOrDecrease": "increase",
        }
        
        stars.push(star);
    }

    return stars;
}


function drawStar(ctx, star) {
    ctx.strokeStyle = star.strokeColor;
    ctx.fillStyle = star.fillColor;
    ctx.shadowColor = star.shadowColor;
    ctx.shadowBlur = star.shadowBlur;
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.r, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
}

function drawStars(c, ctx, stars, maxStarSize, maxBlur) {
    let incrementValues = [0, 1, 2];

    stars.forEach(star => {
        star.x += 1;
        if (star.blurIncreaseOrDecrease === "increase") {
            star.shadowBlur += incrementValues[Math.floor(Math.random() * incrementValues.length)];
        }
        else {
            star.shadowBlur -= incrementValues[Math.floor(Math.random() * incrementValues.length)];
        }

        if (star.shadowBlur >= maxBlur) {
            star.blurIncreaseOrDecrease = "decrease";
        }
        else if (star.shadowBlur <= 0){
            star.blurIncreaseOrDecrease = "increase";
        }
        
        if (star.x > c.width) {
            star.x = 0;
            star.y = Math.floor(Math.random() * c.height);
            star.r = Math.floor(Math.random() * maxStarSize);
        }

        drawStar(ctx, star);
    });
    
}

window.addEventListener("resize", (e) => {
    initializeCanvases();
});

function animateStars(c, ctx, stars, maxStarSize, maxBlur, fps) {
    fillBackground(ctx, c.width, c.height);
    drawStars(c, ctx, stars, maxStarSize, maxBlur);
    setTimeout(() => {
        requestAnimationFrame(function() {
            animateStars(c, ctx, stars, maxStarSize, maxBlur, fps);
        });
    }, 1000 / fps);
}

