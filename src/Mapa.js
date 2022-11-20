import background from './imagenes/fondo.jpg'; //importacion para  un recurso estatico
const cherimagenes = require.context('./imagenes', true);
const Mapa=()=>{
    return <div class="m-auto h-screen w-screen relative right-20 "style={{ backgroundImage:`url(${background})`, backgroundRepeat: 'no-repeat' }}>

           <p class="font-Ubuntu text-center text-white"> Esta Trivia esta conformada por 30 preguntas las cuales<br/> hacen referencia al antes, durante, después y la actualidad<br/> de la ciudad de Chernóbil0. En cada pantalla encontramos una pregunta con 4 opciones de respuesta,<br/> cada botón hace referencia a una respuesta, el usuario debe seleccionar una de las cuatro opciones, <br/>si el usuario selecciona la respuesta correcta será direccionado a la siguiente pregunta,<br/> pero si el usuario selecciona una opción incorrecta será seleccionado a una nueva pantalla donde se reproducirá<br/> un video corto el cual dará la retroalimentación a la pregunta, cuando el<br/> usuario finalice el video deberá dar clic en el botón "Siguiente pregunta" y será direccionado automáticamente a la siguiente <br/>pregunta.</p>

           <img src={cherimagenes(`./mapa.jpg`)} class="m-auto relative top-" />
        </div>
    
}

export default Mapa;