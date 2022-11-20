import './App.css';
import background from './imagenes/fondo.jpg'; //importacion para  un recurso estatico
import Pregunta1 from  './preguntas/pregunta1';
import Pregunta2 from './preguntas/pregunta2';
import Pregunta3 from './preguntas/pregunta3';
import Pregunta4 from './preguntas/pregunta4';
import Pregunta5 from './preguntas/pregunta5';
import Pregunta6 from './preguntas/pregunta6';
import Pregunta7 from './preguntas/pregunta7';
import Pregunta8 from './preguntas/pregunta8';
import Pregunta9 from './preguntas/pregunta9';
import Pregunta10 from './preguntas/pregunta10';
import Pregunta11 from  './preguntas/pregunta11';
import Pregunta12 from './preguntas/pregunta12';
import Pregunta13 from './preguntas/pregunta13';
import Pregunta14 from './preguntas/pregunta14';
import Pregunta15 from './preguntas/pregunta15';
import Pregunta16 from './preguntas/pregunta16';
import Pregunta17 from './preguntas/pregunta17';
import Pregunta18 from './preguntas/pregunta18';
import Pregunta19 from './preguntas/pregunta19';
import Pregunta20 from './preguntas/pregunta20';
import Pregunta21 from  './preguntas/pregunta21';
import Pregunta22 from './preguntas/pregunta22';
import Pregunta23 from './preguntas/pregunta23';
import Pregunta24 from './preguntas/pregunta24';
import Pregunta25 from './preguntas/pregunta25';
import Pregunta26 from './preguntas/pregunta26';
import Pregunta27 from './preguntas/pregunta27';
import Pregunta28 from './preguntas/pregunta28';
import Pregunta29 from './preguntas/pregunta29';
import Pregunta30 from './preguntas/pregunta30';
import Video1 from './videorespuesta/video1';
import Video2 from './videorespuesta/video2';
import Video3 from './videorespuesta/video3';
import Video4 from './videorespuesta/video4';
import Video5 from './videorespuesta/video5';
import Video6 from './videorespuesta/video6';
import Video7 from './videorespuesta/video7';
import Video8 from './videorespuesta/video8';
import Video9 from './videorespuesta/video9';
import Video10 from './videorespuesta/video10';
import Video11 from './videorespuesta/video11';
import Video12 from './videorespuesta/video12';
import Video13 from './videorespuesta/video13';
import Video14 from './videorespuesta/video14';
import Video15 from './videorespuesta/video15';
import Video16 from './videorespuesta/video16';
import Video17 from './videorespuesta/video17';
import Video18 from './videorespuesta/video18';
import Video19 from './videorespuesta/video19';
import Video20 from './videorespuesta/video20';
import Video21 from './videorespuesta/video21';
import Video22 from './videorespuesta/video22';
import Video23 from './videorespuesta/video23';
import Video24 from './videorespuesta/video24';
import Video25 from './videorespuesta/video25';
import Video26 from './videorespuesta/video26';
import Video27 from './videorespuesta/video27';
import Video28 from './videorespuesta/video28';
import Video29 from './videorespuesta/video29';
import Video30 from './videorespuesta/video30';
import Ayuda from './Ayuda';
import Mapa from './Mapa';
import Salir from './Salir';
import {Routes,Route, Link, Outlet} from 'react-router-dom'

const cherimagenes = require.context('./imagenes', true);



