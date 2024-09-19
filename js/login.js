// console.log('button clicking file added');

// form submit reloading the page google search
document.getElementById('btn-login').addEventListener('click', function(event){
    event.preventDefault();
    console.log('login button click');
    const phoneNumber = document.getElementById('phone-number').value;
    console.log(phoneNumber);
    
})

