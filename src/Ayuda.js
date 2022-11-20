import background from './imagenes/fondo.jpg'; //importacion para  un recurso estatico

const Ayuda = ()=>{
    return <div class="w-screec h-screen" style={{ backgroundImage:`url(${background})`, backgroundRepeat: 'no-repeat' }}>

<br/>
            <br/>   
                        <h1 class="text-xl font-Ubuntu text-white text-center "> Necesitas Ayuda </h1>
                        <br/><br/>
            <div class="text-white">
            <p class="font-Ubuntu text-justify text-lg w-3/4 m-auto"> Te encuentras en la sección de ayuda si en estos momentos tienes alguna duda sobre 
                la aplicación te invitamos que consultes el manual de usuario de la herramienta este 
                documento cuenta con la información necesaria para responder tus preguntas si en el 
                manual no está la información que estas buscando te invitamos que nos envíes un email 
                a alguno de los siguientes correos:  </p>

                <br/><br/>

                <p class="w-3/4 relative left-1/3 text-center text-lg text-sky-500 underline underline-offset-0">Jhonatan.Amayac@campusucc.edu.co <br/>
                    Juan.cruzpi@campusucc.edu.co</p>
            </div>
            <div class="text-white">
            <p class="font-Ubuntu text-justify text-lg w-3/4 m-auto ">Si está presentando alguna falla con la aplicación lo invitamos a que envié un correo 
                con una descripción de cual es la falla que está presentando el navegador en el cual 
                se esta presentando la falla y una imagen de la falla a los siguientes correos:</p>

                <p class="w-3/4 m-auto text-lg text-sky-500 underline underline-offset-0">Jhonatan.Amayac@campusucc.edu.co <br/>
                    Juan.cruzpi@campusucc.edu.co
                </p>

                <p class="font-Ubuntu text-justify text-lg text-red-500 w-3/4 m-auto">Nota* los email serán atentados y respondidos de 8 a 15 días calendario  
                   este tiempo empezara a contar un día después  de recibido el correo </p>
                   </div>
    </div>
}

export default Ayuda;