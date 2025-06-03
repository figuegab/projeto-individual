let span_usuario_logado = document.getElementById("span_usuario_logado");

if (sessionStorage.NOME_USER) {
  console.log(`Nome do usuário: ${sessionStorage.getItem("NOME_USER")}`);
  span_usuario_logado.innerHTML = `
    <li>|</li>
    <li class="perfil_titulo"><a href="perfil.html">Meu perfil</a></li>
  `;
} else {
  span_usuario_logado.style.display = "flex";
}

const nome = document.getElementById("nome_usuario");
const gamertag = document.getElementById("gamertag_usuario");
const email = document.getElementById("email_usuario");

nome.value = sessionStorage.getItem("NOME_USER");
gamertag.value = sessionStorage.getItem("GAMERTAG_USER");
email.value = sessionStorage.getItem("EMAIL_USER");

let fkUsuario = sessionStorage.getItem("ID_USER");

function buscarComentariosUsuario() {

  fetch(`/perfil/buscarComentariosUsuario/${fkUsuario}`)
    .then(function (resposta) {
      if (resposta.ok) {
        if (resposta.status == 204) {
          // div_comentarios.innerHTML = `<h1> Nenhum resultado encontrado. </h1>`;
          throw "Nenhum resultado encontrado!!";
        }
        resposta.json().then(function (resposta) {
          console.log("Dados recebidos: ", JSON.stringify(resposta));

          const div_comentarios = document.getElementById("comentarios")

          for (let i = 0; i < resposta.length; i++) {
            div_comentarios.innerHTML += `
                    <div class="card_comentario">
                        <div>
                            <h4>${resposta[i].nome_jogo}</h4>
                            <p class="nome_autor">${resposta[i].autor}</p>
                        </div>
                        <p>${resposta[i].comentario}</p>
                    </div>
              `
          }

          // finalizarAguardar();
        });
      } else {
        throw "Houve um erro na API!";
      }
    })
    .catch(function (resposta) {
      console.error(resposta);
      // finalizarAguardar();
    });
}

function buscarQuantidadeComentarios() {

  fetch(`/perfil/buscarQuantidadeComentarios/${fkUsuario}`)
    .then(function (resposta) {
      if (resposta.ok) {
        if (resposta.status == 204) {
          // div_comentarios.innerHTML = `<h1> Nenhum resultado encontrado. </h1>`;
          throw "Nenhum resultado encontrado!!";
        }
        resposta.json().then(function (resposta) {
          console.log("Dados recebidos: ", JSON.stringify(resposta));
          const quantidade = document.getElementById("kpi_quantidade");
          quantidade.innerHTML = resposta[0].total_comentarios;
          // finalizarAguardar();
        });
      } else {
        throw "Houve um erro na API!";
      }
    })
    .catch(function (resposta) {
      console.error(resposta);
      // finalizarAguardar();
    });
}

function buscarJogoMaisComentado() {

  fetch(`/perfil/buscarJogoMaisComentado/${fkUsuario}`)
    .then(function (resposta) {
      if (resposta.ok) {
        if (resposta.status == 204) {
          // div_comentarios.innerHTML = `<h1> Nenhum resultado encontrado. </h1>`;
          throw "Nenhum resultado encontrado!!";
        }
        resposta.json().then(function (resposta) {
          console.log("Dados recebidos: ", JSON.stringify(resposta));

          const nome_jogo = document.getElementById("kpi_mais_comentado");
          nome_jogo.innerHTML = resposta[0].nome_jogo;
          // finalizarAguardar();
        });
      } else {
        throw "Houve um erro na API!";
      }
    })
    .catch(function (resposta) {
      console.error(resposta);
      // finalizarAguardar();
    });
}