import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

import { MainContext } from "./context";

function App() {

  const [theme, setTheme] = useState('light');
  const [logoText,setLogoText] = useState('Hello');

  const data = {
    theme,
    setTheme,
    logoText,
    setLogoText
  }

  return (
    <MainContext.Provider value={data}>
      <Header></Header>
      <Footer></Footer>
    </MainContext.Provider>
  )
}

export default App
