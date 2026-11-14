// Cotação efetiva real: câmbio base JP (0,0375) + ~7,61% de IOF/spread do cartão
const COTACAO_IENE = 0.0404;

document.addEventListener('DOMContentLoaded', () => {
    const spanCotacao = document.getElementById('textoCotacao');
    if (spanCotacao) {
        spanCotacao.textContent = "R$ " + COTACAO_IENE.toFixed(4).replace('.', ',');
    }
});

function calcular() {
    // Pega apenas o valor do item que a pessoa digitou
    let valorIene = parseFloat(document.getElementById('valorIene').value) || 0;

    // 1. Taxa fixa de compra da proxy (100 yenes)
    let taxaFixaProxy = 100;

    // 2. Taxa de pagamento no Cartão de Crédito (7,65% sobre item + 100)
    let taxaVariavelProxy = Math.round((valorIene + taxaFixaProxy) * 0.0765);

    // 3. Soma tudo em Iene
    let totalIene = valorIene + taxaFixaProxy + taxaVariavelProxy;

    // 4. Converte para Reais já considerando câmbio da plataforma + spread + IOF
    let custoProxyReais = totalIene * COTACAO_IENE;

    // 5. Soma a taxa fixa da Dark Bloom (R$ 10,00)
    let suaTaxa = 10.00;
    let valorFinal = custoProxyReais + suaTaxa;

    // 6. Mostra o resultado final na tela
    let resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = "Valor Final: <br> R$ " + valorFinal.toFixed(2).replace('.', ',');
}
