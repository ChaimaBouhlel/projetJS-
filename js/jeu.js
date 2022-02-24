function choisirNiveauDifficulté(){
    let nbTentatives=prompt("choisir le nombre de tentatives")
    return nbTentatives
}

function jouer(nbTentatives) {
    nbreAlea = Math.trunc(Math.random() * 11)
    console.log(nbreAlea)
    let compteur = 0;
    for (compteur = 0; compteur < nbTentatives; compteur++) {
        let nbreDevine = prompt("Devinez le nbre!")
        if (nbreDevine == nbreAlea) {
            break;
        }
    }
    if (compteur == nbTentatives) {
        alert("You lost!")
    } else {
        alert("You won!")
    }
}
vouloirJouer=true
while(vouloirJouer){
    niveauChoisi=choisirNiveauDifficulté()
    jouer(niveauChoisi)
    vouloirJouer=confirm("Voulez-vous essayer encore une fois?")
}




