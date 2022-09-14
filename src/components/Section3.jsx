import { CardJobs } from "./CardJobs"
import AnalyticsIcon from '@mui/icons-material/Analytics';


export const Section3 = () => {
  return (
    <div className='w-full h-full animate__animated animate__fadeInDownBig backdrop-blur-sm'>
      <div className=" bg-slate-900 bg-opacity-60 border-y-[0.09rem] border-white my-40">
        <div className='animate__animated animate__backInRight'>
          <h1 className='text-slate-200 mt-20 uppercase title-section'><AnalyticsIcon/> Portfolio</h1>
          <div className='ajustarTarjetas gap-4'>            
            <CardJobs titulo="App Rick and Morty" texto="Application made with Javascript, calling an API to read data." imagen="https://user-images.githubusercontent.com/16197568/189462974-70607a39-98c5-4c90-825c-10767628d639.png" url="https://riackandmorty-27d93.web.app/" urlgithub="https://github.com/xbox360colombia/RickandMorty-api-AxiosJS"/>
            <CardJobs titulo="Trello App" texto="Application made with Javascript, Firebase, calling a Firestore Database for save data of To Do list." urlgithub="https://github.com/xbox360colombia/Listado_de_tareas_Firebase_Javascript" url="https://trelloexercise.web.app/" imagen="https://user-images.githubusercontent.com/16197568/180519807-fd246b4b-6898-444f-b377-6818dc433380.png" />
            <CardJobs titulo="Super Heroes App" url="https://coruscating-trifle-23bf34.netlify.app/" urlgithub="https://github.com/xbox360colombia/06MarvelandDc" texto="Marvel and DC application developed in React, which displays the superheroes of these comics" imagen="https://user-images.githubusercontent.com/16197568/189464464-92d5c403-7a4e-4db0-b430-378b6d7c3004.png" />
            <CardJobs titulo="To Do React" urlgithub="https://github.com/xbox360colombia/03_ToDo_React" url="https://famous-gumption-e8d962.netlify.app/" imagen="https://user-images.githubusercontent.com/16197568/187051385-180c202d-e78a-49e6-aaab-4b4b44c3108a.png" texto="Application made in React where it has the functions of save, edit and delete" />
            <CardJobs titulo="Weather App" urlgithub="https://github.com/xbox360colombia/08_App_Clima_React/tree/master" texto="Weather app made in React, where you get the weather data of your current location and cities by search" url="https://rococo-haupia-55aa2f.netlify.app/" imagen="https://user-images.githubusercontent.com/16197568/190189754-189c3ce8-cd9e-4177-a930-652389014a4c.png" />
            <CardJobs titulo="Landing Page" texto="Personal Landing Page made in React" imagen="https://user-images.githubusercontent.com/16197568/190019233-2c50e7e6-ce08-4394-b1cb-ef23ac3609af.png" url="https://xbox360colombia.github.io/" urlgithub="https://github.com/xbox360colombia/xbox360colombia.github.io" />
          </div>          
        </div>
      </div>
    </div>
  )
}
