import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>
);


//https://ricosp.medium.com/criando-uma-biblioteca-de-componentes-usando-create-react-app-884f2a33cc8c