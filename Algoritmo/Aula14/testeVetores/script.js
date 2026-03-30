// Vetores para simular o banco de dados
let usuarios = [];
let senhas = [];

function cadastrar() {
    let user = document.getElementById('regUser').value;
    let pass = document.getElementById('regPass').value;

    if (user === "" || pass === "") {
        alert("Preencha todos os campos!");
        return;
    }

    // Verifica se o usuário já existe
    if (usuarios.includes(user)) {
        alert("Este usuário já está cadastrado.");
    } else {
        usuarios.push(user);
        senhas.push(pass);
        alert("Cadastro realizado com sucesso!");
        
        // Limpa os campos
        document.getElementById('regUser').value = "";
        document.getElementById('regPass').value = "";
    }
}

function logar() {
    let user = document.getElementById('loginUser').value;
    let pass = document.getElementById('loginPass').value;
    let msg = document.getElementById('mensagem');

    // Busca o índice do usuário no vetor
    let indice = usuarios.indexOf(user);

    // Se o índice for -1, o usuário não existe
    // Se existir, verificamos se a senha no mesmo índice confere
    if (indice !== -1 && senhas[indice] === pass) {
        msg.innerHTML = `Bem-vindo, <b>${user}</b>! Login realizado.`;
        msg.style.color = "green";
    } else {
        msg.innerHTML = "Usuário ou senha incorretos.";
        msg.style.color = "red";
    }
}