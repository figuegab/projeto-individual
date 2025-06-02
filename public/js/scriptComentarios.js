let span_usuario_logado = document.getElementById("span_usuario_logado");

if (sessionStorage.NOME_USER) {
  console.log(`Nome do usuário: ${sessionStorage.NOME_USER}`);
  span_usuario_logado.style.display = "none";
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
                            <h4>${resposta[i].nomeJogo}</h4>
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