window.addEventListener('load',calcular);
let senoDelAngulo;
let seno;
let valorFuerza;
let valorCampo;
let velocidad;

let masaDeLaParticula;
let cargaDelaParticula

let vectorVelocidad;
let vectorCampo;
let valorParticula;



function calcular(){

    valorCampo = document.getElementById("campo").value;
    velocidad = document.getElementById("velocidad").value; 
    senoDelAngulo = document.getElementById("angulo").value;

    let SelectvectorCampo = document.getElementById('vectorCampo');
    vectorCampo = SelectvectorCampo.options[SelectvectorCampo.selectedIndex].value;

    let SelectvectorVelocidad = document.getElementById('vectorVelocidad');
    vectorVelocidad = SelectvectorVelocidad.options[SelectvectorVelocidad.selectedIndex].value;

    let SelectvectorParticula = document.getElementById('particula');
    valorParticula = SelectvectorParticula.options[SelectvectorParticula.selectedIndex].value;

    if(valorParticula == "Protón"){

        masaDeLaParticula =  1.67e-27;
        cargaDelaParticula = 1.60e-19;
        


    }else{

        masaDeLaParticula =  9.11e-31;
        cargaDelaParticula = 1.60e-19;

    }

    if(senoDelAngulo == 90){
        
        seno = 1;

    }else if(senoDelAngulo == 180){

        seno = 1;

    }

    if (vectorVelocidad != vectorCampo){

        valorFuerza = (cargaDelaParticula * velocidad * valorCampo * seno)

        if(vectorCampo == "Entrante" && vectorVelocidad == "Arriba" && valorParticula == "Protón"){

           document.getElementById('imagen').innerHTML = `
           <span>Fuerza: ${valorFuerza} N </span> </br>
           <span>Velocidad: ${velocidad} m/s</span> </br>
           <span>Campo: ${valorCampo} T</span> </br>
           <img src="fuerzas/fuerza1.png">`

    
        }else if(vectorCampo == "Entrante" && vectorVelocidad == "Derecha" && valorParticula == "Protón"){
    
        }else if(vectorCampo == "Entrante" && vectorVelocidad == "Abajo" && valorParticula == "Protón"){
            
        }else if(vectorCampo == "Entrante" && vectorVelocidad == "Izquierda" && valorParticula == "Protón"){
            
        }else if(vectorCampo == "Entrante" && vectorVelocidad == "Arriba" && valorParticula == "Electrón"){
    
        }else if(vectorCampo == "Entrante" && vectorVelocidad == "Derecha" && valorParticula == "Electrón"){
            
        }else if(vectorCampo == "Entrante" && vectorVelocidad == "Abajo" && valorParticula == "Electrón"){
            
        }else if(vectorCampo == "Entrante" && vectorVelocidad == "Izquierda" && valorParticula == "Electrón"){
    
    
            //entrante
    
    
        }else if(vectorCampo == "Saliente" && vectorVelocidad == "Arriba" && valorParticula == "Protón"){
    
        }else if(vectorCampo == "Saliente" && vectorVelocidad == "Derecha" && valorParticula == "Protón"){
            
        }else if(vectorCampo == "Saliente" && vectorVelocidad == "Abajo" && valorParticula == "Protón"){
            
        }else if(vectorCampo == "Saliente" && vectorVelocidad == "Izquierda" && valorParticula == "Protón"){
            
        }else if(vectorCampo == "Saliente" && vectorVelocidad == "Arriba" && valorParticula == "Electrón"){
    
        }else if(vectorCampo == "Saliente" && vectorVelocidad == "Derecha" && valorParticula == "Electrón"){
            
        }else if(vectorCampo == "Saliente" && vectorVelocidad == "Abajo" && valorParticula == "Electrón"){
            
        }else if(vectorCampo == "Saliente" && vectorVelocidad == "Izquierda" && valorParticula == "Electrón"){
            
            //saliente
    
        }else if(vectorCampo == "Arriba" && vectorVelocidad == "Derecha" && valorParticula == "Protón"){
    
        }else if(vectorCampo == "Arriba" && vectorVelocidad == "Saliente" && valorParticula == "Protón"){
            
        }else if(vectorCampo == "Arriba" && vectorVelocidad == "Izquierda" && valorParticula == "Protón"){
            
        }else if(vectorCampo == "Arriba" && vectorVelocidad == "Entrante" && valorParticula == "Protón"){
            
        }else if(vectorCampo == "Arriba" && vectorVelocidad == "Derecha" && valorParticula == "Electrón"){
    
        }else if(vectorCampo == "Arriba" && vectorVelocidad == "Saliente" && valorParticula == "Electrón"){
            
        }else if(vectorCampo == "Arriba" && vectorVelocidad == "Izquierda" && valorParticula == "Electrón"){
            
        }else if(vectorCampo == "Arriba" && vectorVelocidad == "Entrante" && valorParticula == "Electrón"){
    
            //Arriba
            
        }else if(vectorCampo == "Abajo" && vectorVelocidad == "Izquierda" && valorParticula == "Protón"){
    
        }else if(vectorCampo == "Abajo" && vectorVelocidad == "Saliente" && valorParticula == "Protón"){
            
        }else if(vectorCampo == "Abajo" && vectorVelocidad == "Derecha" && valorParticula == "Protón"){
            
        }else if(vectorCampo == "Abajo" && vectorVelocidad == "Entrante" && valorParticula == "Protón"){
            
        }else if(vectorCampo == "Abajo" && vectorVelocidad == "Izquierda" && valorParticula == "Electrón"){
    
        }else if(vectorCampo == "Abajo" && vectorVelocidad == "Saliente" && valorParticula == "Electrón"){
            
        }else if(vectorCampo == "Abajo" && vectorVelocidad == "Derecha" && valorParticula == "Electrón"){
            
        }else if(vectorCampo == "Abajo" && vectorVelocidad == "Entrante" && valorParticula == "Electrón"){
    
            //Abajo
            
        }else if(vectorCampo == "Izquierda" && vectorVelocidad == "Entrante" && valorParticula == "Protón"){
    
        }else if(vectorCampo == "Izquierda" && vectorVelocidad == "Arriba" && valorParticula == "Protón"){
            
        }else if(vectorCampo == "Izquierda" && vectorVelocidad == "Saliente" && valorParticula == "Protón"){
            
        }else if(vectorCampo == "Izquierda" && vectorVelocidad == "Abajo" && valorParticula == "Protón"){
            
        }else if(vectorCampo == "Izquierda" && vectorVelocidad == "Entrante" && valorParticula == "Electrón"){
    
        }else if(vectorCampo == "Izquierda" && vectorVelocidad == "Arriba" && valorParticula == "Electrón"){
            
        }else if(vectorCampo == "Izquierda" && vectorVelocidad == "Saliente" && valorParticula == "Electrón"){
            
        }else if(vectorCampo == "Izquierda" && vectorVelocidad == "Abajo" && valorParticula == "Electrón"){
    
            //Izquierda
            
        }else if(vectorCampo == "Derecha" && vectorVelocidad == "Entrante" && valorParticula == "Protón"){
    
        }else if(vectorCampo == "Derecha" && vectorVelocidad == "Arriba" && valorParticula == "Protón"){
            
        }else if(vectorCampo == "Derecha" && vectorVelocidad == "Saliente" && valorParticula == "Protón"){
            
        }else if(vectorCampo == "Derecha" && vectorVelocidad == "Abajo" && valorParticula == "Protón"){
            
        }else if(vectorCampo == "Derecha" && vectorVelocidad == "Entrante" && valorParticula == "Electrón"){
    
        }else if(vectorCampo == "Derecha" && vectorVelocidad == "Arriba" && valorParticula == "Electrón"){
            
        }else if(vectorCampo == "Derecha" && vectorVelocidad == "Saliente" && valorParticula == "Electrón"){
            
        }else if(vectorCampo == "Derecha" && vectorVelocidad == "Abajo" && valorParticula == "Electrón"){
    
            //Izquierda
            
        }else{
            console.log("Algo está mal")
        }
            
    
    
    }else{
    
        console.log("Error, hay dos vectores que apuntan en la misma direccion")
    
    }

}
