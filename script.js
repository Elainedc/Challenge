

function criptografar() {
    let textInput = document.querySelector("#input__texto").value;
    let resultadoCriptografia = textInput.replace(/e/g, "enter")
                                    .replace(/i/g, "imes")
                                    .replace(/a/g, "ai")
                                    .replace(/o/g, "ober")
                                    .replace(/u/g, "ufat");
    document.getElementById('output').innerHTML = resultadoCriptografia;
}

function descriptografar() {
    let textInput = document.querySelector("#input__texto").value;
    let resultadoCriptografia = textInput.replace(/enter/g, "e")
                                    .replace(/imes/g, "i")
                                    .replace(/ai/g, "a")
                                    .replace(/ober/g, "o")
                                    .replace(/ufat/g, "u");
    document.getElementById('output').innerHTML = resultadoCriptografia;
}

function copiar() {
    let textoCop = document.getElementById('input__texto');

    textoCop.select();
    document.execCommand('copy');
    alert('O texto foi copiado!');
}

