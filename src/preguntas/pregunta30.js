import background from '../imagenes/fondo.jpg'; //importacion para  un recurso estatico
import {Routes,Route, Link} from 'react-router-dom'
import Ayuda from '../Ayuda';
import Mapa from '../Mapa';
import Salir from '../Salir';
import Pregunta5 from './pregunta5';
import Video2 from '../videorespuesta/video2';
const cherimagenes = require.context('../imagenes', true);

const Pregunta30 = ()=>{
    return <div>
<img src={cherimagenes(`./logoucc.png`)} class="relative left-4" />
       <ul class="flex flex-col relative left-3/4 bottom-20 w-2 pregunta1 ">
       <Link to="/Ayuda" class=" w-40 text-center text-white font-Ubuntu border-2 border-white rounded-lg " >Ayuda</Link>
       <Link to="/Mapa" class=" w-40 text-center text-white font-Ubuntu border-2 border-white rounded-lg " >Mapa</Link>
       <Link to="/Salir" class=" w-40 text-center text-white font-Ubuntu border-2 border-white rounded-lg " >Salir</Link>
       </ul>
    <h1 class=" w-1/3 relative ml-10 bottom-10 left-1/3 text-center font-Ubuntu text-white text-2xl ">30 ¿Segun los expertos en cuento tiempo dejara de ser radioactiva la central nuclear?</h1>

    <img src={cherimagenes(`./cher-30.jpg`)} class="relative ml-96 left-52" />
        <ul class="flex flex-col relative ml-80 left-1/4 top-10  w-2 pregunta1 ">
       <Link to="/Video29" class=" my-2 w-80 text-center text-white font-Ubuntu border-2 border-white rounded-lg " >Nunca</Link>
       <Link to="/Pregunta30" class=" my-2 w-80 text-center text-white font-Ubuntu border-2 border-white rounded-lg " >20000 años</Link>
       <Link to="/Video29" class=" my-2 w-80 text-center text-white font-Ubuntu border-2 border-white rounded-lg " >200 años</Link>
       <Link to="/Video29" class=" my-2 w-80 text-center text-white font-Ubuntu border-2 border-white rounded-lg " >1000 años</Link>
       </ul>
       <br/><br/><br/><br/><br/><br/><br/><br/>
    </div>
}

export default Pregunta30;