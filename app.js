
let open = false

document.getElementById("burger-button").onclick = () => {
    const burgerContent = document.getElementById("burger-content")
    open = !open
    open ? burgerContent.classList.add("burger-open") : burgerContent.classList.remove("burger-open");
}
