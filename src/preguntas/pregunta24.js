import background from '../imagenes/fondo.jpg'; //importacion para  un recurso estatico
import {Routes,Route, Link} from 'react-router-dom'
import Ayuda from '../Ayuda';
import Mapa from '../Mapa';
import Salir from '../Salir';
import Pregunta5 from './pregunta5';
import Video2 from '../videorespuesta/video2';
const cherimagenes = require.context('../imagenes', true);

const Pregunta24 = ()=>{
    return <div>
<img src={cherimagenes(`./logoucc.png`)} class="relative left-4" />
       <ul class="flex flex-col relative left-3/4 bottom-20 w-2 pregunta1 ">
       <Link to="/Ayuda" class=" w-40 text-center text-white font-Ubuntu border-2 border-white rounded-lg " >Ayuda</Link>
       <Link to="/Mapa" class=" w-40 text-center text-white font-Ubuntu border-2 border-white rounded-lg " >Mapa</Link>
       <Link to="/Salir" class=" w-40 text-center text-white font-Ubuntu border-2 border-white rounded-lg " >Salir</Link>
       </ul>
    <h1 class=" w-1/3 relative ml-10 bottom-10 left-1/3 text-center font-Ubuntu text-white text-2xl ">24 ¿en la actualidad cuantos trabajadores hay en  las instalaciones de la central nuclear?</h1>

    <img src={cherimagenes(`./cher-24.jpg`)} class="relative ml-96 left-52" />
        <ul class="flex flex-col relative ml-80 left-1/4 top-10  w-2 pregunta1 ">
       <Link to="/Video24" class=" my-2 w-80 text-center text-white font-Ubuntu border-2 border-white rounded-lg " >0</Link>
       <Link to="/Video24" class=" my-2 w-80 text-center text-white font-Ubuntu border-2 border-white rounded-lg " >900</Link>
       <Link to="/Pregunta25" class=" my-2 w-80 text-center text-white font-Ubuntu border-2 border-white rounded-lg " >2400</Link>
       <Link to="/Video24" class=" my-2 w-80 text-center text-white font-Ubuntu border-2 border-white rounded-lg " >600</Link>
       </ul>
       <br/><br/><br/><br/><br/><br/><br/><br/>
    </div>
}

export default Pregunta24;