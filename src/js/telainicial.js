
// videoshow


var imagens = document.querySelectorAll(".img-pro");

if (imagens.length > 0) {

    var atual = 0;

    imagens[atual].classList.add("ativo");


    // clicar no botao ->precisa de evento
    document.getElementById("proximo").addEventListener("click", function() {
        imagens[atual].classList.remove("ativo");

        atual= atual + 1;

        if (atual >= imagens.length) {
            atual = 0;
        }

        imagens[atual].classList.add("ativo");
    });





    document.getElementById("anterior").addEventListener("click", function() {
        imagens[atual].classList.remove("ativo");

        atual= atual -1;

        if (atual < 0) {
            atual = imagens.length - 1;
        }

        imagens[atual].classList.add("ativo");
    });
}

