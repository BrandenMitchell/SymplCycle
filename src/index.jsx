import * as React from 'react';
import { createRoot } from 'react-dom/client';
import App from './app.jsx'
import { BrowserRouter} from "react-router-dom";


const root = createRoot(document.body);

root.render(<BrowserRouter> <App /> </BrowserRouter>);
