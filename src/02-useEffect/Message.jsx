import { useEffect, useState } from "react"

export const Message = () => {

  const [coords, setCoords] = useState();


  // UseEffect
  useEffect(() => {
    console.log("Message Mounted");
    
    // Recibimos el evento
    const onMouseMove = ({x,y}) => {
      const coords = {x, y}
      setCoords(coords);
    }

    window.addEventListener('mousemove', onMouseMove /* funcion por referencia */)

    // Funcion de limpieza del Effect para evitar un escape de memoria
    return () => {
      console.log("Message UnMounted");
      window.removeEventListener('mousemove', onMouseMove);
    }
  }, [])
  

  return (
    <>
      <h3>Usuario ya existe</h3>
      { JSON.stringify(coords)}
    </>
  )
}
