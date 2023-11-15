
var phnPrice = 0;
var casePrice = 0;
function handleButtonClickForIncreaseCount() {
    //Get old value
    const oldValue = parseInt(document.getElementById('showCount').innerText.replace('$', '').trim());
    console.log("Old Count::");
    console.log(oldValue);

    //update the deposite value
    let newCount = oldValue + 1;
    document.getElementById('showCount').innerText = newCount;

    //Get the balance
    const oldCost = parseInt(document.getElementById('showPhnPrice').innerText.replace('$', '').trim());
    console.log("Old  oldCost::");
    console.log(oldCost);

    //Update the balance
    let newPrice = newCount * 1200;
    document.getElementById('showPhnPrice').innerText = "$" + newPrice;
    console.log("newPrice Amount::");
    console.log(newPrice);
    phnPrice = newPrice;
    console.log("phnPrice::" + phnPrice);
}

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