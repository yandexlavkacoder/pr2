import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function Menu() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const linkStyle = (isActive) => ({
    color: isActive ? "red" : theme === "dark" ? "#fff" : "#000",
    fontWeight: isActive ? "bold" : "normal",
    marginRight: "10px",
    textDecoration: "none",
  });

  return (
    <nav
      style={{
        marginBottom: "20px",
        padding: "10px",
        backgroundColor: theme === "dark" ? "#444" : "#f0f0f0",
        borderRadius: "8px",
        display: "flex",
        alignItems: "center",
        flexWrap: "wrap",
        width: "100%",
      }}
    >
      <NavLink to="/" end style={({ isActive }) => linkStyle(isActive)}>
        Главная
      </NavLink>
      <NavLink to="/catalog" style={({ isActive }) => linkStyle(isActive)}>
        Каталог
      </NavLink>
      <NavLink to="/cart" style={({ isActive }) => linkStyle(isActive)}>
        Корзина
      </NavLink>
      <NavLink to="/login" style={({ isActive }) => linkStyle(isActive)}>
        Войти
      </NavLink>

      <button
        onClick={toggleTheme}
        style={{
          marginLeft: "auto",
          padding: "8px 15px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        {theme === "light" ? " Тёмная" : " Светлая"}
      </button>
    </nav>
  );
}

export default Menu;