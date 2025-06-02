
function entrar() {

    event.preventDefault() // formulario nao recarregar
    
    var emailVar = email_input.value;
    var senhaVar = senha_input.value;

    if (emailVar == "" || senhaVar == "") {
        // cardErro.style.display = "block";
        mensagem_erro.innerHTML = "(Mensagem de erro para todos os campos em branco)";

        // Esconder a mensagem de erro após 5 segundos
        setTimeout(function() {
            // cardErro.style.display = "none";
        }, 5000);

        return false;
    } else {
        alert(`Aguarde um instante...`);
    }

    console.log("FORM LOGIN: ", emailVar);
    console.log("FORM SENHA: ", senhaVar);

    fetch("/usuarios/autenticar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            emailServer: emailVar,
            senhaServer: senhaVar
        })
    }).then(function(resposta) {

        if (resposta.ok) {
            console.log(resposta);

            resposta.json().then(json => {
                console.log(json);
                console.log(JSON.stringify(json));
                sessionStorage.NOME_USER = json.nome;
                sessionStorage.EMAIL_USER = json.email;
                sessionStorage.ID_USER = json.idUsuario;

                setTimeout(function() {
                    window.location = "/index.html";
                }, 1000); // apenas para exibir o loading
            });

        } else {
            console.log("Houve um erro ao tentar realizar o login!");

            resposta.text().then(texto => {
                console.error(texto);
                // finalizarAguardar(texto);
            });
        }
    }).catch(function(erro) {
        console.log(erro);
    });

    return false;
}
