// Função para enviar o pedido para o WhatsApp
function enviarPedidoWhatsapp() {
    // Captura dos dados do formulário
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const waterBrand = document.getElementById('waterBrand').value;
    const waterQuantity = parseInt(document.getElementById('waterQuantity').value);
    const gasQuantity = parseInt(document.getElementById('gasQuantity').value);

    // Definição dos preços da água por marca
    const waterPrices = {
        'ilha_bela': 6.50,
        'mar_doce': 8.00,
        'floratta': 7.50
    };

    // Verifica o preço da água selecionada
    const waterPrice = waterPrices[waterBrand];

    // Calcula o total do pedido
    const waterTotal = waterQuantity * waterPrice;
    const gasTotal = gasQuantity * 100.00;
    const totalPrice = waterTotal + gasTotal;

    // Monta a mensagem do pedido
    const pedidoContent = `
        Pedido de ${name}:
        ${waterQuantity} garrafas de ${waterBrand.replace('_', ' ')} - Total: R$ ${totalPrice.toFixed(2)}
        Endereço: ${address}
        Telefone: ${phoneNumber}
    `;

    // Abre o link do WhatsApp com a mensagem do pedido
    const whatsappLink = `https://wa.me/98996010129?text=${encodeURIComponent(pedidoContent)}`;
    window.open(whatsappLink, '_blank');
}

// Função para gerar o recibo
function gerarRecibo() {
    // Captura dos dados do formulário
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const waterBrand = document.getElementById('waterBrand').value;
    const waterQuantity = parseInt(document.getElementById('waterQuantity').value);
    const gasQuantity = parseInt(document.getElementById('gasQuantity').value);

    // Definição dos preços da água por marca
    const waterPrices = {
        'ilha_bela': 6.50,
        'mar_doce': 8.00,
        'floratta': 7.50
    };

    // Verifica o preço da água selecionada
    const waterPrice = waterPrices[waterBrand];

    // Calcula o total do pedido
    const waterTotal = waterQuantity * waterPrice;
    const gasTotal = gasQuantity * 100.00;
    const totalPrice = waterTotal + gasTotal;

    // Gera o conteúdo do recibo
    const receiptContent = `
        Planeta Água
        Rua do Ribeiro, 287 centro
        CNPJ: 20.070.673/0001-25

        Nome/Empresa: ${name}
        Endereço: ${address}
        Telefone: ${phoneNumber}

        Pedido:
        ${waterQuantity} garrafas de ${waterBrand.replace('_', ' ')} - Preço Unitário: R$ ${waterPrice.toFixed(2)} - Total: R$ ${waterTotal.toFixed(2)}
        ${gasQuantity} botijões de gás - Total: R$ ${(gasTotal).toFixed(2)}

        Total do Pedido: R$ ${totalPrice.toFixed(2)}
        
        ____________________________
        Assinatura do Entregador
    `;

    // Cria um elemento de link para fazer o download do recibo
    const downloadLink = document.createElement('a');
    downloadLink.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(receiptContent));
    downloadLink.setAttribute('download', 'recibo.txt');
    downloadLink.style.display = 'none';
    document.body.appendChild(downloadLink);

    // Simula um clique no link de download
    downloadLink.click();

    // Remove o link após o download
    document.body.removeChild(downloadLink);
}

// Adiciona event listeners aos botões
document.getElementById('enviarPedidoButton').addEventListener('click', enviarPedidoWhatsapp);
document.getElementById('gerarReciboButton').addEventListener('click', gerarRecibo);
