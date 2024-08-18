document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const login = document.getElementById('login').value;
    const senha = document.getElementById('senha').value;

    if (login === 'admin' && senha === 'admin') {
        window.location.href = 'admin.html';
    } else {
        alert('Login ou senha incorretos!');
    }
});
