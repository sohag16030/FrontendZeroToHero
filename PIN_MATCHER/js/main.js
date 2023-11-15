function appendToDisplay(value) {
    document.getElementById('display').textContent += value;
}

function clearDisplay() {
    document.getElementById('display').textContent = '';
}

function deleteLast() {
    var display = document.getElementById('display');
    display.textContent = display.textContent.slice(0, -1);
}