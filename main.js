const form = document.getElementById('check'); 

form.addEventListener('submit', function(e){
    e.preventDefault();

verificaNum();
resetaValor();
})



function verificaNum() {
    
    const numeroA = + document.getElementById('n1').value
    const numeroB = + document.getElementById('n2').value
    const atualizaP = document.getElementById('recebe')
    
    if(numeroA > numeroB){
        atualizaP.innerHTML = `O primeiro valor que você digitou foi: ${numeroA}, ele é maior que o segundo valor: ${numeroB}`
    } else if(numeroB > numeroA) {
        atualizaP.innerHTML = `O primeiro valor que você digitou foi: ${numeroA}, ele é menor que o segundo valor: ${numeroB}`
    } else {
        atualizaP.innerHTML = 'Os valores são iguais'
    };
    

}

function resetaValor () {
    const numeroA = document.getElementById('n1')
    const numeroB = document.getElementById('n2')
    
    numeroA.value = ''
    numeroB.value = ''
}