import React from 'react';
import ReactDOM from 'react-dom';
import { transitions, positions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import App from './App';
import './index.css';

// optional cofiguration
const options = {
  // Sets position of generated alerts
  position: positions.MIDDLE,
  // Determines alert lifetime
  timeout: 5000,
  // Sets alert style
  transition: transitions.SCALE,
};

const Root = () => (
  <AlertProvider template={AlertTemplate} {...options}>
    <App />
  </AlertProvider>
);

ReactDOM.render(<Root />, document.getElementById('root'));
