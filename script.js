//criando function que ja esta no html - como uma classe "onclick="clique()""
const clique = () => {
    const button = document.querySelector(".color")
    const text = document.querySelector(".button")
    console.log(button)
    //como estou adicionando a tag - no documento - nao vai ponto
    button.classList.toggle("modified");
    if(text.innerText === "Clique aqui"){
    text.innerText = "Voltar" 
    }else {
        text.innerText = "Clique aqui"
    }
   
}

//adicionando function direto ao html 
/*const botao = document.querySelector(".button")
botao.addEventListener("click", () => {
    const color = document.querySelector(".color");
    console.log(color)
    color.classList.toggle("modified")
});
*/