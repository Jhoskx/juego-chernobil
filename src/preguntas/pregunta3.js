import background from '../imagenes/fondo.jpg'; //importacion para  un recurso estatico
import {Routes,Route, Link} from 'react-router-dom'
import Ayuda from '../Ayuda';
import Mapa from '../Mapa';
import Salir from '../Salir';
import Pregunta4 from './pregunta4';
import Video2 from '../videorespuesta/video2';
const cherimagenes = require.context('../imagenes', true);

const Pregunta3 = ()=>{
    return <div class="w-screec h-screen" style={{ backgroundImage:`url(${background})`, backgroundRepeat: 'no-repeat' }}>
 <img src={cherimagenes(`./logoucc.png`)} class="relative left-4" />
 <ul class="flex flex-col relative left-3/4 bottom-20 w-2 pregunta1 ">
 <Link to="/Ayuda" class=" w-40 text-center text-white font-Ubuntu border-2 border-white rounded-lg " >Ayuda</Link>
 <Link to="/Mapa" class=" w-40 text-center text-white font-Ubuntu border-2 border-white rounded-lg " >Mapa</Link>
 <Link to="/Salir" class=" w-40 text-center text-white font-Ubuntu border-2 border-white rounded-lg " >Salir</Link>
 </ul>
<h1 class=" w-1/3 relative ml-10 bottom-10 left-1/3 text-center font-Ubuntu text-white text-2xl ">3 ¿Cuántos habitantes Vivian en PRIPIAT - Union sovietica?</h1>

<img src={cherimagenes(`./cher-3.jpg`)} class="relative ml-5 left-1/4" />
  <ul class="flex flex-col relative ml-80 left-1/4 top-10  w-2 pregunta1 ">
 <Link to="/Video3" class=" my-2 w-80 text-center text-white font-Ubuntu border-2 border-white rounded-lg " >33.000 Habitantes</Link>
 <Link to="/Video3" class=" my-2 w-80 text-center text-white font-Ubuntu border-2 border-white rounded-lg " >50.000 Habitantes</Link>
 <Link to="/Pregunta4" class=" my-2 w-80 text-center text-white font-Ubuntu border-2 border-white rounded-lg " >43.000 Habitantes</Link>
 <Link to="/Video3" class=" my-2 w-80 text-center text-white font-Ubuntu border-2 border-white rounded-lg " >25.000 Habitantes</Link>
 </ul>
</div>
}

export default Pregunta3;