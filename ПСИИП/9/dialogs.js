function showAlert() {
    alert("Это простое информационное сообщение!");
}

function showConfirm() {
    let result = confirm("Вы уверены, что хотите продолжить?");
    if (result) {
        alert("Вы нажали OK");
    } else {
        alert("Вы нажали Отмена");
    }
}

function showPrompt() {
    let name = prompt("Пожалуйста, введите ваше имя:", "Гость");
    if (name != null && name != "") {
        alert("Привет, " + name + "!");
    } else {
        alert("Вы не ввели имя.");
    }
}