function App() {
  return (
    
    <div class="w-screec h-screen" style={{ backgroundImage:`url(${background})`, backgroundRepeat: 'no-repeat' }}>
     //#region rutas
     <Routes>
    <Route>
     <Route path='App' element={<App/>}/>
      <Route path='Ayuda' element={<Ayuda/>}/>
      <Route path='Mapa' element={<Mapa/>}/>
      <Route path='Salir' element={<Salir/>}/>
      <Route path='Pregunta1' element={<Pregunta1/>}/>
      <Route path='Pregunta2' element={<Pregunta2/>}/>
      <Route path='Pregunta3' element={<Pregunta3/>}/>
      <Route path='Pregunta4' element={<Pregunta4/>}/>
      <Route path='Pregunta5' element={<Pregunta5/>}/>
      <Route path='Pregunta6' element={<Pregunta6/>}/>
      <Route path='Pregunta7' element={<Pregunta7/>}/>
      <Route path='Pregunta8' element={<Pregunta8/>}/>
      <Route path='Pregunta9' element={<Pregunta9/>}/>
      <Route path='Pregunta10' element={<Pregunta10/>}/>
      <Route path='Pregunta11' element={<Pregunta11/>}/>
      <Route path='Pregunta12' element={<Pregunta12/>}/>
      <Route path='Pregunta13' element={<Pregunta13/>}/>
      <Route path='Pregunta14' element={<Pregunta14/>}/>
      <Route path='Pregunta15' element={<Pregunta15/>}/>
      <Route path='Pregunta16' element={<Pregunta16/>}/>
      <Route path='Pregunta17' element={<Pregunta17/>}/>
      <Route path='Pregunta18' element={<Pregunta18/>}/>
      <Route path='Pregunta19' element={<Pregunta19/>}/>
      <Route path='Pregunta20' element={<Pregunta20/>}/>
      <Route path='Pregunta21' element={<Pregunta21/>}/>
      <Route path='Pregunta22' element={<Pregunta22/>}/>
      <Route path='Pregunta23' element={<Pregunta23/>}/>
      <Route path='Pregunta24' element={<Pregunta24/>}/>
      <Route path='Pregunta25' element={<Pregunta25/>}/>
      <Route path='Pregunta26' element={<Pregunta26/>}/>
      <Route path='Pregunta27' element={<Pregunta27/>}/>
      <Route path='Pregunta28' element={<Pregunta28/>}/>
      <Route path='Pregunta29' element={<Pregunta29/>}/>
      <Route path='Pregunta30' element={<Pregunta30/>}/>
      <Route path='Video1' element={<Video1/>}/>
      <Route path='Video2' element={<Video2/>}/>
      <Route path='Video3' element={<Video3/>}/>
      <Route path='Video4' element={<Video4/>}/>
      <Route path='Video5' element={<Video5/>}/>
      <Route path='Video6' element={<Video6/>}/>
      <Route path='Video7' element={<Video7/>}/>
      <Route path='Video8' element={<Video8/>}/>
      <Route path='Video9' element={<Video9/>}/>
      <Route path='Video10' element={<Video10/>}/>
      <Route path='Video11' element={<Video11/>}/>
      <Route path='Video12' element={<Video12/>}/>
      <Route path='Video13' element={<Video13/>}/>
      <Route path='Video14' element={<Video14/>}/>
      <Route path='Video15' element={<Video15/>}/>
      <Route path='Video16' element={<Video16/>}/>
      <Route path='Video17' element={<Video17/>}/>
      <Route path='Video18' element={<Video18/>}/>
      <Route path='Video19' element={<Video19/>}/>
      <Route path='Video20' element={<Video20/>}/>
      <Route path='Video21' element={<Video21/>}/>
      <Route path='Video22' element={<Video22/>}/>
      <Route path='Video23' element={<Video23/>}/>
      <Route path='Video24' element={<Video24/>}/>
      <Route path='Video25' element={<Video25/>}/>
      <Route path='Video26' element={<Video26/>}/>
      <Route path='Video27' element={<Video27/>}/>
      <Route path='Video28' element={<Video28/>}/>
      <Route path='Video29' element={<Video29/>}/>
      <Route path='Video30' element={<Video30/>}/>
    </Route>
    </Routes> 
    //#endregion
      <div class="w-3/4 h-5/6">
      <img src={cherimagenes(`./logoucc.png`)} class="relative left-2" />
       <ul class="flex flex-col relative left-full bottom-20 w-2 pregunta1 from 0">
       <li>
       <Link to="/Ayuda" class=" w-40 text-center text-white font-Ubuntu border-2 border-white rounded-lg " >Ayuda</Link>
       </li>
       <li>
       <Link to="/Mapa" class=" w-40 text-center text-white font-Ubuntu border-2 border-white rounded-lg " >Mapa</Link>
       </li>
       <li>
       <Link to="/Salir" class=" w-40 text-center text-white font-Ubuntu border-2 border-white rounded-lg " >Salir</Link>
       </li>
       </ul>
      <Link to="/Pregunta1" class=" relative left-2/3 top-80 w-40 h-20 text-white font-Ubuntu border-2 border-white rounded-lg ">Iniciar Juego</Link>
     <Outlet/>
      </div>

    </div>
  );
}

export default App;
