let span_usuario_logado = document.getElementById("span_usuario_logado");

let jogo = sessionStorage.NOME_JOGO;
let nome_jogo = document.getElementById("nome_jogo");


function guardarJogo(id, nome) {
  sessionStorage.setItem("ID_JOGO", id);
  sessionStorage.setItem("NOME_JOGO", nome);
}

if (sessionStorage.NOME_USER) {
  console.log(`Nome do usuário: ${sessionStorage.NOME_USER}`);
  span_usuario_logado.innerHTML = `
  <li>|</li>
  <li class="perfil_titulo"><a href="perfil.html">Olá, ${sessionStorage.NOME_USER}</a></li>
  `;
} else {
  span_usuario_logado.style.display = "flex";
}

function buscarDadosGraficoBarra() {

  fetch(`/dashboard/buscarDadosGraficoBarra`)
    .then(function (resposta) {
      if (resposta.ok) {
        if (resposta.status == 204) {
          // div_comentarios.innerHTML = `<h1> Nenhum resultado encontrado. </h1>`;
          throw "Nenhum resultado encontrado!!";
        }
        resposta.json().then(function (resposta) {
          console.log("Dados recebidos: ", JSON.stringify(resposta));

          const ctx = document.getElementById('graficoBarra');

          let labelGrafico = [];
          let dataGrafico = [];

          for (let i = 0; i < resposta.length; i++) {
            labelGrafico.push(resposta[i].nome);
            dataGrafico.push(resposta[i].qtdComentarios);
          }

          new Chart(ctx, {
            type: 'bar',
            data: {
              labels: labelGrafico,
              datasets: [{
                label: 'Quantidade de comentários',
                data: dataGrafico,
                backgroundColor: [
                  "rgba(255, 99, 132, 0.2)",
                  "rgba(54, 162, 235, 0.2)",
                  "rgba(255, 206, 86, 0.2)",
                  "rgba(75, 192, 192, 0.2)",
                  "rgba(153, 102, 255, 0.2)",
                  "rgba(255, 159, 64, 0.2)",
                  "rgba(201, 203, 207, 0.2)",
                  "rgba(100, 181, 246, 0.2)"
                ],
                borderColor: [
                  "rgba(255, 99, 132, 1)",
                  "rgba(54, 162, 235, 1)",
                  "rgba(255, 206, 86, 1)",
                  "rgba(75, 192, 192, 1)",
                  "rgba(153, 102, 255, 1)",
                  "rgba(255, 159, 64, 1)",
                  "rgba(201, 203, 207, 1)",
                  "rgba(100, 181, 246, 1)"
                ],
                borderWidth: 1
              }]
            },
            options: {
              maintainAspectRatio: false,
              responsive: true,
              scales: {
                y: {
                  beginAtZero: true
                }
              }
            }
          });

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

function buscarCards() {

  fetch(`/biblioteca/buscarCards`)
    .then(function (resposta) {
      if (resposta.ok) {
        if (resposta.status == 204) {
          // div_comentarios.innerHTML = `<h1> Nenhum resultado encontrado. </h1>`;
          throw "Nenhum resultado encontrado!!";
        }
        resposta.json().then(function (resposta) {
          console.log("Dados recebidos: ", JSON.stringify(resposta));

          const div_cards = document.getElementById("cards_jogos")

          for (let i = 0; i < resposta.length; i++) {
            div_cards.innerHTML += `
                 <div id="${resposta[i].idJogo}" class="card_jogo">
                        <div class="card_img">
                            <img src="${resposta[i].urlImagem}">
                        </div>
                        <div class="card_texto">
                            <div class="card_texto_conteudo">
                                <h2>${resposta[i].nome}</h2>
                                <div>
                                    <span>${resposta[i].genero}</span>
                                </div>
                                <p>${resposta[i].descricao}</p>
                            </div>

                            <div class="card_cometarios">
                                <p>${resposta[i].qtdComentarios} Comentários</p>
                                <a href="comentarios.html" onclick="guardarJogo(${resposta[i].idJogo}, '${resposta[i].nome}')">
                                    <button class="botao">Comentar</button>
                                </a>
                            </div>
                        </div>
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