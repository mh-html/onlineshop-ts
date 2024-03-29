import { Routes , Route } from "react-router-dom"
import { ShoppingCartProvider } from "./context/ShoppingCardContext"
import Home from "./pages/Home"
import Store from "./pages/Store"
import About from "./pages/About"
import Navbar from "./components/Navbar"
import CartShopping from "./pages/CartShopping"

function App() {
  return (
    <ShoppingCartProvider>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<CartShopping />} />
      </Routes>
    </ShoppingCartProvider>
  )
}

export default App