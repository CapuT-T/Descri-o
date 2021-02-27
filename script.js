const imgs = document.querySelectorAll('[data-info-img]')
const paragrafos = document.querySelectorAll('[data-paragrafo]')

const Info = function(elemento, elementoClick, classe){ 
    this.info = document.createElement(elemento)
    this.elementoClick = elementoClick
    this.elementoConteiner = elementoClick.parentElement
    this.criar = function(){
        this.info.classList.add(classe)
        this.info.setAttribute('data-info', '')
        this.info.innerText = elementoClick.getAttribute('aria-label')
        this.elementoConteiner.insertBefore(this.info, elementoClick)
    }
    this.removeInfo = function(){
        this.elementoConteiner.children[0].remove()
    }
}

//infoImg
function activeInfo(event){
    const subInfo = new Info('div', event.target, 'infos')
    subInfo.criar()

    const info = subInfo.info
    info.addEventListener('click', function(){
        subInfo.removeInfo()
    })
}

//InfoParagrafo
function activeParagrafo(event){
    const subPara = new Info('div', event.target, 'info-p')
    subPara.criar()

    const paragrafo = subPara.info
    paragrafo.addEventListener('click', function(){
        subPara.removeInfo()
    })
}

imgs.forEach(img => img.addEventListener('click', activeInfo))
paragrafos.forEach(paragrafo => paragrafo.addEventListener('click', activeParagrafo))