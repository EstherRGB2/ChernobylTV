//index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Components/App';
import {BrowserRouter as Router} from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react'

const domain = process.env.REACT_APP_AUTH0_DOMAIN
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Auth0Provider
domain={domain}
clientId={clientId}
redirectUri={window.location.origin}>
<Router>
    <App />
</Router>
</Auth0Provider>
);



