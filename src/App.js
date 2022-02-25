import './App.css';
import Review from './components/Review';
import ProductDetails from './components/ProductDetails';
import Colors from './components/Colors';
import Sizes from './components/Sizes';

function App({ review, productDetails, productColors, productSizes }) {
  return (
    <div className="App">
      <Review review={review} />
      <ProductDetails productDetails={productDetails} />
      <Colors colors={productColors} />
      <Sizes sizes={productSizes} />
    </div>
  );
}

export default App;
