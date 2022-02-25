// import logo from './logo.svg';
// import './App.css';

const ProductDetails = ({ productBrand, productName }) => {
  return (
    <div className="App">
      <span>{productBrand}</span>
      <h1>{productName}</h1>
    </div>
  );
};

export default ProductDetails;
