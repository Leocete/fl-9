let userLogin = prompt('Please, enter your login','Login');

if (userLogin === 'User') {
    let userPassword = prompt('Enter the password');
        if (userPassword === 'SuperUser') {
            alert(new Date().getHours() < 20 ? 'Good day!' : 'Good evening!')
        }
} else if (userLogin === null || userLogin === '') {
    alert('Canceled');        
} else if (userLogin.length < 4) {
    alert('I don\'t know any users having name length less than 4 symbols');
} else {
    alert('I don’t know you');
}    

