



document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const anunciosList = document.getElementById('anuncios');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const titulo = document.getElementById('titulo').value;
        const descricao = document.getElementById('descricao').value;
        const preco = document.getElementById('preco').value;

        const anuncio = document.createElement('li');
        anuncio.innerHTML = `<strong>${titulo}</strong> - ${descricao} - R$ ${preco}`;

        anunciosList.appendChild(anuncio);

        form.reset();
    });
});
