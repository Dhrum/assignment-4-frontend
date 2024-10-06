import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';  // Import your App.css here
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom';  // Import BrowserRouter
import { AuthProvider } from './Context/AuthContext';  // Import the AuthProvider

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider> {/* Wrap the App inside AuthProvider */}
      <Router>  {/* Wrap the App inside Router */}
        <App />
      </Router>
    </AuthProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
