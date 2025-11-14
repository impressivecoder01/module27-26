// login button function
document.getElementById('login-btn').addEventListener('click',function(event){
    event.preventDefault()
    const  mobileNumber = 11111111111;
    const pin = 2111;
    const mobileNumberValue = parseInt(document.getElementById('mobile-number').value) 
    const pinNumberValue = parseInt(document.getElementById('pin-number').value)
    
    if(mobileNumber === mobileNumberValue && pin=== pinNumberValue){
        window.location.href= "home.html"
    }
    else{
        alert('Invalid Credentials')
    }
})