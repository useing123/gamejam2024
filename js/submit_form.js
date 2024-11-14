document.getElementById('teamRegistrationForm').addEventListener('submit', async function (event) {
    event.preventDefault();  // Останавливает стандартное поведение формы

    const formData = new FormData(this);  // Собирает данные из формы

    try {
        const response = await fetch("https://script.google.com/macros/s/AKfycbzpIV4eri1K_RDsf8GoUGo-XjU9jL7sRvkGvcBfkrz3qz3WHnoVKRM3XZNr6yIjHIQX/exec", {
            method: "POST",
            body: formData  // Передача данных в виде FormData
        });

        if (response.ok) {
            // Показывает сообщение об успешной отправке
            document.querySelector('.win_content').style.display = 'none';
            document.querySelector('.win_stasus').style.display = 'block';
        } else {
            console.error("Ошибка при отправке данных:", response.status, response.statusText);
            alert("Ошибка при отправке данных. Пожалуйста, попробуйте еще раз.");
        }
    } catch (error) {
        console.error("Ошибка сети:", error);
        alert("Ошибка сети. Пожалуйста, проверьте ваше соединение и попробуйте снова.");
    }
});