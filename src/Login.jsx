import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export default function Login() {
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);

  function handleLogin() {
    const isAuth = true;
    if (isAuth) {
      navigate("/dashboard");
    } else {
      alert("Ошибка авторизации");
    }
  }

  const containerStyle = {
    textAlign: "center",
    marginTop: "50px",
    color: theme === "dark" ? "#fff" : "#000",
  };

  const buttonStyle = {
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    padding: "12px 30px",
    borderRadius: "5px",
    fontSize: "16px",
    cursor: "pointer",
    marginTop: "20px",
  };

  return (
    <div style={containerStyle}>
      <h2>Страница входа</h2>
      <button onClick={handleLogin} style={buttonStyle}>
        Войти
      </button>
    </div>
  );
}