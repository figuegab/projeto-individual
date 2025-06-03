function cadastrar() {

    event.preventDefault();

    let user = input_user.value;
    let gamertag = input_gamertag.value;
    let email = input_email.value;
    let senha = input_senha.value;
    let confirmarSenha = input_confirmar_senha.value;

    let camposNaoPreenchidos = user == "" || email == "" || senha == "" || confirmarSenha == "";

    if (camposNaoPreenchidos) {
        alert(`Preencha todos os campos`);
       
        return false;
    } else {

        const confirmarSenhaIgualSenha = confirmarSenha == senha;

        if (confirmarSenhaIgualSenha) {
            // Enviando o valor da nova input
            fetch("/usuarios/cadastrar", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    // crie um atributo que recebe o valor recuperado aqui
                    // Agora vá para o arquivo routes/usuario.js
                    userServer: user,
                    gamertagServer: gamertag,
                    emailServer: email,
                    senhaServer: senha,
                }),
            })
                .then(function (resposta) {
                    console.log("resposta: ", resposta);

                    if (resposta.ok) {
                        // cardErro.style.display = "block";

                        alert("Cadastro realizado com sucesso! Redirecionando para tela de Login...");

                        setTimeout(() => {
                            window.location = "/login.html";
                        }, "2000");
                       
                    } else {
                        alert(`Email já cadastrado`);
                        throw "Houve um erro:";
                    }
                })
                .catch(function (resposta) {
                    console.log(`#ERRO: ${resposta}`);
                   
                });

            return false;
        } else {
            alert(`Cadastro não realizado`)
        }
    }
}

// function sumirMensagem() {
//     cardErro.style.display = "none";
// }
