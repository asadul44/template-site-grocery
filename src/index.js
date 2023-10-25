import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {StoreProvider} from "./Store2/Store"
import { initialState,RootReducer } from './Store2/RootReducer';


ReactDOM.render(
   <StoreProvider initialState={initialState} reducer={RootReducer}>
       <App />
   </StoreProvider>,
  document.getElementById('root')
);

