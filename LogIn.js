// Load React and ReactDOM from the global scope
const { createElement, useState } = window.React;
const { render } = window.ReactDOM;

// Login Screen Component
function LoginScreen() {
    const [message, setMessage] = useState('');

    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission behavior

        // Get username and password from the form
        const username = event.target.username.value;
        const password = event.target.password.value;

        // Send data to the server
        fetch('http://127.0.0.1:5000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Invalid credentials');
                }
                return response.json();
            })
            .then((data) => {
                if (data.status === 'success') {
                    // Redirect to home.js
                    window.location.href = './home.html'; // Make sure home.html is set up to include home.js
                } else {
                    setMessage(data.message); // Show error message
                }
            })
            .catch((error) => {
                setMessage(error.message); // Show error message
            });
    };

    return createElement(
        'div',
        { className: 'login-container' },
        createElement('h1', { className: 'title' }, 'Welcome Back'),
        createElement(
            'form',
            { className: 'login-form', onSubmit: handleSubmit },
            createElement('label', { htmlFor: 'username' }, 'Username'),
            createElement('input', {
                type: 'text',
                id: 'username',
                name: 'username',
                placeholder: 'Enter your username',
                required: true,
            }),
            createElement('label', { htmlFor: 'password' }, 'Password'),
            createElement('input', {
                type: 'password',
                id: 'password',
                name: 'password',
                placeholder: 'Enter your password',
                required: true,
            }),
            createElement(
                'button',
                { type: 'submit', className: 'submit-button' },
                'Login'
            )
        ),
        message && createElement('p', { className: 'message' }, message)
    );
}

// Render Application
render(
    createElement(LoginScreen),
    document.getElementById('root')
);
