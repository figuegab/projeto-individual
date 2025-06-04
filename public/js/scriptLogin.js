
function entrar() {

    event.preventDefault() // formulario nao recarregar
    
    var emailVar = email_input.value;
    var senhaVar = senha_input.value;

    if (emailVar == "" || senhaVar == "") {
        // cardErro.style.display = "block";
        alert("Preencha todos os campos");

        return false;
    } else if (emailVar, senhaVar){
        alert(`Verificando credenciais.`);
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
                sessionStorage.GAMERTAG_USER = json.gamertag;
                sessionStorage.EMAIL_USER = json.email;
                sessionStorage.ID_USER = json.idUsuario;

                setTimeout(function() {
                    window.location = "/index.html";
                }, 1000); // apenas para exibir o loading
            });

        } else {
            console.log("Houve um erro ao tentar realizar o login!");
            alert("Houve um erro ao tentar realizar o login!");


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
