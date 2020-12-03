
const nodes = {
    menuBtn : document.getElementById("js-menu-btn"),
    nav : document.getElementById("js-mobile-nav")
}

const navActiveClass = "mobile-navigation--active";
const btnActiveClass = "menu-btn--active";
const toggleNav = () => nodes.nav.classList.contains(navActiveClass) ? nodes.nav.classList.remove(navActiveClass) : nodes.nav.classList.add(navActiveClass);
const toggleMenuBtn = () => nodes.menuBtn.classList.contains(btnActiveClass) ? nodes.menuBtn.classList.remove(btnActiveClass) : nodes.menuBtn.classList.add(btnActiveClass);

window.onload = () => {
    nodes.menuBtn.addEventListener("click", () => {
        toggleNav()
        toggleMenuBtn()
    })
}
