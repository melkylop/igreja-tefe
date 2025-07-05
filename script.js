// Aguarda 4 segundos para esconder a mensagem de boas-vindas e mostrar o menu
setTimeout(() => {
  document.getElementById("boasVindas").style.display = "none";
  document.getElementById("menu").style.display = "flex";
}, 4000);

// Mostra o conteúdo da seção escolhida
function mostrarConteudo(id) {
  document.getElementById("menu").style.display = "none";
  const conteudos = document.querySelectorAll(".conteudo");
  conteudos.forEach(c => c.style.display = "none");
  document.getElementById(id).style.display = "block";
}

// Volta para o menu principal escondendo as seções
function voltarMenu() {
  const conteudos = document.querySelectorAll(".conteudo");
  conteudos.forEach(c => c.style.display = "none");
  document.getElementById("menu").style.display = "flex";
}
// Ativa a música quando o botão for clicado
document.getElementById("botaoMusica").addEventListener("click", () => {
  const musica = document.getElementById("musicaFundo");
  musica.play().then(() => {
    // Esconde o botão após iniciar a música
    document.querySelector(".player-musica").style.display = "none";
  }).catch((e) => {
    console.warn("Erro ao iniciar a música:", e);
  });
});
