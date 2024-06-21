const botaoAlterarTema = document.getElementById("botao-alterar-tema");
const body = document.querySelector("body");
const imagemRodape = document.querySelector(".imagem-rodape");
const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao");

botaoAlterarTema.addEventListener("click", () => {
    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");
    

    body.classList.toggle('modo-escuro');
  
    if (modoEscuroEstaAtivo) {
        imagemBotaoTrocaDeTema.setAttribute("src", "src/image/sun.png");
        imagemRodape.setAttribute("src", "src/image/todos.png");
    } else {
        imagemBotaoTrocaDeTema.setAttribute("src", "src/image/moon.png");
        imagemRodape.setAttribute("src", "src/image/duas.png");
        
    }
});
