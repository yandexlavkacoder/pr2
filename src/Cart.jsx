import { useContext } from "react";
import { CartContext } from "./CartContext";
import { ThemeContext } from "./ThemeContext";

function Cart() {
  const { cart, removeFromCart, getTotalPrice } = useContext(CartContext);
  const { theme } = useContext(ThemeContext);

  const containerStyle = {
    color: theme === "dark" ? "#fff" : "#000",
  };

  const buttonStyle = {
    backgroundColor: "#dc3545",
    color: "white",
    border: "none",
    padding: "5px 10px",
    borderRadius: "5px",
    cursor: "pointer",
    marginLeft: "10px",
  };

  const clearButtonStyle = {
    backgroundColor: theme === "dark" ? "#666" : "#6c757d",
    color: "white",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "20px",
  };

  if (cart.length === 0) {
    return (
      <div style={containerStyle}>
        <h2>Корзина</h2>
        <p>Корзина пуста</p>
      </div>
    );
  }

  return (
    <div style={containerStyle}>
      <h2>Корзина</h2>
      <div>
        {cart.map((item) => (
          <div
            key={item.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderBottom: theme === "dark" ? "1px solid #555" : "1px solid #ccc",
              padding: "10px 0",
            }}
          >
            <span>
              {item.name} × {item.quantity}
            </span>
            <span>{item.price * item.quantity} ₽</span>
            <button
              onClick={() => removeFromCart(item.id)}
              style={buttonStyle}
            >
              Удалить
            </button>
          </div>
        ))}
        <div
          style={{
            marginTop: "20px",
            fontSize: "20px",
            fontWeight: "bold",
            padding: "10px",
            borderTop: theme === "dark" ? "2px solid #555" : "2px solid #ccc",
          }}
        >
          Итоговая сумма: {getTotalPrice()} ₽
        </div>
        <button onClick={() => removeFromCart("all")} style={clearButtonStyle}>
          Очистить корзину
        </button>
      </div>
    </div>
  );
}

export default Cart;