import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function Home() {
  const { theme } = useContext(ThemeContext);

  const containerStyle = {
    textAlign: "center",
    marginTop: "50px",
    color: theme === "dark" ? "#fff" : "#000",
  };

  return (
    <div style={containerStyle}>
      <h1>Добро пожаловать в магазин </h1>
      <p>Перейдите в каталог, чтобы выбрать товары</p>
    </div>
  );
}

export default Home;