function sendMessage() {
    // Получить введенный текст сообщения
    var messageInput = document.getElementById("message-input");
    var messageText = messageInput.value;

    // Создать элемент для отображения сообщения
    var messageElement = document.createElement("div");
    messageElement.innerText = messageText;

    // Добавить элемент сообщения в контейнер сообщений
    var messageContainer = document.getElementById("message-container");
    messageContainer.appendChild(messageElement);

    // Очистить поле ввода
    messageInput.value = "";
}