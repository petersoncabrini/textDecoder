function criptografar() {
    var texto = document.getElementById('text').value

    var codes = {
        a: "ai",
        e: "enter",
        i: "imes",
        o: "ober",
        u: "ufat"
    }

    var textoCriptografado = texto.replace(/e|i|a|o|u/g, (matched) => {
        return codes[matched] 
    })
    console.log (textoCriptografado)

    document.getElementById("msgFound").innerHTML = "Mensagem Criptografada!";
    document.getElementById("textFound").innerHTML = (textoCriptografado)
}

function desCriptografar() {
    var texto = document.getElementById('text').value

    var codes = {
        ai: "a",
        enter: "e",
        imes: "i",
        ober: "o",
        ufat: "u"
    }

    var textoDesCriptografado = texto.replace(/enter|imes|ai|ober|ufat/g, (matched) => {
        return codes[matched] 
    })
    console.log (textoDesCriptografado)

    document.getElementById("msgFound").innerHTML = "Mensagem Descriptografada!";
    document.getElementById("textFound").innerHTML = (textoDesCriptografado)
}

function limpar() {
    document.getElementById("msgFound").innerHTML = "Nenhuma mensagem encontrada!";
    document.getElementById("textFound").innerHTML = "Digite um texto que voce deseja criptografar ou descriptografar"
    document.getElementById("text").value = ""
}

function copiar () {
        var copyText = document.getElementById("textFound").innerHTML
        navigator.clipboard.writeText(copyText).then(() => {
            // Alert the user that the action took place.
            // Nobody likes hidden stuff being done under the hood!
            alert("Mensagem Copiada");
})
}
