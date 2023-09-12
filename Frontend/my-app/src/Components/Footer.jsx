import Maps from "./Maps";

const Footer = () => {

    return(

    
        <div className="footer">

           <div className="horarios"> 
            <h6 >Nuestro horario de atención es de Lunes a Viernes de 8:00 AM a 6:00 Pm. Por lo general, nos comunicaremos con un máximo de 24 horas después de la consulta, pero si en ese tiempo no te hemos contactado, envíenos un correo electrónico </h6>  
           </div>

           <div className="datos">
            
            <h6>johandiaz360@gmail.com</h6>    
         
            <h6>Dirección de Oficina: Omaha Nebraska</h6>
            <h6>Copyright Johan Díaz Films. 2023</h6>
            </div>

            <div className="mapafooter"> <Maps/> 
            </div>         
        </div>


   )


    
}
export default Footer