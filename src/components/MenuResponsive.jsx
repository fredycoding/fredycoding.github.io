
import { useState, useEffect } from 'react';
import { BotonesMenu } from './BotonesMenu';
import { NavBarCustom } from './NavBarCustom';

//En este componente llamo hago una función que detecta el cambio de resolución de pantalla
//Para enviar el menú que corresponda.

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

export const MenuResponsive = () => {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());        
      }
  
      window.addEventListener('resize', handleResize);
      console.log(windowDimensions)
      return () => window.removeEventListener('resize', handleResize);
      
    }, [windowDimensions]);


  return (
    <>
    {(windowDimensions.width < 800 )? <NavBarCustom/> : <BotonesMenu/> }
    </>
  )
}
