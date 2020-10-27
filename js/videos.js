document.querySelectorAll(".video img").forEach((item) => {
    item.addEventListener("click", () => {
        const video = item.parentElement.firstChild;

        if(video.paused == true) {
            video.play();
            video.classList.remove("paused");
            item.style.opacity = 0;
        } else {
            video.pause();
            video.classList.add("paused");
            item.style.opacity = 1;
        }
    });
});