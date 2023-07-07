import { useContext, useEffect } from "react";
import ThemeContext  from "../context/ThemeContext.jsx";
import ThemedButton from "./ThemedButton.jsx";

function Toolbar() {
    const { theme } = useContext(ThemeContext)
    
    useEffect(() => {
        if (theme){
            document.body.classList.add('light')
            document.body.classList.remove('dark')
        } else{
            document.body.classList.add('dark')
            document.body.classList.remove('light')
        }
    }, [theme])

    return <div>
        <ThemedButton />

    </div>

}

export default Toolbar