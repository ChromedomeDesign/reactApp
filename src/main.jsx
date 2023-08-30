import React from 'react';
import { createRoot } from 'react-dom/client'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import '@common/styles/stylish-portfolio.css';
import App from 'App.tsx';

const container = document.getElementById('app') // Define the target element from our index.html
const root = createRoot(container) // Use the 'createRoot' functionality to give React the ability to inject JS

root.render(<App message='Hello World' />) // Render the application, passing in any required props for initialization
