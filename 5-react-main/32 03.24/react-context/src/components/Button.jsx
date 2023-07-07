import { useContext } from "react"
import  ThemeContext from "../context/ThemeContext.jsx"


function Button() {
    const {theme, setTheme} = useContext(ThemeContext)

    const clickButtonHandler = () => setTheme(!theme)

    return(
        <>
          <button onClick={clickButtonHandler}>
            {theme ? '🌙' : '🌞'}
          </button>
        </>
    )
    
}

export default Button
