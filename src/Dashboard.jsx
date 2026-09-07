import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export default function Dashboard() {
  const { theme } = useContext(ThemeContext);

  const containerStyle = {
    textAlign: "center",
    marginTop: "50px",
    color: theme === "dark" ? "#fff" : "#000",
  };

  return (
    <div style={containerStyle}>
      <h2>Панель управления</h2>
      <p>Добро пожаловать</p>
    </div>
  );
}