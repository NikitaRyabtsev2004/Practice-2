import React from 'react';
import ReactDOM from 'react-dom/client';
import WidgetForm from './components/WidgetForm';
import './styles/App.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <WidgetForm
      backgroundColor="#4A90E2"
      buttonColor="#F5A623"
      textColor="white"
    />
  </React.StrictMode>
);