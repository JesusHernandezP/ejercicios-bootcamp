import { useEffect, useState } from "react";


function Counter() {
    const [number, setNumber] = useState(0)
   

    // useEffect(() => {
    //   (`Render #${}`)
    //     setI(i => i += 1)
    // })

    useEffect(() => {
      let time = 0
      const interval = setInterval(() => {
        console.log(`Temporizador ${number}: ${time++}`)
      }, 1000);

    //   return () => clearInterval(interval)
    })
    



    const clickHandler = () => {
    setNumber (number + 1)

    }

    return <>
      <p>El numero actual es: {number}</p>
      <button onClick={clickHandler}>Aumentar</button>
    </>
}

export default Counter