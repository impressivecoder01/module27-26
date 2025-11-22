// function to get input values
function getInputValueNumber(id){
    const inputFieldValueNumber = parseInt(document.getElementById(id).value);
    // console.log(inputFieldValueNumber)
    return inputFieldValueNumber;
}
// function to get input text
function getInputTextNumber (id){
    const inputFieldValueNumber = parseInt(document.getElementById(id).innerText);
    return inputFieldValueNumber;
}
// function to set inner text
function setInnerText(value){
    document.getElementById('available-balance').innerText = value
}
document.getElementById('add-money-btn').addEventListener('click', function(event){
    event.preventDefault();
    const validPin = 2111;
    const bank = getInputValueNumber('bankName')
    // console.log(bank)
    // const bank = document.getElementById('bankName').value;
    // const accountNumber = document.getElementById('accountNumber').value;
    const accountNumber = getInputValueNumber('accountNumber');
    // const amount = parseInt(document.getElementById('addAmount').value);
    const amount = getInputValueNumber('addAmount')
    // const pin = parseInt(document.getElementById('addPin').value);
    const pin = getInputValueNumber('addPin')
    // const availableBalance = parseInt(document.getElementById('available-balance').innerText);
    const availableBalance = getInputTextNumber('available-balance');
    if(accountNumber.length < 11){
        alert('Provide a valid account number')
        return;
    }
    if(pin === validPin){
        const totalNewAvailableBalance = amount + availableBalance;
    // console.log(totalNewAvailableBalance)
    // document.getElementById('available-balance').innerText = totalNewAvailableBalance;
    setInnerText(totalNewAvailableBalance)
    }
    else{
        alert('provide a valid pin please')
    }
    
    
})

// toggling feature
// document.getElementById('add-money-main-div').addEventListener('click', function(event){
//     event.preventDefault();
//     document.getElementById('cash-out-parent').style.display = 'none'
//     document.getElementById('add-money-parent').style.display = 'block'
// })
// document.getElementById('cash-out-main-div').addEventListener('click', function(event){
//     event.preventDefault()
//     document.getElementById('cash-out-parent').style.display = 'block'
//     document.getElementById('add-money-parent').style.display = 'none'
// })

// reuseable toggle feature
// add money start
document.getElementById('add-money-main-div').addEventListener('click',function(){
    const allParentDivs = document.getElementsByClassName('form');
    for(const allParentDiv of allParentDivs){
        allParentDiv.style.display = 'none'
        // console.log(allParentDiv)
    }
    document.getElementById('add-money-parent').style.display = 'block'
})
// add money finished
// cash out start
document.getElementById('cash-out-main-div').addEventListener('click',function(){
    const allParentDivs = document.getElementsByClassName('form');
    for(const allParentDiv of allParentDivs){
        allParentDiv.style.display = 'none'
        // console.log(allParentDiv)
    }
    document.getElementById('cash-out-parent').style.display = 'block'
})
// cash out finished
// transfer start
document.getElementById('transfer-main-div').addEventListener('click',function(){
    const allParentDivs = document.getElementsByClassName('form');
    for(const allParentDiv of allParentDivs){
        allParentDiv.style.display = 'none'
        // console.log(allParentDiv)
    }
    document.getElementById('head').style.display = 'block'
})
// transfer end
// toggle reuseable function finished

// cash out function
document.getElementById('cash-out-btn').addEventListener('click', function(event){
    event.preventDefault();
    const validPin = 2111;
    // const pin = parseInt(document.getElementById('cash-out-pin').value);
    const pin = getInputValueNumber('cash-out-pin')
    // const amount = parseInt(document.getElementById('withdraw-amount').value);
    const amount = getInputValueNumber('withdraw-amount')
    // const availableBalance = parseInt(document.getElementById('available-balance').innerText)
    const availableBalance = getInputTextNumber('available-balance')
    if(pin === validPin){

        const totalNewAvailableBalance = availableBalance - amount;
        // console.log(totalNewAvailableBalance)
        // document.getElementById('available-balance').innerText= totalNewAvailableBalance
        setInnerText(totalNewAvailableBalance)
    }
    else{
        alert('Wrong Pin')
    }
})