function calcular() {
    // Pega os valores que a pessoa digitou
    let valorIene = parseFloat(document.getElementById('valorIene').value) || 0;
    let cotacao = parseFloat(document.getElementById('cotacaoIene').value) || 0;

    // 1. Taxa fixa da proxy (100 yenes)
    let taxaFixaProxy = 100;

    // 2. Taxa variável da proxy (9% sobre o valor do item + 100)
    let taxaVariavelProxy = Math.round((valorIene + taxaFixaProxy) * 0.09);

    // 3. Soma tudo em Iene
    let totalIene = valorIene + taxaFixaProxy + taxaVariavelProxy;

    // 4. Converte para Reais usando a cotação digitada
    let custoProxyReais = totalIene * cotacao;

    // 5. Soma a sua taxa fixa da CEG (R$ 10,00)
    let suaTaxa = 10.00;
    let valorFinal = custoProxyReais + suaTaxa;

    // 6. Mostra o resultado detalhado na tela
    let resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = 
        "<span style='font-size: 14px; color: #666;'>Custo na Proxy: R$ " + custoProxyReais.toFixed(2).replace('.', ',') + "</span><br>" +
        "<span style='font-size: 14px; color: #666;'>Sua Taxa: R$ 10,00</span><br><br>" +
        "Valor Final: <br> R$ " + valorFinal.toFixed(2).replace('.', ',');
}