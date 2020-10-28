const mobileMenu = document.querySelector("nav .ham");
const nav = document.querySelector("nav ul");

mobileMenu.addEventListener("click", () => {
    if(mobileMenu.classList.contains("active")) {
        //> opened
        nav.classList.add("active");
        nav.parentElement.classList.add("mobile");
    } else {
        //> closed
        nav.classList.remove("active");
        nav.parentElement.classList.remove("mobile");
    }
});