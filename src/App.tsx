import React, {useEffect} from 'react';
import {Header} from "./components/header/Header";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {Home} from "./pages/home/home";
import {Footer} from "./components/footer";
import {NewsLetter} from "./components/modals/NewsLetter";
import {MoveUp} from "./components/libs";
import {NotFound} from "./pages/404/404";
import {ProductDetail} from "./pages/product/product_details";
import {ProductCategory} from "./pages/categories/ProductCategory";
import {QuickShop} from "./components/modals/QuickShow";
import {Cart} from "./components/cart/Cart";
import {Login} from "./pages/auth/login";
import {Register} from "./pages/auth/register";
function App() {

  return (
    <>
      <div className="page-container" id="PageContainer">
        <main className="main-content" id="MainContent" role="main">
          <Router>
              <Header />
            <Switch>
              <Route path='/' exact> <Home /> </Route>
              <Route path='/product/:name/:product_id' exact> <ProductDetail /> </Route>
              <Route path='/category/:name/:cat_id' exact> <ProductCategory /> </Route>
              <Route path='/cart' exact> <Cart /> </Route>
              <Route path='/login' exact> <Login /> </Route>
              <Route path='/register' exact> <Register /> </Route>
              <Route path='*' exact> <NotFound /> </Route>
            </Switch>
              <MoveUp/>
              <Footer/>
          </Router>
          <NewsLetter/>
          <QuickShop/>
        </main>
      </div>
    </>
  );
}

export default App;
