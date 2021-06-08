
import './App.css';
import products from "./products";

function App() {
  const productList = products.map((product) => (
    <div className= "productbaked" key={product.id}>
      <img className="product-image" scr={product.image} />
      <p className="text">{product.name}</p>
      <p className="text">{product.price} KD</p>
    </div>
  ));

  return (
    <div>
    <div>
      <h1 className="text"> Bakery Heaven </h1>
      <h4 className="text"> The place for carbs craving </h4>

      <img id="centerPic" src="https://i.ndtvimg.com/i/2017-10/bakeries_620x350_41509023137.jpg" />
    </div>

    <div className="List">
      {productList}</div>
      </div>
  );
}
export default App;