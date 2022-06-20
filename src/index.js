import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import './index.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Bag} from "./componets/Bag";
import {Provider} from "./componets/Provider";
import {Catalog} from "./componets/Catalog";
import {Account} from "./componets/Account";

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="/"  element={<App />} >
                <Route path="bag"  element={<Bag />} />
                <Route path="account"  element={<Account />} />
                <Route path="man"  element={<Catalog attr='man' />} />
                <Route path="woman"  element={<Catalog attr='woman' />} />
                <Route path="provider"  element={<Provider />} />
            </Route>
        </Routes>
    </BrowserRouter>,
  document.getElementById('root')
);
