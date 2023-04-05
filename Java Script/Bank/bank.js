document.getElementById('btn-submit').addEventListener('click', function () {
    const Email = document.getElementById('email');
    const userEmail = Email.value;
    const Pass = document.getElementById('password');
    const userPassword = Pass.value;
    if(userEmail=== 'mahbub@.com' && userPassword === '123321'){
        window.location.href='bank2.html'
    }
    else{
        alert('invalid user')
    }
})
