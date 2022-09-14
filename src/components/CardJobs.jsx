
export const CardJobs = ({titulo, texto, imagen, url, urlgithub}) => {
  return (
    <div className="flex flex-col justify-between ml-10 md:ml-4 bg-blue-900 bg-opacity-70 rounded-br-3xl border-[0.05rem] border-opacity-30 hover:border-opacity-90 border-gray-200 shadow-md w-[310px] md:w-72">
     <img src={imagen} alt="" className="h-40 bg-contain" />
      <div className="p-5 ">        
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-orange-100">{titulo}</h5>      
        <p className="mb-3 font-regular text-orange-50">{texto}</p>
        <a href={url} className="boton-tech inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white  rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Project
          <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
        </a>
        <a href={urlgithub} className="boton-tech ml-3 inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white  rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Github
          <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
        </a>
      </div>
    </div>
  )
}
