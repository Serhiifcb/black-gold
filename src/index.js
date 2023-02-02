import React from 'react';
import ReactDOM from 'react-dom/client';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'components/App';
import './index.css';

// // include dependencies
// const express = require('express');
// const { createProxyMiddleware } = require('http-proxy-middleware');

// // proxy middleware options
// /** @type {import('http-proxy-middleware/dist/types').Options} */
// const options = {
//   target: 'http://www.example.org', // target host
//   changeOrigin: true, // needed for virtual hosted sites
//   ws: true, // proxy websockets
//   pathRewrite: {
//     '^/api/old-path': '/api/new-path', // rewrite path
//     '^/api/remove/path': '/path', // remove base path
//   },
//   router: {
//     // when request.headers.host == 'dev.localhost:3000',
//     // override target 'http://www.example.org' to 'http://localhost:8000'
//     'dev.localhost:3000': 'http://localhost:8000',
//   },
// };

// // create the proxy (without context)
// const exampleProxy = createProxyMiddleware(options);

// // mount `exampleProxy` in web server
// const app = express();
// app.use('/api', exampleProxy);
// app.listen(3000);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/black-gold">
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
