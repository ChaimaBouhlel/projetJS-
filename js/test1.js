const list = document.querySelector(".villes")
const regions =["Sfax", "Kef", "Tunis","Gabes","Jendouba","Sousse","Tunis"]
const myDiv = document.querySelector(".test")


function iteratorContainer(container, tab, tag ,timer){
    let i=0;
    setInterval(()=>{
        if (i<tab.length)
        {let element = `<${tag}>${tab[i++]}</${tag}>`;
    container.innerHTML+=element}else {
        container.innerHTML=''
        i=0
    }
    },timer)
}
iteratorContainer(list, regions, 'li', 1500)
iteratorContainer(myDiv, regions, 'span', 1000)