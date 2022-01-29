import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import Loader from "react-loader-spinner";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import './index.css';
import './config/axios-config';

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
          <Suspense
              fallback={
                  <div className="loaderWrapper">
                      <Loader type="Bars" color="#ff8614" height={200} width={200} />
                  </div>
              }
          >
              <App />
          </Suspense>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

