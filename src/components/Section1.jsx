import './Section1.css'
import 'animate.css';
import { useCallback, useEffect, useState } from 'react';


const names = [
  'Developer', 'Video Editor', 'Audiovisual Producer', 'Designer'
]


export const Section1 = () => {

  const [newName, setnewName] = useState("Developer");

  const shuffle = useCallback(() => {
    const index = Math.floor(Math.random() * names.length);
    setnewName(names[index]);
  }, []);

  useEffect(() => {
    const intervalID = setInterval(shuffle, 2000);
    return () => clearInterval(intervalID);
  }, [shuffle])

  return (
    <div className='animate__animated animate__fadeInDownBig'>
      <div className="w-full h-screen">
        <div className='flex flex-col justify-center h-screen relative animate__animated animate__backInRight '>

          <div className='bg-slate-900 bg-opacity-80 border-y-[0.09rem] border-white py-40'>
            <h1 className='text-5xl md:text-6xl font-bold text-slate-100 text-center glow'>Fredy A. Diaz B.</h1>
            <h2 className='mt-8 text-orange-100 text-3xl font-regular tracking-widest text-center'>I'm a <span className=' text-indigo-400 animate-pulse'>{newName}</span></h2>

            <p className='mt-4 text-orange-100 text-2xl font-regular tracking-widest text-center'>Developer skills: <span className=' text-indigo-400'>Python, Django, .NET, Java, Javascript, C++, React</span></p>
          </div>

        </div>

      </div>



    </div>

  )
}
