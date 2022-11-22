import background from '../imagenes/fondo_ayuda.jpg';
import React from 'react';
import ReactPlayer from'react-player';
import {Routes,Route, Link, Outlet} from 'react-router-dom'
import video14 from '../videos/Video14.mp4'

const Video14 = ()=>{
    return <div class="w-screec h-screen " style={{ backgroundImage:`url(${background})`, backgroundRepeat: 'no-repeat' }}>
    <div class="relative left-36  top-10 w-11/12">
    <ReactPlayer   url='https://www.youtube.com/watch?v=7btQ3VeAYCc&ab_channel=jhonatan_611'
    controls
    width='70%'
    height='70%'    
    />
    </div>
    <div class="relative top-44 left-1/3">
    <Link to="/Pregunta15" class=" w-2 h-10 my-40 text-center text-white font-Ubuntu border-2 border-white rounded-lg " >Siguiente Pregunta</Link>
    </div>
</div>
}

export default Video14;