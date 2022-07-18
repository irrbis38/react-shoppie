import "./App.scss";
import Header from "./layout/Header/Header";
import Main from "./layout/Main/Main";
import Footer from "./layout/Footer/Footer";
import { useEffect, useState } from "react";
import productsData from "./products";

function App() {
  const [products, setProducts] = useState<Products[] | null>(null);

  useEffect(() => {
    setProducts(productsData);
  }, [products]);

  return (
    <>
      <Header />
      <Main products={products} />
      <Footer />
    </>
  );
}

export default App;
