document.getElementById('add-money-btn').addEventListener('click', function(event){
    event.preventDefault();
    const validPin = 2111;
    const bank = document.getElementById('bankName').value;
    const accountNumber = document.getElementById('accountNumber').value;
    const amount = parseInt(document.getElementById('addAmount').value);
    const pin = parseInt(document.getElementById('addPin').value);
    const availableBalance = parseInt(document.getElementById('available-balance').innerText);
    if(accountNumber.length < 11){
        alert('Provide a valid account number')
        return;
    }
    if(pin === validPin){
        const totalNewAvailableBalance = amount + availableBalance;
    // console.log(totalNewAvailableBalance)
    document.getElementById('available-balance').innerText = totalNewAvailableBalance;
    }
    else{
        alert('provide a valid pin please')
    }
    
    
})