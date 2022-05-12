import './App.css';
import Header from './LoginForm/Header1';
import Menu from './LoginForm/Menu';
import Categories from './LoginForm/Categories';
import Ad from './LoginForm/Ad';
import Product from './LoginForm/Product';
import BuyItWith from './LoginForm/BuyItWith';
import SpecialOffer from './LoginForm/SpecialOffer'
import ProductSpec from './LoginForm/ProductSpec'
import ProductDet from './LoginForm/ProductDet'
import Footer from './LoginForm/Footer'
import Footer2 from './LoginForm/Footer2'
import AboutCompany from './LoginForm/AboutCompany'
function App() {
  return (

  <div className="App">
     <Header/>
     <Menu/>
     <Categories/>
     <Ad/>
<Product/>
<BuyItWith/>
<SpecialOffer/>
<AboutCompany/>
<ProductSpec/>
<ProductDet/>
<Footer/>
<Footer2/>
     </div>

  );
}

export default App;
