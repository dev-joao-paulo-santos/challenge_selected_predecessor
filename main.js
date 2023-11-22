var btn = document.getElementById('click-me')
var ancestors = document.getElementById('ancestors')
var data = document.getElementById('content')
var result = document.getElementById('resultado')
var reload = document.getElementById('reload')

btn.addEventListener('click', () => {
    setTimeout(()=> {btn.style.marginLeft = '200vw'
        setTimeout(()=> { data.style.marginTop = '-10vh'}, 600)}, 500);

    var entrada = prompt("Digite um número")
    var valorDesejado = parseInt(entrada);

    function findAncestors(value) {
        let soma = 0

        console.log("Valor Digitado: " + value)
        alert("Valor Digitado: " + value)
        if (!isNaN(value) && value > 0) {
            for (var i = value - 1; i > 0; i--) {
                if (i % 5 === 0) {
                    console.log("Antecessor divisível por 5: " + i);
                    soma = soma + i
                    var p = document.createElement('p')
                    p.textContent = "Antecessor divisível por 5: " + i
                    ancestors.appendChild(p)
                }
                else if (i % 3 === 0) {
                    console.log("Antecessor divisível por 3: " + i);
                    soma = soma + i
                    var p = document.createElement('p')
                    p.textContent = "Antecessor divisível por 3: " + i
                    ancestors.appendChild(p)
                }
            }
            var text = "A soma dos antecessores de " + value + " que são divisíveis por 5 ou 3 é igual a " + soma
            return text;
        } 
        else
        {alert("Digite um número válido");location.reload()}
    }
    ancestors.innerHTML = ''
    var encontrar = findAncestors(valorDesejado)
    console.log(encontrar)
    result.innerHTML = "<h3>" + encontrar + "</h3>"
    reload.style.visibility = 'visible'
    data.style.visibility = 'visible'
})
reload.addEventListener('click', ()=>{location.reload()})
