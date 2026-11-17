

// verificar campos se estao vazios
// mensagem de registrado com sucesso
function camposvazios() {
    var titulo = document.getElementById("titulo").value;
    var descricao = document.getElementById("descricao").value;
    var categoria = document.getElementById("categoria").value;
    var arquivo = document.getElementById("arquivo").value;

    

    if (titulo == "" || descricao == "" || categoria == "" || arquivo == "") {
        alert("Preencha todos os campos!");
    }else{
        alert("Ocorrência registrada com sucesso!");
    }

    return titulo != "" && descricao != "" && categoria != "" && arquivo != "";
}

