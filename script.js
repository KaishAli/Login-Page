document.getElementById('signinForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const rememberMe = document.getElementById('rememberMe').checked;

    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Remember me:', rememberMe);

    // You can use this data to send it to your server or validate it locally
});