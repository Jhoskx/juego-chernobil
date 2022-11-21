import background from '../imagenes/fondo.jpg'; //importacion para  un recurso estatico
import {Routes,Route, Link} from 'react-router-dom'
import Ayuda from '../Ayuda';
import Mapa from '../Mapa';
import Salir from '../Salir';
import Pregunta5 from './pregunta5';
import Video2 from '../videorespuesta/video2';
const cherimagenes = require.context('../imagenes', true);

const Pregunta28 = ()=>{
    return <div>
        <img src={cherimagenes(`./logoucc.png`)} class="relative left-4" />
       <ul class="flex flex-col relative left-3/4 bottom-20 w-2 pregunta1 ">
       <Link to="/Ayuda" class=" w-40 text-center text-white font-Ubuntu border-2 border-white rounded-lg " >Ayuda</Link>
       <Link to="/Mapa" class=" w-40 text-center text-white font-Ubuntu border-2 border-white rounded-lg " >Mapa</Link>
       <Link to="/Salir" class=" w-40 text-center text-white font-Ubuntu border-2 border-white rounded-lg " >Salir</Link>
       </ul>
    <h1 class=" w-1/3 relative ml-10 bottom-10 left-1/3 text-center font-Ubuntu text-white text-2xl ">28 ¿por qué motivo no se puede entrar a elhospital hoy en día?</h1>

    <img src={cherimagenes(`./cher-28.jpg`)} class="relative ml-96 left-52" />
        <ul class="flex flex-col relative ml-80 left-1/4 top-10  w-2 pregunta1 ">
       <Link to="/Video28" class=" my-2 w-80 text-center text-white font-Ubuntu border-2 border-white rounded-lg " >Por la estabilidad Estructural</Link>
       <Link to="/Video28" class=" my-2 w-80 text-center text-white font-Ubuntu border-2 border-white rounded-lg " >por un cordon militar que hay</Link>
       <Link to="/Pregunta29" class=" my-2 w-80 text-center text-white font-Ubuntu border-2 border-white rounded-lg " >Por que ya no existe el edificio</Link>
       <Link to="/Video28" class=" my-2 w-80 text-center text-white font-Ubuntu border-2 border-white rounded-lg " >Por la radiacion que emanan los trajes de los primeros bomberos en asistir a la explocion</Link>
       </ul>
       <br/><br/><br/><br/><br/><br/><br/><br/>
    </div>
}

export default Pregunta28;