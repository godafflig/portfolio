
let open = false

document.getElementById("burger-button").onclick = () => {
    const menu = document.getElementById("menu")
    const burgerContent = document.getElementById("burger-content")
    open = !open
    open ? burgerContent.classList.add("burger-open") && menu.classList.add("menu-open") : burgerContent.classList.remove("burger-open") && menu.classList.remove("menu-open");
}
