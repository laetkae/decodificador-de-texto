function criptografar() {
    var textoOriginal = document.getElementById('input-texto').value;
    var textoCriptografado = '';
    textoCriptografado = textoOriginal.replace(/e/g, 'enter')
                                     .replace(/i/g, 'imes')
                                     .replace(/a/g, 'ai')
                                     .replace(/o/g, 'ober')
                                     .replace(/u/g, 'ufat');
    document.getElementById('mensagem-criptografada').textContent = textoCriptografado;
    document.getElementById('input-texto').value = '';
    document.getElementById('instrucao').style.display = 'none';
    document.getElementById('img').style.display = 'none';
}

function descriptografar() {
    var textoCriptografado = document.getElementById('input-texto').value;
    var textoDescriptografado = '';
    textoDescriptografado = textoCriptografado.replace(/enter/g, 'e')
                                               .replace(/imes/g, 'i')
                                               .replace(/ai/g, 'a')
                                               .replace(/ober/g, 'o')
                                               .replace(/ufat/g, 'u');
    document.getElementById('mensagem-criptografada').textContent = textoDescriptografado;
    document.getElementById('input-texto').value = '';
    document.getElementById('instrucao').style.display = 'none';
    document.getElementById('img').style.display = 'none';
}

function copiar() {
    var textoCopiado = document.getElementById('mensagem-criptografada').textContent;
    navigator.clipboard.writeText(textoCopiado)
        .then(function() {
            alert('Texto copiado!');
        })
        .catch(function(err) {
            console.error('Erro ao copiar: ', err);
        });
}