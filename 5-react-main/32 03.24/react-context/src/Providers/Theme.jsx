import { useState } from "react";
import ThemeContext from "../context/ThemeContext.jsx";
 

function ThemeProvider({children}) {
    const [theme, setTheme] = useState(false)
    

    return(
        <ThemeContext.Provider value={{ theme, setTheme}}>
            { children}
        </ThemeContext.Provider>
    )
    
}

export default ThemeProvider