import React from 'react';
import './App.css';
import {BasketComponent} from "./components/BasketComponent";
import {HomeComponent} from "./components/HomeComponent";
import {CategoryComponent} from "./components/CategoryComponent";
import {CustomerComponent} from "./components/CustomerComponent";
import {OrderComponent} from "./components/OrderComponent";
import {OrderedProductsComponent} from "./components/OrderedProductsComponent";
import {ProductComponent} from "./components/ProductComponent";
import {ReviewComponent} from "./components/ReviewComponent";
import {StatusComponent} from "./components/StatusComponent";

function App() {
  return (
    <div className="App">
        <HomeComponent></HomeComponent>
        <StatusComponent></StatusComponent>
    </div>
  );
}

export default App;
