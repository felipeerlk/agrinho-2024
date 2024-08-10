document.addEventListener('DOMContentLoaded', () => {
    const licaos = document.querySelectorAll('.licao-item');

    licaos.forEach((licao, index) => {
        licao.querySelector('.licao-header').addEventListener('click', () => {
            alternalicao(index + 1);
        });
    });

    function alternalicao(licaonumero) {
        const licaoItem = document.querySelector(`#licao-conteudo-${licaonumero}`).parentElement;
        licaoItem.classList.toggle('ativa');

        const conteudo = licaoItem.getAttribute('conteudo-dados');
        const dadosconteudo = JSON.parse(conteudo);

        const dynamicContent = document.getElementById('conteudo-dinamico');
        dynamicContent.innerHTML = `
            <h2>${dadosconteudo.titulo}</h2>
            <h3>${dadosconteudo.subtitulo}</h3>
            <p>${dadosconteudo.texto}</p>
        `;
    }
});
