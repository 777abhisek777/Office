import './App.css';
import Header from './components/Header';
import Footer from './components/Footer'
import Home from './components/Home'
import About from './components/About'
import Product from './components/Product'
import Product1 from './components/Product1'
import Product2 from './components/Product2'
import Product3 from './components/Product3'
import Product4 from './components/Product4'
import Product5 from './components/Product5'
// import Product6 from './components/Product6'
import Contact from './components/Contact'
import { Redirect, Route, Switch } from 'react-router-dom';
import ProductDetail from './components/ProductDetail';
import ProductDetail1 from './components/ProductDetail1';
import ProductDetail2 from './components/ProductDetail2';
import ProductDetail3 from './components/ProductDetail3';
import ProductDetail4 from './components/ProductDetail4';
import ProductDetail5 from './components/ProductDetail5';

import Cart from './components/Cart';
import Checkout from './components/Checkout'
// import Slider from './Slider/Slider/Slider';

function App() {
  return (
    <>
      <Header/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Product} />
        <Route exact path="/products1" component={Product1} />
        <Route exact path="/products2" component={Product2} />
        <Route exact path="/products3" component={Product3} />
        <Route exact path="/products4" component={Product4} />
        <Route exact path="/products5" component={Product5} />
        {/* <Route exact path="/products6" component={Product6} />    */}
        <Route exact path="/products/:id" component={ProductDetail} />
        <Route exact path="/products1/:id" component={ProductDetail1} />
        <Route exact path="/products2/:id" component={ProductDetail2} />
        <Route exact path="/products3/:id" component={ProductDetail3} />
        <Route exact path="/products4/:id" component={ProductDetail4} />
        <Route exact path="/products5/:id" component={ProductDetail5} />

        <Route exact path="/cart" component={Cart} />
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Redirect to="/" />
      </Switch>
     
      {/* <Footer/> */}
      {/* <Slider/> */}
    </>
  );
}

export default App;
