
//Cette fct crée un element avec son contenu et le place à son endroit convenable
function creerPlacerElement(tag, parent, classe, contenu = "") {
    nouveauElement = document.createElement(tag)
    nouveauElement.classList.add(classe)
    nouveauElement.innerHTML = contenu
    parent.appendChild(nouveauElement)
    return nouveauElement
}

//Cette fct crée une nouvelle tache et la place 
function CreateTask(nom, contenu){

    divTaches = document.querySelector(".tasks")

    nouvelleTache = creerPlacerElement("div", divTaches, "task")

    topTache = creerPlacerElement("div", nouvelleTache, "toast-header")

    corpsTache = creerPlacerElement("div", nouvelleTache, "toast-body", contenu)

    titreTache = creerPlacerElement("strong", topTache, "me-auto", nom)

    boutonCorbeille = creerPlacerElement("button", topTache, "btn")

    iconCorbeille = creerPlacerElement("i", boutonCorbeille, "bi")
    iconCorbeille.classList.add("bi-trash3-fill")

    //gérer clique sur la corbeille: supprimer la tache correspondante
    iconCorbeille.addEventListener("click", (e) => {
        e.target.parentElement.parentElement.parentElement.remove()
    })
}

//Cette fonction extrait les textes des inputs pour créer une nouvelle tache
function addTaskFromInput() {
    nom = document.querySelector("#name")
    contenu = document.querySelector("#content")
    CreateTask(nom.value, contenu.value)
}


//Fct bootstrap modifiée: gérer les inputs en cas de validation
(function () {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                } else {
                    //Dans ce cas les deux champs sont remplis => valides
                    event.preventDefault()
                    event.stopPropagation()
                    addTaskFromInput()
                }
                form.classList.add('was-validated')
            }, false)
        })
})()






