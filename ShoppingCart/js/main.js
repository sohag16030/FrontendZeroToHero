
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


function handleButtonClickForDecreaseCount() {
    //Get old value
    const oldValue = parseInt(document.getElementById('showCount').innerText.replace('$', '').trim());
    console.log("Old Count::");
    console.log(oldValue);

    //update the deposite value
    let newCount = oldValue - 1;
    if (newCount < 0) newCount = 0;
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

function handleButtonClickForIncreaseCaseCount() {
    //Get old value
    const oldValue = parseInt(document.getElementById('showCountCase').innerText.replace('$', '').trim());
    console.log("Old Count::");
    console.log(oldValue);

    //update the deposite value
    let newCount = oldValue + 1;
    document.getElementById('showCountCase').innerText = newCount;

    //Get the balance
    const oldCost = parseInt(document.getElementById('showBackPadPrice').innerText.replace('$', '').trim());
    console.log("Old  oldCost::");
    console.log(oldCost);

    //Update the balance
    let newPrice = newCount * 500;
    document.getElementById('showBackPadPrice').innerText = "$" + newPrice;
    console.log("newPrice Amount::");
    console.log(newPrice);

    casePrice = newPrice;
    console.log("casePrice::" + casePrice);
}


function handleButtonClickForDecreaseCaseCount() {
    //Get old value
    const oldValue = parseInt(document.getElementById('showCountCase').innerText.replace('$', '').trim());
    console.log("Old Count::");
    console.log(oldValue);

    //update the deposite value
    let newCount = oldValue - 1;
    if (newCount < 0) newCount = 0;
    document.getElementById('showCountCase').innerText = newCount;

    //Get the balance
    const oldCost = parseInt(document.getElementById('showBackPadPrice').innerText.replace('$', '').trim());
    console.log("Old  oldCost::");
    console.log(oldCost);

    //Update the balance
    let newPrice = newCount * 500;
    document.getElementById('showBackPadPrice').innerText = "$" + newPrice;
    console.log("newPrice Amount::");
    console.log(newPrice);

    casePrice = newPrice;
    console.log("casePrice::" + casePrice);
}

function subTotalCalc() {
    let subTotal = phnPrice + casePrice;
    let tax = (5 * subTotal) / 100;
    let total = subTotal + tax;

    document.getElementById('subtotalValue').innerHTML  = "<strong>$" + subTotal + "</strong>";
    console.log("subtotal Value::");
    console.log(subTotal);

    document.getElementById('taxValue').innerHTML  = "<strong>$" + tax + "</strong>";
    console.log("tax Value::");
    console.log(tax);

    document.getElementById('totalValue').innerHTML  = "<strong>$" + total + "</strong>";
    console.log("total Value::");
    console.log(total);
}