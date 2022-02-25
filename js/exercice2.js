couleurChoisie = document.querySelector("#couleur")
tailleChoisie = document.querySelector("#taille")
fontChoisi = document.querySelector("#font")
texteSaisi = document.querySelector("#texte")

function editText(){
    texteSaisi.style.color=couleurChoisie.value
    texteSaisi.style.fontFamily=fontChoisi.value
    texteSaisi.style.fontSize=tailleChoisie.value+"px"
} 

//This fuction edit the text when an input value is changed
function editTextOnChange(selectedElement, event, editFunc=editText){
selectedElement.addEventListener(event,editFunc)
}

editTextOnChange(tailleChoisie,"input")
editTextOnChange(fontChoisi,"input")
editTextOnChange(couleurChoisie,"input")