const allElements = document.getElementsByTagName("*");

for (let i = 0, len = allElements.length; i < len; i++) {
    if(!allElements[i].hasAttribute("scroll")) continue;
    const scroll = allElements[i].getAttribute("scroll");
    allElements[i].addEventListener("click", () => {
        if(scroll === "top") {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
            return;
        }

        document.querySelector("#" + scroll).scrollIntoView(true);
    });
}

// change active navbar when scrolling
const navigation = document.querySelectorAll("nav ul li");

window.addEventListener("scroll", () => {
    if(this.scrollY < 439) {
        navigation[0].classList.remove("active");
        navigation[1].classList.remove("active");
        navigation[2].classList.remove("active");
        navigation[3].classList.remove("active");
        navigation[4].classList.remove("active");
    }

    if(this.scrollY > 439) {
        navigation[0].classList.add("active");
        navigation[1].classList.remove("active");
        navigation[2].classList.remove("active");
        navigation[3].classList.remove("active");
        navigation[4].classList.remove("active");
    }

    if(this.scrollY > 2111) {
        navigation[0].classList.remove("active");
        navigation[1].classList.add("active");
        navigation[2].classList.remove("active");
        navigation[3].classList.remove("active");
        navigation[4].classList.remove("active");
    }

    if(this.scrollY > 3831) {
        navigation[0].classList.remove("active");
        navigation[1].classList.remove("active");
        navigation[2].classList.add("active");
        navigation[3].classList.remove("active");
        navigation[4].classList.remove("active");
    }

    if(this.scrollY > 4527) {
        navigation[0].classList.remove("active");
        navigation[1].classList.remove("active");
        navigation[2].classList.remove("active");
        navigation[3].classList.add("active");
        navigation[4].classList.remove("active");
    }

    if(this.scrollY > 8543) {
        navigation[0].classList.remove("active");
        navigation[1].classList.remove("active");
        navigation[2].classList.remove("active");
        navigation[3].classList.remove("active");
        navigation[4].classList.remove("active");
    }
}, false);