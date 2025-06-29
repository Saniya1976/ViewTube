import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
    return (
        <wrapper>
            hi there
            how are you?
        </wrapper>
    );
}
function wrapper(children){
    return (
        <div style={{ border: '1px solid black', padding: '10px', margin: '10px' }}>
            {children}
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);