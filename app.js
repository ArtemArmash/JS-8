document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const surname = document.getElementById('surname').value;
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const login = document.getElementById('login').value;
    const password = document.getElementById('password').value;
    
    document.getElementById('output').innerHTML = `
        <p><strong>Прізвище:</strong> ${surname}</p>
        <p><strong>Ім'я:</strong> ${name}</p>
        <p><strong>Вік:</strong> ${age}</p>
        <p><strong>Логін:</strong> ${login}</p>
        <p><strong>Пароль:</strong> ${password}</p>
    `;
});