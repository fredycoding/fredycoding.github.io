import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import AssuredWorkloadIcon from '@mui/icons-material/AssuredWorkload';

export const Section4 = () => {
  return (

    <div className='w-full h-full animate__animated animate__fadeInDownBig backdrop-blur-sm'>
      <div className=" bg-slate-900 bg-opacity-70 border-y-[0.09rem] border-white my-40">
        <div className='animate__animated animate__backInRight'>
          <h1 className='text-slate-200 mt-20 uppercase title-section'><AssuredWorkloadIcon/> Education</h1>
          <div className='flex flex-col px-4 md:flex-row md:gap-20 justify-center my-10'>
            <ul className='text-orange-100 text-1xl' >
              <li><ArrowRightIcon/>Tecnología de sistemas- CORUNIVERSITEC</li>
              <li><ArrowRightIcon/>Diplomado de Programación con PYTHON- UNIVERSIDAD DE MEDELLIN</li>
              <li><ArrowRightIcon/>Desarrollo web- UNIVERSIDAD DEL BOSQUE</li>
              <li><ArrowRightIcon/>Controles y Seguridad Informática - CORUNIVERSITEC</li>
              <li><ArrowRightIcon/>Desarrollo Web- GOOGLE</li>              
            </ul>
            <ul className='text-orange-100 text-1xl' >
              <li><ArrowRightIcon/>Fotografía Digital- UNIVERSIDAD TECNOLÓGICA DE PEREIRA</li>
              <li><ArrowRightIcon/>Edición de Video- SENA</li>
              <li><ArrowRightIcon/>Programación de Computadores - CORUNIVERSITEC</li>
              <li><ArrowRightIcon/>Diplomado en React- FUNDACIÓN INTERNACIÓNAL MARÍA LUISA DE MORENO</li>
              <li><ArrowRightIcon/>Desarrollo de Apps Móviles- GOOGLE</li>
            </ul>
            
          </div>
        </div>
      </div>
    </div>
  )
}
