import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App'
import './assets/css/output.css'
import 'flowbite'
import { QueryClient, QueryClientProvider, useQuery } from "react-query"

const queryClient = new QueryClient()

ReactDOM.render(
    <QueryClientProvider client={queryClient}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </QueryClientProvider>,

    document.getElementById('root')
);