const secaoParagrafos = document.getElementById("secao_paragrafos")


function mudarTF() {
    secaoParagrafos.style.fontSize = "30px";
}

function mudarCF(){
secaoParagrafos.style.color = "white"

}

function mudarCFundo(){
    secaoParagrafos.style.background = "black"
}

function addBorder(){
    secaoParagrafos.style.border = "3px dashed #CA0000"
    }

function rvBorder(){
    secaoParagrafos.style.borderStyle = "none"
    }

function mudarItalic(){
    secaoParagrafos.style.fontStyle = "italic"
}

function mudarBold(){
    secaoParagrafos.style.fontWeight = "bold"
}

function tirarDiv(){
    secaoParagrafos.style.display = "none"
}

function apareceDiv(){
    secaoParagrafos.style.display = "inherit"
}

function mudar2h2(){
    document.getElementsByClassName("texto")[1].innerHTML = "TAPOOOOOOOOOOOOOOOOORRRRRRA"
}

function mudarCFParagrafo(){
    document.getElementsByClassName("paragrafo")[0].style.backgroundColor = "#0000ff"
}

function mudarCFB(){
    document.getElementsByTagName("button")[2].style.backgroundColor = "lightgrey"
}

function mudarCFBtns(){
    let botoes = document.getElementsByName("button")

    for (let contador = 0; contador < botoes.length; contador++){
        botoes[contador].style.backgroundColor = "lightgrey"
    }
}