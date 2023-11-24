function verificarResposta() {
    const resposta = document.getElementById("resposta").value.toLowerCase();
    
    if (resposta === "curso"){
        document.getElementById("resultado").textContent = "Resposta correta!";
    }else {
        document.getElementById("resultado").textContent = "Resposta errada!";
    }
}

