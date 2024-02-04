let saldoPista = 100
function comprar(){
    let tipo = document.getElementById('tipo-ingresso');
    let qtd = parseInt(document.getElementById('qtd').value);
    if(tipo.value == 'pista') {
        compraPista(qtd);
    }
    if(tipo.value == 'superior') {
        compraSuperior(qtd);
    }
    if(tipo.value == 'inferior') {
        compraInferior(qtd);
    }
}

function compraPista(qtd){
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
    if(qtd > qtdPista){
        alert('Qauntidade indisponível para tipo pista');
    } else {
        qtdPista = qtdPista-qtd;
        document.getElementById('qtd-pista').textContent = qtdPista;
        alert('Compra realizada com sucesso!');
    }
}

function compraSuperior(qtd){
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    if(qtd > qtdSuperior){
        alert('Qauntidade indisponível para tipo Cadeira superior');
    } else {
        qtdSuperior = qtdSuperior-qtd;
        document.getElementById('qtd-superior').textContent = qtdSuperior;
        alert('Compra realizada com sucesso!');
    }
}

function compraInferior(qtd){
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    if(qtd > qtdInferior){
        alert('Qauntidade indisponível para tipo Cadeira inferior');
    } else {
        qtdInferior = qtdInferior-qtd;
        document.getElementById('qtd-inferior').textContent = qtdInferior;
        alert('Compra realizada com sucesso!');
    }
}