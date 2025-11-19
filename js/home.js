document.getElementById('add-money-btn').addEventListener('click', function(event){
    event.preventDefault();
    const bank = document.getElementById('bankName').value;
    const accountNumber = document.getElementById('accountNumber').value;
    const amount = parseInt(document.getElementById('addAmount').value);
    const pin = document.getElementById('addPin').value;
    const availableBalance = parseInt(document.getElementById('available-balance').innerText);
    const totalNewAvailableBalance = amount + availableBalance;
    console.log(totalNewAvailableBalance)
    document.getElementById('available-balance').innerText = totalNewAvailableBalance;
})