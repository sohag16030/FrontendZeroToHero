//for new deposit handing
function handleButtonClickForDepositAmount() {
    // Get the input deposit value
    const inputDepositeValue = parseInt(document.getElementById('depositAmount').value) || 0;
    console.log("Deposit Amount::");
    console.log(inputDepositeValue);
    document.getElementById('depositAmount').value = 0;
    
    //Get oldDeposit value
    const oldDepositValue = parseInt(document.getElementById('nowDeposit').innerText.replace('$', '').trim());
    console.log("Old deposit Amount::");
    console.log(oldDepositValue);

    //update the deposite value
    let newDepositAmount = oldDepositValue + inputDepositeValue;
    document.getElementById('nowDeposit').innerText = "$" + newDepositAmount;

    //Get the balance
    const oldBalance = parseInt(document.getElementById('nowBalance').innerText.replace('$', '').trim());
    console.log("Old Balance Amount::");
    console.log(oldBalance);

    //Update the balance
    let newBalance = oldBalance + inputDepositeValue;
    document.getElementById('nowBalance').innerText = "$" + newBalance;
    console.log("newBalance Amount::");
    console.log(newBalance);
}

//for new withdraw handing
function handleButtonClickForWithDrawAmount() {
    //Get input withDraw amout
    const inputWithdrawValue = parseInt(document.getElementById('withdrawValue').value) || 0;
    console.log("withdraw Amount::");
    console.log(inputWithdrawValue);
    document.getElementById('withdrawValue').value = 0;

    //Get oldWithDraw Value
    const oldWithDrawValue = parseInt(document.getElementById('nowWithdraw').innerText.replace('$', '').trim());
    console.log("Old WithDrawValue Amount::");
    console.log(oldWithDrawValue);

    //update the WithDraw Value
    let newwithdrawValue = oldWithDrawValue + inputWithdrawValue;
    document.getElementById('nowWithdraw').innerText = "$" + newwithdrawValue;

    //Get the balance
    const oldBalance = parseInt(document.getElementById('nowBalance').innerText.replace('$', '').trim());
    console.log("Old Balance Amount::");
    console.log(oldBalance);

    //Update the balance
    let newBalance = oldBalance - inputWithdrawValue;
    document.getElementById('nowBalance').innerText = "$" + newBalance;
    console.log("newBalance Amount::");
    console.log(newBalance);
}