import { useState } from 'react';

import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import CartProvider from './store/CartProvider';
import Cart from './components/Cart/Cart';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  function showCartHandler() {
    setCartIsShown(true);
  }

  function hideCartHandler() {
    setCartIsShown(false);
  }

  return (
    <CartProvider>
<<<<<<< HEAD
      {cartIsShown && <div>Cart...</div>}
      <Header onShowCart={showCartHandler} />
=======
      <Cart />
      <Header />
>>>>>>> feat/cart
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
