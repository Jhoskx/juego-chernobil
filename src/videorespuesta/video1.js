import background from '../imagenes/fondo_ayuda.jpg';
import React from 'react';
import ReactPlayer from'react-player';
import {Routes,Route, Link, Outlet} from 'react-router-dom'

const Video1 = ()=>{
    return <div class="w-screec h-screen " style={{ backgroundImage:`url(${background})`, backgroundRepeat: 'no-repeat' }}>
        <ReactPlayer   url={require('../videos/Video1.mp4')}
        controls
        width='70%'
        height='70%'
        />
        
        <Link to="/Video1" class=" w-2 h-10 my-40 text-center text-white font-Ubuntu border-2 border-white rounded-lg " >Siguiente Pregunta</Link>
    </div>
}

export default Video1;