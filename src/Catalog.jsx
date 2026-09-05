import { useContext } from "react";
import { CartContext } from "./CartContext";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "./ThemeContext";

const products = [
  { id: 1, name: "Ноутбук", price: 75000 },
  { id: 2, name: "Наушники", price: 52000 },
  { id: 3, name: "Смартфон", price: 45000 },
  { id: 4, name: "Планшет", price: 30000 },
  { id: 5, name: "Клавиатура", price: 15000 },
];

function Catalog() {
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);

  const handleAddToCart = (product) => {
    addToCart(product); 
    navigate("/cart"); 
  };

  const cardStyle = {
    border: theme === "dark" ? "1px solid #555" : "1px solid #ccc",
    borderRadius: "8px",
    padding: "15px",
    width: "200px",
    backgroundColor: theme === "dark" ? "#444" : "#f9f9f9",
    color: theme === "dark" ? "#fff" : "#000",
  };

  const buttonStyle = {
    backgroundColor: theme === "dark" ? "#007bff" : "#007bff",
    color: "white",
    border: "none",
    padding: "8px 15px",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "10px",
    width: "100%",
  };

  return (
    <div>
      <h2>Каталог товаров</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", marginTop: "20px" }}>
        {products.map((product) => (
          <div key={product.id} style={cardStyle}>
            <h3 style={{ margin: "0 0 10px 0" }}>{product.name}</h3>
            <p style={{ fontSize: "18px", fontWeight: "bold", margin: "10px 0" }}>
              {product.price} ₽
            </p>
            <button
              onClick={() => handleAddToCart(product)}
              style={buttonStyle}
            >
              В корзину
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Catalog;