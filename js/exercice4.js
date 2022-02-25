
function randomNumber(max) {
    return Math.trunc(Math.random() * max)
}

function changeRandomColor(event) {
    rgb2 = randomNumber(255)
    rgb1 = randomNumber(255)
    rgb3 = randomNumber(255)
    event.target.style.color = "rgb(" + rgb1 + "," + rgb2 + "," + rgb3 + ")"
}


listItems = document.querySelectorAll('li')
listItems.forEach(listItem => {
    listItem.addEventListener("click", changeRandomColor)
});