$(document).ready(function() {
    $('header button').click(function() {
        $('form').slideDown();
    })

    $('#cancelar').click(function(e) {
        $('form').slideUp();
    })

    $('form').on('submit' , function(e) {
        e.preventDefault();
        const enderecoImgNova = $('#end-img-nova').val();
        const novoItem = $('<li style="display: none;"></li>')
        $(`<img src="${enderecoImgNova}" />`).appendTo(novoItem)
        $(`
            <div class="overlay-imagem-link">
                <a href="${enderecoImgNova}" target="_blank" title="Ver imagem em tamanho real">
                Ver imagem em tamanho real</a>
            </div>
        `).appendTo(novoItem)
        $(novoItem).appendTo('ul')
        $(novoItem).fadeIn(5000)
        $('#end-img-nova').val('')
    })
})