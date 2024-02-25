
function criptografar() {
    let textInput = document.querySelector("#input__texto").value.toLowerCase();
    let resultadoCriptografia = textInput.replace(/e/g, "enter")
                                    .replace(/i/g, "imes")
                                    .replace(/a/g, "ai")
                                    .replace(/o/g, "ober")
                                    .replace(/u/g, "ufat");
    document.getElementById('output').innerHTML = resultadoCriptografia;
    document.getElementById('Copiar').style.display = 'inline';
}

function descriptografar() {
    let textInput = document.querySelector("#input__texto").value.toLowerCase();
    let resultadoDescriptografia = textInput.replace(/enter/g, "e")
                                    .replace(/imes/g, "i")
                                    .replace(/ai/g, "a")
                                    .replace(/ober/g, "o")
                                    .replace(/ufat/g, "u");
    document.getElementById('output').innerHTML = resultadoDescriptografia;
    document.getElementById('Copiar').style.display = 'inline';
}

function Copiar() {
    let textcopiado = document.getElementById('output').innerText;
    navigator.clipboard.writeText(textcopiado)
            .then(() => {
            document.getElementById('Copiar').innerText = 'Texto copiado com sucesso!';
             })
        .catch(err => {
          document.getElementById('Copiar').innerText = 'Erro ao copiar texto:';
            });
}

