let span_usuario_logado = document.getElementById("span_usuario_logado");

if (sessionStorage.NOME_USER) {
  console.log(`Nome do usuário: ${sessionStorage.NOME_USER}`);
  span_usuario_logado.innerHTML = `
  <li>|</li>
  <li class="perfil_titulo"><a href="perfil.html">Olá, ${sessionStorage.NOME_USER}</a></li>
  `;
} else {
  span_usuario_logado.style.display = "flex";
}