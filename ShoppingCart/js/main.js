
var subTotal = 0;
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

    //Update the subtotal
    subTotal = subTotal + newPrice;
    document.getElementById('subtotalValue').innerText = "$" + subTotal;
    console.log("Update the subtotalValue::");
    console.log(subTotal);
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

    //Update the subtotal
    subTotal = subTotal - newPrice;
    document.getElementById('subtotalValue').innerText = "$" + subTotal;
    console.log("Update the subtotalValue::");
    console.log(subTotal);
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

     //Update the subtotal
     subTotal = subTotal + newPrice;
     document.getElementById('subtotalValue').innerText = "$" + subTotal;
     console.log("Update the subtotalValue::");
     console.log(subTotal);
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

     //Update the subtotal
     subTotal = subTotal - newPrice;
     document.getElementById('subtotalValue').innerText = "$" + subTotal;
     console.log("Update the subtotalValue::");
     console.log(subTotal);
}
