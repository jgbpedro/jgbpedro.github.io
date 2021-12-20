window.onload = () => {
    const form = document.getElementById("contactForm");
    form.onsubmit = (event) => {
        event.preventDefault();
         $("#submit-loader").show();
        const data = new FormData(event.target);
        fetch(event.target.action, {
            method: form.method,
            body: data,
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            $("#submit-loader").hide();
            $("#message-success").show();
        form.reset()
        }).catch(error => {
            $("#message-success").hide();
            $("#submit-loader").hide();
            $("message-warning").html('Erro ao enviar o formulário. Você pode entrar em contato também através do e-mail ou whatsapp')
            $("message-warning").show();
        });
    }
}
