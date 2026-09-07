import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { ThemeContext } from "./ThemeContext";
import { CartProvider } from "./CartContext";
import Menu from "./Menu";
import Home from "./Home";
import Catalog from "./Catalog";
import Cart from "./Cart";
import Login from "./Login";
import Dashboard from "./Dashboard";
import "./App.css";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    document.documentElement.style.backgroundColor = theme === "dark" ? "#333" : "#fff";
    document.body.style.backgroundColor = theme === "dark" ? "#333" : "#fff";
    document.body.style.margin = "0";
    document.body.style.padding = "0";
    document.body.style.minHeight = "100vh";
  }, [theme]);

  const appStyles = {
    backgroundColor: theme === "dark" ? "#333" : "#fff",
    color: theme === "dark" ? "#fff" : "#000",
    minHeight: "100vh",
    padding: "20px",
    width: "100%",
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <CartProvider>
        <div style={appStyles}>
          <BrowserRouter>
            <Menu />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/catalog" element={<Catalog />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/login" element={<Login />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          </BrowserRouter>
        </div>
      </CartProvider>
    </ThemeContext.Provider>
  );
}

export default App;