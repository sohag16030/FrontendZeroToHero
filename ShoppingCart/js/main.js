
var subTotal1 = 0;
var subTotal2 = 0;
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
    subTotal1 = 0;
    subTotal1 = subTotal2 + newPrice;
    document.getElementById('subtotalValue').innerText = "$" + subTotal1;
    console.log("Update the handleButtonClickForIncreaseCount subtotalValue1::");
    console.log(subTotal1);
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
    subTotal1 = 0;
    subTotal1 = subTotal2 - newPrice;
    document.getElementById('subtotalValue').innerText = "$" + subTotal1;
    console.log("Update the handleButtonClickForDecreaseCount subtotalValue1::");
    console.log(subTotal1);
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
     subTotal2 = 0;
     subTotal2 = subTotal1 + newPrice;
     document.getElementById('subtotalValue').innerText = "$" + subTotal2;
     console.log("Update the handleButtonClickForIncreaseCaseCount subtotalValue2::");
     console.log(subTotal2);
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
     subTotal2 = 0;
     subTotal2 = subTotal1 - newPrice;
     document.getElementById('subtotalValue').innerText = "$" + subTotal2;
     console.log("Update the handleButtonClickForDecreaseCaseCount subtotalValue2::");
     console.log(subTotal2);
}
