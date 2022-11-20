import {Routes,Route, Link, Outlet} from 'react-router-dom'
const cherimagenes = require.context('./imagenes', true);

const Home = ()=>{
<div class="w-3/4 h-5/6">
      <img src={cherimagenes(`./logoucc.png`)} class="relative left-2" />
       <ul class="flex flex-col relative left-full bottom-20 w-2 pregunta1 from 0">
       <button class=" w-40 text-white font-Ubuntu border-2 border-white rounded-lg "> Ayuda </button>
       <button class=" w-40 text-white font-Ubuntu border-2 border-white rounded-lg " > Mapa </button>
       <button class=" w-40 text-white font-Ubuntu border-2 border-white rounded-lg "> Salida </button>
       </ul>

      <Link to="/Pregunta1" class=" relative left-2/3 top-80 w-40 h-20 text-white font-Ubuntu border-2 border-white rounded-lg ">Iniciar Juego</Link>
      
      <Outlet/>
      </div>


}

export default Home;