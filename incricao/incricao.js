document.addEventListener("DOMContentLoaded", function() {
    const idadeSelect = document.getElementById("idade");
    const telefoneResponsavelGroup = document.getElementById("telefone-responsavel-group");
    const telefoneResponsavelInput = document.getElementById("telefone-responsavel");
    const confirmationBox = document.getElementById("confirmation-box");
    const confirmationMessage = document.getElementById("confirmation-message");

    // Função para mostrar/ocultar o campo de telefone do responsável
    idadeSelect.addEventListener("change", function() {
        if (idadeSelect.value === "menor") {
            telefoneResponsavelGroup.style.display = "block"; // Mostrar
            telefoneResponsavelInput.setAttribute("required", "required"); // Tornar obrigatório
        } else {
            telefoneResponsavelGroup.style.display = "none"; // Ocultar
            telefoneResponsavelInput.removeAttribute("required"); // Remover obrigatoriedade
        }
    });

    // Lógica de envio do formulário
    const form = document.getElementById("inscricao-form");
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Evita o envio tradicional do formulário

        // Mensagem de confirmação
        confirmationMessage.textContent = "Inscrição realizada com sucesso!";
        confirmationBox.style.display = "block";

        // Resetando o formulário após a inscrição
        form.reset();
        telefoneResponsavelGroup.style.display = "none"; // Ocultar o campo do telefone do responsável
    });
});
