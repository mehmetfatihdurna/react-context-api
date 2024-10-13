import { MainContext, useContext } from "../context";

export default function Footer() {

    const {theme, setTheme, logoText, setLogoText} = useContext(MainContext);
    const switchTheme = ()=>{
        setTheme(theme==='dark' ? 'light' : 'dark');
    };

    const switchLogoText = ()=>{
        setLogoText(logoText === 'Hello' ? 'Merhaba' : 'Hello');
    }

  return (
    <div>
        Footer <br />
        <button onClick={switchTheme}>Switch Theme</button>
        <button onClick={switchLogoText}>LogoText</button>
    </div>
  )
}
