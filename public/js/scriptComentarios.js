let span_usuario_logado = document.getElementById("span_usuario_logado");

let jogo = sessionStorage.NOME_JOGO;
let nome_jogo = document.getElementById("nome_jogo");
nome_jogo.innerHTML = jogo;

function guardarJogo(id, nome) {
  sessionStorage.setItem("ID_JOGO", id);
  sessionStorage.setItem("NOME_JOGO", nome);
}

if (sessionStorage.NOME_USER) {
  console.log(`Nome do usuário: ${sessionStorage.NOME_USER}`);
  span_usuario_logado.innerHTML = `
  <li>|</li>
  <li class="perfil_titulo"><a href="perfil.html">Perfil</a></li>
  `;
} else {
  span_usuario_logado.style.display = "flex";
}

function buscarComentarios() {

  fetch(`/comentarios/buscarComentarios`)
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

function criarComentarios(event) {
  event.preventDefault();

  let fkUsuario = sessionStorage.ID_USER;
  let fkJogo = sessionStorage.ID_JOGO;

  let corpo = {
    descricao: form.input_comentario.value
  }

  fetch(`/comentarios/criarComentarios/${fkUsuario}/${fkJogo}`, {
    method: "post",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(corpo)
  }).then(function (resposta) {

    console.log("resposta: ", resposta);

    if (resposta.ok) {
      window.alert("Post realizado com sucesso");
    } else if (resposta.status == 404) {
      console.log("Erro: " + resposta)
    } else {
      throw ("Houve um erro ao tentar realizar a postagem! Código da resposta: " + resposta.status);
    }
  }).catch(function (resposta) {
    console.log(erro);
  });
  return false;
}