async function buscaEndereco(cep){
    const mensagemErro = document.getElementById('erro');
    mensagemErro.innerHTML = "";
    try {

        const consultaCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        const consultaCEPConvertida = await consultaCep.json();
        if(consultaCEPConvertida.erro){
            throw Error ('CEP não existente');

        }

        let cidade = document.getElementById('cidade');
        let logradouro = document.getElementById('endereco');
        let estado = document.getElementById('estado');

        cidade.value = consultaCEPConvertida.localidade;
        logradouro.value = consultaCEPConvertida.logradouro;
        estado.value = consultaCEPConvertida.uf

        console.log(consultaCEPConvertida);
    } catch (erro) {
        mensagemErro.innerHTML = `<p>CEP inválido. Tente novamente!</p>`
        console.log(erro);
    }

}

const cep = document.getElementById('cep')

cep.addEventListener("focusout", () => buscaEndereco(cep.value))