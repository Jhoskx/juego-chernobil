import background from '../imagenes/fondo.jpg'; //importacion para  un recurso estatico
import {Routes,Route, Link, Outlet} from 'react-router-dom'
import Ayuda from '../Ayuda';
import Salir from '../Salir';
import Mapa from '../Mapa';
import Pregunta2 from './pregunta2';
import Video1 from '../videorespuesta/video1';
const cherimagenes = require.context('../imagenes', true);

const Pregunta1 = ()=>{
    return <div class="w-screec h-screen  " style={{ backgroundImage:`url(${background})`, backgroundRepeat: 'no-repeat' }}>
       
    <Routes>
    <Route path='Pregunta1' element={<Pregunta1/>}>
      <Route path='Ayuda' element={<Ayuda/>}/>
      <Route path='Mapa' element={<Mapa/>}/>
      <Route path='Salir' element={<Salir/>}/>
      <Route path='Pregunta2' element={<Pregunta2/>}/>
      <Route path='Video1' element={<Video1/>}/>
    </Route>
    </Routes> 
        

        <div>
        <img src={cherimagenes(`./logoucc.png`)} class="relative left0-4" />

       <ul class="flex flex-col relative left-3/4 bottom-20 w-2 pregunta1 ">
       <Link to="/Ayuda" class=" w-40 text-center text-white font-Ubuntu border-2 border-white rounded-lg " >Ayuda</Link>
       <Link to="/Mapa" class=" w-40 text-center text-white font-Ubuntu border-2 border-white rounded-lg " >Mapa</Link>
       <Link to="/Salir" class=" w-40 text-center text-white font-Ubuntu border-2 border-white rounded-lg " >Salir</Link>
       </ul>
    <h1 class=" w-1/3 relative ml-10 bottom-10 left-1/3 text-center font-Ubuntu text-white text-2xl "> ¿1   ¿Cuál es el nombre de la planta nuclear?</h1>

    <img src={cherimagenes(`./cher-1.jpg`)} class="relative ml-20 left-1/4" />
        <ul class="flex flex-col relative ml-80 left-1/4 top-10  w-2 pregunta1 ">
       <Link to="/Pregunta2" class=" my-2 w-80 text-center text-white font-Ubuntu border-2 border-white rounded-lg " >Planta nuclear Vladimir Ilich Lenin</Link>
       <Link to="/Video1" class=" my-2 w-80 text-center text-white font-Ubuntu border-2 border-white rounded-lg " >Planta nuclear de Chernobyl</Link>
       <Link to="/Video1" class=" my-2 w-80 text-center text-white font-Ubuntu border-2 border-white rounded-lg " >Planta nuclear de Springfield</Link>
       <Link to="/Video1" class=" my-2 w-80 text-center text-white font-Ubuntu border-2 border-white rounded-lg " >Planta nuclear Roblox</Link>
       </ul>
       <Outlet/>
       </div>
    </div>
}

export default Pregunta1;