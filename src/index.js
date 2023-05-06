import React from 'react';
import ReactDOM from 'react-dom/client';
import './Styles/normalize.css';
import './Styles/index.sass';
import App from './Components/App/App';
import QuintaDB from './Services/QuintaDB';

const DB = new QuintaDB();

const store = {
    DB,
};

export const Context = React.createContext(store);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Context.Provider value={store}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Context.Provider>
);
