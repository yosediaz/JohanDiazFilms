import FormExample from "./FormExample"
import IndividualIntervalsExample from "./IndividualIntervalsExample"



const Inicio = () => {


    return(

    <div>
         <div>       
             <IndividualIntervalsExample/>             
         </div>
         <div className='descripcion'>
            <h1 className='texto'>Fotografía y video profesional para eventos, bodas, pre-bodas, 15 años, comerciales, proyectos musicales o personales. </h1>

            <h2 className='texto1'>
            Cada evento es único y cada momento irrepetible.

            Es por ésto, que nos dedicamos a documentar cada detalle mediante calidad profesional, con un toque personal en cada sesión. Que tu evento no quede sólo en recuerdos. No dejes pasar el mejor día de tu vida, sin tenerlo documentado para siempre.
            PELÍCULAS CAUTIVADORAS Y EMOTIVAS QUE SE CENTRAN EN TU VERDADERA HISTORIA. 
            Nuestras películas son únicas para usted y su historia, resistiendo la prueba del tiempo. 
            </h2>
         </div>
         <div className='contenedor'>
            
            <div className='servicios'> <img src="./img/camara.png" width="90" alt="Logo" /> <br></br><br></br>Videos:
            Calidad cinematográfica. Tu evento con la mejor definición, y un estilo único gracias a nuestra edición post-producción.</div>
           
            <div className='servicios'><img src="./img/drone.png" width="90" alt="Logo" /> <br></br><br></br>Drone:
            Hacemos que tus videos tengan un toque distintivo y muestren una perspectiva única, gracias a las tomas con nuestro Drone.</div>
            
            <div className='servicios'><img src="./img/foto.png" width="90" alt="Logo" /> <br></br><br></br>Fotografía Profesional:
            Tomas espontáneas, artísticas, de foto periodismo. Editamos foto por foto, para lograr así un resultado acorde al nivel que nos caracteriza.</div>
         </div>

         
         
         <div>
         
            <h1 className='parrafo'>
            ¡Hola! Mi Nombre es Johan, para mí este no es un trabajo, es mi pasión y me gusta crear películas únicas en cada ocasión. Por eso es importante conocerte mejor y saber más sobre tu proyecto.
            Tómate un tiempo y completa mi formulario de contacto si estás interesado en que capture tus momentos.
            </h1>
            <h2 className='textoformulario'>Deja tus datos y te contactaremos. Al llenar el formulario automáticamente    recibirás un correo con detalle de nuestros paquetes fotográficos y de videos.</h2>
            
            <FormExample/>
         </div>
    
   
    
         
      </div>

    )
    


    
}
export default Inicio