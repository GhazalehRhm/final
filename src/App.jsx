import { StrictMode, useState } from "react";
import "./App.css";
import Basket from "./components/Basket/Basket";
import Category from "./components/Category/Category";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import ProductCard from "./components/ProductCard/ProductCard";

function App() {
  const [product, setProduct] = useState([]);
  const [filter, setFilter] = useState("");
  const [clicked, setClicked] = useState(false);
  const [countItem, setCountItem] = useState(0);
  const [likes, setLikes] = useState([]);
  const [countLike, setCountLike] = useState(0);
  const [card, setCard] = useState([]);

  return (
    <StrictMode>
      <div className="flex flex-col h-screen justify-between">
        <Header
          onFilter={setFilter}
          onClicked={setClicked}
          countItem={countItem}
          countLike={countLike}
          onProduct={setProduct}
          likes={likes}
          product={product}
          card={card}
          onCard={setCard}
        />
        {!clicked ? (
          <>
            <Category onProduct={setProduct} />
            <ProductCard
              product={product}
              onProduct={setProduct}
              filter={filter}
              onCountItem={setCountItem}
              onCountLike={setCountLike}
              likes={likes}
              onLikes={setLikes}
              card={card}
              onCard={setCard}
            />
          </>
        ) : (
          <Basket card={card} onCard={setCard} />
        )}

        <Footer />
      </div>
    </StrictMode>
  );
}

export default App;
