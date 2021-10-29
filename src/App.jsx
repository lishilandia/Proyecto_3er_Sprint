import Header from "./componentes/header";
import "./styles.css";
import Body from "./componentes/body";
import React, { useState } from "react";
import Footer from "./componentes/footer";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [giphos, setGiphos] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleChange = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`App ${isDarkMode ? "dark" : "light"}`}>
      <Header setDarkMode={handleChange} isDarkMode={isDarkMode} />
      <Body setGiphos={setGiphos} setLoading={setLoading} loading={loading} />
      <Footer giphos={giphos} loading={loading} />
    </div>
  );
}
