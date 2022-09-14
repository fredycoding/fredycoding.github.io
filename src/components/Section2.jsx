import './Section2.css'
import Face6Icon from '@mui/icons-material/Face6';
import fotoPerfil from '../assets/perfil.jpg'

export const Section2 = () => {
  return (
   
      <div className="w-full h-full flex flex-col py-24 justify-center bg-slate-900 bg-opacity-80 border-y-[0.09rem] border-white text-center'">


        <h1 className='text-center title-section'><Face6Icon /> PROFILE</h1>
        <div className='flex justify-center  mt-4'>
          <img src={fotoPerfil} alt="foto del perfil" className=' rounded-full h-20' />
        </div>

        <div className='text-2xl mx-2 md:mx-96 mt-2'>
          <p className='mt-4 text-orange-100 text-lg p-4 text-center'>
            Programmer and Developer with more than 18 years of experience in Back-End, Front-End (FullStack),Technologies: PYTHON, DJANGO, JAVASCRIPT, REACT, .NET, JAVA, C++ </p>
          <p className='mt-1 text-orange-100 text-lg text-center'>Bogotá, Colombia</p>  
          <p className='mt-1 text-orange-100 text-lg text-center'>creandoappscolombia@gmail.com</p>
        </div>


     
    </div>
  )
}
