import { MainContext, useContext } from "../context"

export default function Header() {

    
    const {theme,logoText} = useContext(MainContext)
  return (
    <div>Current Theme = {theme} <br />
    LogoText {logoText}
    </div>
  )
}
