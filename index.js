const itemsList = document.querySelector(".nav-bar__list")
const anchors = document.querySelectorAll(".nav-bar__list__item__anchor")
const goDown = document.querySelector(".go-down")
const merch = document.querySelector(".ofertas")

itemsList.addEventListener('click', (e) => {
    toActive(e.target)
})

goDown.addEventListener("click", () => {
    toActive()
    merch.classList.add("active")
})

function toActive(target = undefined) {
    anchors.forEach((a) => {
        a.classList.remove("active")
    })
    if (target !== undefined) {
        target.classList.add("active")
    }
}