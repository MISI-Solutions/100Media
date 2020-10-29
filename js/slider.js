const sliderPrevious = document.querySelector("#slider-previous");
const sliderNext = document.querySelector("#slider-next");

let slides = [];

function createSlides() {
    let order = 0;
    document.querySelectorAll("#client-results #slides .slide").forEach((item) => {
        if(item.firstElementChild.getAttribute("src").includes("arrow")) return;
        slides.push(item);
        item.style.order = order;
        order++;
    });

    refreshSlides();
}

function refreshSlides() {
    slides.forEach((item) => {
        const order = parseInt(item.style.order);
        item.classList.remove("hidden");
        item.classList.remove("active");
        if(order < slides.length-3) item.classList.add("hidden");
        if(order === slides.length-2) item.classList.add("active");
    });
}

sliderPrevious.addEventListener("click", () => {
    slides.forEach((item) => {
        const order = parseInt(item.style.order);
        item.style.order = order+1;
        if(item.style.order >= slides.length) item.style.order = 0;
    });

    refreshSlides();
});

sliderNext.addEventListener("click", () => {
    slides.forEach((item) => {
        const order = parseInt(item.style.order);
        item.style.order = order-1;
        if(item.style.order < 0) item.style.order = slides.length-1;
    });

    refreshSlides();
});

createSlides();