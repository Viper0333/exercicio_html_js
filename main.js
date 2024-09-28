const form = document.getElementById('form-deposito'); //seleciona o elemnto do formulario atraves do id
const numeroA = document.getElementById('NumeroA'); //seleciona os elemntos input atraves do id
const numeroB = document.getElementById('NumeroB'); //seleciona os elemntos input atraves do id
const errorMessage = document.getElementById('error-message'); //seleciona o elemnto atraves do id

form.addEventListener('submit', function(event) { // cria um ouvinte que ao clicar em enviar executa esta funçao eventos
    
    event.preventDefault(); // Prevenir o envio do formulário sem validação

    const valorA = parseFloat(numeroA.value); // Obter os valores dos campos de número
    const valorB = parseFloat(numeroB.value); // Obter os valores dos campos de número

    if (valorB > valorA) {  // Verificar se o número B é maior que o número A
        
        alert('Formulário válido! Enviando...'); // Se for válido, enviar o formulário ou faz outra ação
        form.submit(); // Submissão padrão
    } else {
        errorMessage.style.display = 'block'; // Mostrar a mensagem de erro
    }
});