// Load React and ReactDOM from the global scope
const { createElement } = window.React;
const { render } = window.ReactDOM;

// Home Page Component
function HomePage() {
    return createElement(
        'div',
        { className: 'home-container' },
        createElement('h1', { className: 'welcome-title' }, 'Welcome')
    );
}

// Render Application
render(
    createElement(HomePage),
    document.getElementById('root')
);
