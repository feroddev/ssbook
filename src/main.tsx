import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';

const apolloClient = new ApolloClient({
  uri: 'https://us-central1-ss-devops.cloudfunctions.net/GraphQL',
  cache: new InMemoryCache(),
});

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as Element).render(
  <React.StrictMode>
    <ApolloProvider client={ apolloClient }>
      <QueryClientProvider client={ queryClient }>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </QueryClientProvider>
    </ApolloProvider>
  </React.StrictMode>,
);
