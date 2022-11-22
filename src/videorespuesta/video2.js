import background from '../imagenes/fondo_ayuda.jpg';
import React from 'react';
import ReactPlayer from'react-player';
import {Routes,Route, Link, Outlet} from 'react-router-dom'
import video2 from '../videos/Video2.mp4'

const Video2 = ()=>{
    return <div class="w-screec h-screen " style={{ backgroundImage:`url(${background})`, backgroundRepeat: 'no-repeat' }}>
    <div class="relative left-36  top-10 w-11/12">
    <ReactPlayer   url='https://www.youtube.com/watch?v=CZl-BRVvhEQ&ab_channel=jhonatan_611'
    controls
     
    />
    </div>
    <div class="relative top-44 left-1/3">
    <Link to="/Pregunta3" class=" w-2 h-10 my-40 text-center text-white font-Ubuntu border-2 border-white rounded-lg " >Siguiente Pregunta</Link>
    </div>
</div>
}

export default Video2;