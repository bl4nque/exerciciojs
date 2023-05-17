const form = document.getElementById('check'); 

form.addEventListener('submit', function(e){
    e.preventDefault();

verificaNum();
resetaValor();
})



function verificaNum() {
    
    const numeroA = + document.getElementById('n1').value
    const numeroB = + document.getElementById('n2').value

    if(numeroA > numeroB){
        alert(`Você digitou ${numeroA} no primeiro campo, ele é maior que ${numeroB} que foi digitado no segundo campo`)
    } else if(numeroA < numeroB){
        alert(`Você digitou ${numeroA} no primeiro campo, ele é menor que ${numeroB} que foi digitado no segundo campo`)
    } else{
        alert(`Voce digitou dois numeros iguais!`)
    }
}

function resetaValor () {
    const numeroA = document.getElementById('n1')
    const numeroB = document.getElementById('n2')
    
    numeroA.value = ''
    numeroB.value = ''
}