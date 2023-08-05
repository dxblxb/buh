import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { store } from './store';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'


const client = new QueryClient();



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <QueryClientProvider client={client}>
        <Provider store={store}>
            <App />
        </Provider>
    </QueryClientProvider>
);

