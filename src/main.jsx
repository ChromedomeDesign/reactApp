import React from 'react';
import { createRoot } from 'react-dom/client'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import './styles/stylish-portfolio.css';
import App from './App.tsx';

const container = document.getElementById('app')
const root = createRoot(container)

root.render(<App message='Hello World' />)
