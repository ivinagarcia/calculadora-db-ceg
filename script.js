function calcular() {
    // Pega apenas o valor do item que a pessoa digitou
    let valorIene = parseFloat(document.getElementById('valorIene').value) || 0;

    // Cotação fixa do Iene (não muda)
    let cotacao = 0.0324;

    // 1. Taxa fixa da proxy (100 yenes)
    let taxaFixaProxy = 100;

    // 2. Taxa variável da proxy (9% sobre o valor do item + 100)
    let taxaVariavelProxy = Math.round((valorIene + taxaFixaProxy) * 0.09);

    // 3. Soma tudo em Iene
    let totalIene = valorIene + taxaFixaProxy + taxaVariavelProxy;

    // 4. Converte para Reais usando a cotação fixa
    let custoProxyReais = totalIene * cotacao;

    // 5. Soma a sua taxa fixa (R$ 10,00)
    let suaTaxa = 10.00;
    let valorFinal = custoProxyReais + suaTaxa;

    // 6. Mostra APENAS o resultado final na tela
    let resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = "Valor Final: <br> R$ " + valorFinal.toFixed(2).replace('.', ',');
}
