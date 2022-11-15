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
            <span class="fuerza">Fuerza: ${valorFuerza} N </span> </br>
            <span class="velocidad">Velocidad: ${velocidad} m/s</span> </br>
            <span class="campo">Campo: ${valorCampo} T</span> </br>
            <img src="fuerzas/fernando/imagen1.jpg">`

    
        }else if(vectorCampo == "Entrante" && vectorVelocidad == "Derecha" && valorParticula == "Protón"){

            document.getElementById('imagen').innerHTML = `
            <span class="fuerza">Fuerza: ${valorFuerza} N </span> </br>
            <span class="velocidad">Velocidad: ${velocidad} m/s</span> </br>
            <span class="campo">Campo: ${valorCampo} T</span> </br>
            <img src="fuerzas/fernando/imagen2.jpg">`
    
        }else if(vectorCampo == "Entrante" && vectorVelocidad == "Abajo" && valorParticula == "Protón"){

            document.getElementById('imagen').innerHTML = `
            <span class="fuerza">Fuerza: ${valorFuerza} N </span> </br>
            <span class="velocidad">Velocidad: ${velocidad} m/s</span> </br>
            <span class="campo">Campo: ${valorCampo} T</span> </br>
            <img src="fuerzas/fernando/imagen3.jpg">`
            
        }else if(vectorCampo == "Entrante" && vectorVelocidad == "Izquierda" && valorParticula == "Protón"){

            document.getElementById('imagen').innerHTML = `
            <span class="fuerza">Fuerza: ${valorFuerza} N </span> </br>
            <span class="velocidad">Velocidad: ${velocidad} m/s</span> </br>
            <span class="campo">Campo: ${valorCampo} T</span> </br>
            <img src="fuerzas/fernando/imagen4.jpg">`
            
        }else if(vectorCampo == "Entrante" && vectorVelocidad == "Arriba" && valorParticula == "Electrón"){

            document.getElementById('imagen').innerHTML = `
            <span class="fuerza">Fuerza: ${valorFuerza} N </span> </br>
            <span class="velocidad">Velocidad: ${velocidad} m/s</span> </br>
            <span class="campo">Campo: ${valorCampo} T</span> </br>
            <img src="fuerzas/fernando/imagen5.jpg">`
    
        }else if(vectorCampo == "Entrante" && vectorVelocidad == "Derecha" && valorParticula == "Electrón"){

            document.getElementById('imagen').innerHTML = `
            <span class="fuerza">Fuerza: ${valorFuerza} N </span> </br>
            <span class="velocidad">Velocidad: ${velocidad} m/s</span> </br>
            <span class="campo">Campo: ${valorCampo} T</span> </br>
            <img src="fuerzas/fernando/imagen6.jpg">`
            
        }else if(vectorCampo == "Entrante" && vectorVelocidad == "Abajo" && valorParticula == "Electrón"){

            document.getElementById('imagen').innerHTML = `
            <span class="fuerza">Fuerza: ${valorFuerza} N </span> </br>
            <span class="velocidad">Velocidad: ${velocidad} m/s</span> </br>
            <span class="campo">Campo: ${valorCampo} T</span> </br>
            <img src="fuerzas/fernando/imagen7.jpg">`
            
        }else if(vectorCampo == "Entrante" && vectorVelocidad == "Izquierda" && valorParticula == "Electrón"){
    
    
            document.getElementById('imagen').innerHTML = `
            <span class="fuerza">Fuerza: ${valorFuerza} N </span> </br>
            <span class="velocidad">Velocidad: ${velocidad} m/s</span> </br>
            <span class="campo">Campo: ${valorCampo} T</span> </br>
            <img src="fuerzas/fernando/imagen8.jpg">`
    
    
        }else if(vectorCampo == "Saliente" && vectorVelocidad == "Arriba" && valorParticula == "Protón"){

            document.getElementById('imagen').innerHTML = `
            <span class="fuerza">Fuerza: ${valorFuerza} N </span> </br>
            <span class="velocidad">Velocidad: ${velocidad} m/s</span> </br>
            <span class="campo">Campo: ${valorCampo} T</span> </br>
            <img src="fuerzas/fernando/imagen9.jpg">`
    
        }else if(vectorCampo == "Saliente" && vectorVelocidad == "Derecha" && valorParticula == "Protón"){

            document.getElementById('imagen').innerHTML = `
            <span class="fuerza">Fuerza: ${valorFuerza} N </span> </br>
            <span class="velocidad">Velocidad: ${velocidad} m/s</span> </br>
            <span class="campo">Campo: ${valorCampo} T</span> </br>
            <img src="fuerzas/fernando/imagen10.jpg">`
            
        }else if(vectorCampo == "Saliente" && vectorVelocidad == "Abajo" && valorParticula == "Protón"){

            document.getElementById('imagen').innerHTML = `
            <span class="fuerza">Fuerza: ${valorFuerza} N </span> </br>
            <span class="velocidad">Velocidad: ${velocidad} m/s</span> </br>
            <span class="campo">Campo: ${valorCampo} T</span> </br>
            <img src="fuerzas/fernando/imagen11.jpg">`
            
        }else if(vectorCampo == "Saliente" && vectorVelocidad == "Izquierda" && valorParticula == "Protón"){

            document.getElementById('imagen').innerHTML = `
            <span class="fuerza">Fuerza: ${valorFuerza} N </span> </br>
            <span class="velocidad">Velocidad: ${velocidad} m/s</span> </br>
            <span class="campo">Campo: ${valorCampo} T</span> </br>
            <img src="fuerzas/fernando/imagen12.jpg">`
            
        }else if(vectorCampo == "Saliente" && vectorVelocidad == "Arriba" && valorParticula == "Electrón"){

            document.getElementById('imagen').innerHTML = `
            <span class="fuerza">Fuerza: ${valorFuerza} N </span> </br>
            <span class="velocidad">Velocidad: ${velocidad} m/s</span> </br>
            <span class="campo">Campo: ${valorCampo} T</span> </br>
            <img src="fuerzas/fernando/imagen13.jpg">`
    
        }else if(vectorCampo == "Saliente" && vectorVelocidad == "Derecha" && valorParticula == "Electrón"){

            document.getElementById('imagen').innerHTML = `
            <span class="fuerza">Fuerza: ${valorFuerza} N </span> </br>
            <span class="velocidad">Velocidad: ${velocidad} m/s</span> </br>
            <span class="campo">Campo: ${valorCampo} T</span> </br>
            <img src="fuerzas/fernando/imagen14.jpg">`
            
        }else if(vectorCampo == "Saliente" && vectorVelocidad == "Abajo" && valorParticula == "Electrón"){

            document.getElementById('imagen').innerHTML = `
            <span class="fuerza">Fuerza: ${valorFuerza} N </span> </br>
            <span class="velocidad">Velocidad: ${velocidad} m/s</span> </br>
            <span class="campo">Campo: ${valorCampo} T</span> </br>
            <img src="fuerzas/fernando/imagen15.jpg">`
            
        }else if(vectorCampo == "Saliente" && vectorVelocidad == "Izquierda" && valorParticula == "Electrón"){
            
            document.getElementById('imagen').innerHTML = `
            <span class="fuerza">Fuerza: ${valorFuerza} N </span> </br>
            <span class="velocidad">Velocidad: ${velocidad} m/s</span> </br>
            <span class="campo">Campo: ${valorCampo} T</span> </br>
            <img src="fuerzas/fernando/imagen16.jpg">`
    
        }else if(vectorCampo == "Arriba" && vectorVelocidad == "Derecha" && valorParticula == "Protón"){

            document.getElementById('imagen').innerHTML = `
           <span class="fuerza">Fuerza: ${valorFuerza} N </span> </br>
           <span class="velocidad">Velocidad: ${velocidad} m/s</span> </br>
           <span class="campo">Campo: ${valorCampo} T</span> </br>
           <img src="fuerzas/omar/fisica1.png">`
    
        }else if(vectorCampo == "Arriba" && vectorVelocidad == "Saliente" && valorParticula == "Protón"){

            document.getElementById('imagen').innerHTML = `
            <span class="fuerza">Fuerza: ${valorFuerza} N </span> </br>
            <span class="velocidad">Velocidad: ${velocidad} m/s</span> </br>
            <span class="campo">Campo: ${valorCampo} T</span> </br>
            <img src="fuerzas/omar/fisica2.png">`
            
        }else if(vectorCampo == "Arriba" && vectorVelocidad == "Izquierda" && valorParticula == "Protón"){

            document.getElementById('imagen').innerHTML = `
            <span class="fuerza">Fuerza: ${valorFuerza} N </span> </br>
            <span class="velocidad">Velocidad: ${velocidad} m/s</span> </br>
            <span class="campo">Campo: ${valorCampo} T</span> </br>
            <img src="fuerzas/omar/fisica3.png">`
            
        }else if(vectorCampo == "Arriba" && vectorVelocidad == "Entrante" && valorParticula == "Protón"){

            document.getElementById('imagen').innerHTML = `
            <span class="fuerza">Fuerza: ${valorFuerza} N </span> </br>
            <span class="velocidad">Velocidad: ${velocidad} m/s</span> </br>
            <span class="campo">Campo: ${valorCampo} T</span> </br>
            <img src="fuerzas/omar/fisica4.png">`
            
        }else if(vectorCampo == "Arriba" && vectorVelocidad == "Derecha" && valorParticula == "Electrón"){

            document.getElementById('imagen').innerHTML = `
            <span class="fuerza">Fuerza: ${valorFuerza} N </span> </br>
            <span class="velocidad">Velocidad: ${velocidad} m/s</span> </br>
            <span class="campo">Campo: ${valorCampo} T</span> </br>
            <img src="fuerzas/omar/fisica5.png">`
    
        }else if(vectorCampo == "Arriba" && vectorVelocidad == "Saliente" && valorParticula == "Electrón"){

            document.getElementById('imagen').innerHTML = `
            <span class="fuerza">Fuerza: ${valorFuerza} N </span> </br>
            <span class="velocidad">Velocidad: ${velocidad} m/s</span> </br>
            <span class="campo">Campo: ${valorCampo} T</span> </br>
            <img src="fuerzas/omar/fisica6.png">`
            
        }else if(vectorCampo == "Arriba" && vectorVelocidad == "Izquierda" && valorParticula == "Electrón"){

            document.getElementById('imagen').innerHTML = `
            <span class="fuerza">Fuerza: ${valorFuerza} N </span> </br>
            <span class="velocidad">Velocidad: ${velocidad} m/s</span> </br>
            <span class="campo">Campo: ${valorCampo} T</span> </br>
            <img src="fuerzas/omar/fisica7.png">`
            
        }else if(vectorCampo == "Arriba" && vectorVelocidad == "Entrante" && valorParticula == "Electrón"){
    
            document.getElementById('imagen').innerHTML = `
            <span class="fuerza">Fuerza: ${valorFuerza} N </span> </br>
            <span class="velocidad">Velocidad: ${velocidad} m/s</span> </br>
            <span class="campo">Campo: ${valorCampo} T</span> </br>
            <img src="fuerzas/omar/fisica8.png">`
            
        }else if(vectorCampo == "Abajo" && vectorVelocidad == "Izquierda" && valorParticula == "Protón"){

            document.getElementById('imagen').innerHTML = `
            <span class="fuerza">Fuerza: ${valorFuerza} N </span> </br>
            <span class="velocidad">Velocidad: ${velocidad} m/s</span> </br>
            <span class="campo">Campo: ${valorCampo} T</span> </br>
            <img src="fuerzas/omar/fisica9.png">`
    
        }else if(vectorCampo == "Abajo" && vectorVelocidad == "Saliente" && valorParticula == "Protón"){

            document.getElementById('imagen').innerHTML = `
            <span class="fuerza">Fuerza: ${valorFuerza} N </span> </br>
            <span class="velocidad">Velocidad: ${velocidad} m/s</span> </br>
            <span class="campo">Campo: ${valorCampo} T</span> </br>
            <img src="fuerzas/omar/fisica10.png">`
            
        }else if(vectorCampo == "Abajo" && vectorVelocidad == "Derecha" && valorParticula == "Protón"){

            document.getElementById('imagen').innerHTML = `
            <span class="fuerza">Fuerza: ${valorFuerza} N </span> </br>
            <span class="velocidad">Velocidad: ${velocidad} m/s</span> </br>
            <span class="campo">Campo: ${valorCampo} T</span> </br>
            <img src="fuerzas/omar/fisica11.png">`
            
        }else if(vectorCampo == "Abajo" && vectorVelocidad == "Entrante" && valorParticula == "Protón"){

            document.getElementById('imagen').innerHTML = `
            <span class="fuerza">Fuerza: ${valorFuerza} N </span> </br>
            <span class="velocidad">Velocidad: ${velocidad} m/s</span> </br>
            <span class="campo">Campo: ${valorCampo} T</span> </br>
            <img src="fuerzas/omar/fisica12.png">`
            
        }else if(vectorCampo == "Abajo" && vectorVelocidad == "Izquierda" && valorParticula == "Electrón"){

            document.getElementById('imagen').innerHTML = `
            <span class="fuerza">Fuerza: ${valorFuerza} N </span> </br>
            <span class="velocidad">Velocidad: ${velocidad} m/s</span> </br>
            <span class="campo">Campo: ${valorCampo} T</span> </br>
            <img src="fuerzas/omar/fisica12.png">`
    
        }else if(vectorCampo == "Abajo" && vectorVelocidad == "Saliente" && valorParticula == "Electrón"){

            document.getElementById('imagen').innerHTML = `
            <span class="fuerza">Fuerza: ${valorFuerza} N </span> </br>
            <span class="velocidad">Velocidad: ${velocidad} m/s</span> </br>
            <span class="campo">Campo: ${valorCampo} T</span> </br>
            <img src="fuerzas/omar/fisica14.png">`
            
        }else if(vectorCampo == "Abajo" && vectorVelocidad == "Derecha" && valorParticula == "Electrón"){

            document.getElementById('imagen').innerHTML = `
            <span class="fuerza">Fuerza: ${valorFuerza} N </span> </br>
            <span class="velocidad">Velocidad: ${velocidad} m/s</span> </br>
            <span class="campo">Campo: ${valorCampo} T</span> </br>
            <img src="fuerzas/omar/fisica15.png">`
            
        }else if(vectorCampo == "Abajo" && vectorVelocidad == "Entrante" && valorParticula == "Electrón"){
    
            document.getElementById('imagen').innerHTML = `
            <span class="fuerza">Fuerza: ${valorFuerza} N </span> </br>
            <span class="velocidad">Velocidad: ${velocidad} m/s</span> </br>
            <span class="campo">Campo: ${valorCampo} T</span> </br>
            <img src="fuerzas/omar/fisica16.png">`
            
        }else if(vectorCampo == "Izquierda" && vectorVelocidad == "Entrante" && valorParticula == "Protón"){

            document.getElementById('imagen').innerHTML = `
           <span class="fuerza">Fuerza: ${valorFuerza} N </span> </br>
           <span class="velocidad">Velocidad: ${velocidad} m/s</span> </br>
           <span class="campo">Campo: ${valorCampo} T</span> </br>
           <img src="fuerzas/jordi/vectores01.jpg">`
    
        }else if(vectorCampo == "Izquierda" && vectorVelocidad == "Arriba" && valorParticula == "Protón"){

            document.getElementById('imagen').innerHTML = `
           <span class="fuerza">Fuerza: ${valorFuerza} N </span> </br>
           <span class="velocidad">Velocidad: ${velocidad} m/s</span> </br>
           <span class="campo">Campo: ${valorCampo} T</span> </br>
           <img src="fuerzas/jordi/vectores02.jpg">`
            
        }else if(vectorCampo == "Izquierda" && vectorVelocidad == "Saliente" && valorParticula == "Protón"){

            document.getElementById('imagen').innerHTML = `
           <span class="fuerza">Fuerza: ${valorFuerza} N </span> </br>
           <span class="velocidad">Velocidad: ${velocidad} m/s</span> </br>
           <span class="campo">Campo: ${valorCampo} T</span> </br>
           <img src="fuerzas/jordi/vectores03.jpg">`
            
        }else if(vectorCampo == "Izquierda" && vectorVelocidad == "Abajo" && valorParticula == "Protón"){

            document.getElementById('imagen').innerHTML = `
           <span class="fuerza">Fuerza: ${valorFuerza} N </span> </br>
           <span class="velocidad">Velocidad: ${velocidad} m/s</span> </br>
           <span class="campo">Campo: ${valorCampo} T</span> </br>
           <img src="fuerzas/jordi/vectores04.jpg">`
            
        }else if(vectorCampo == "Izquierda" && vectorVelocidad == "Entrante" && valorParticula == "Electrón"){

            document.getElementById('imagen').innerHTML = `
           <span class="fuerza">Fuerza: ${valorFuerza} N </span> </br>
           <span class="velocidad">Velocidad: ${velocidad} m/s</span> </br>
           <span class="campo">Campo: ${valorCampo} T</span> </br>
           <img src="fuerzas/jordi/vectores05.jpg">`
    
        }else if(vectorCampo == "Izquierda" && vectorVelocidad == "Arriba" && valorParticula == "Electrón"){

            document.getElementById('imagen').innerHTML = `
           <span class="fuerza">Fuerza: ${valorFuerza} N </span> </br>
           <span class="velocidad">Velocidad: ${velocidad} m/s</span> </br>
           <span class="campo">Campo: ${valorCampo} T</span> </br>
           <img src="fuerzas/jordi/vectores06.jpg">`
            
        }else if(vectorCampo == "Izquierda" && vectorVelocidad == "Saliente" && valorParticula == "Electrón"){

            document.getElementById('imagen').innerHTML = `
           <span class="fuerza">Fuerza: ${valorFuerza} N </span> </br>
           <span class="velocidad">Velocidad: ${velocidad} m/s</span> </br>
           <span class="campo">Campo: ${valorCampo} T</span> </br>
           <img src="fuerzas/jordi/vectores07.jpg">`
            
        }else if(vectorCampo == "Izquierda" && vectorVelocidad == "Abajo" && valorParticula == "Electrón"){        
    
            document.getElementById('imagen').innerHTML = `
           <span class="fuerza">Fuerza: ${valorFuerza} N </span> </br>
           <span class="velocidad">Velocidad: ${velocidad} m/s</span> </br>
           <span class="campo">Campo: ${valorCampo} T</span> </br>
           <img src="fuerzas/jordi/vectores08.jpg">`
            
        }else if(vectorCampo == "Derecha" && vectorVelocidad == "Entrante" && valorParticula == "Protón"){

            document.getElementById('imagen').innerHTML = `
           <span class="fuerza">Fuerza: ${valorFuerza} N </span> </br>
           <span class="velocidad">Velocidad: ${velocidad} m/s</span> </br>
           <span class="campo">Campo: ${valorCampo} T</span> </br>
           <img src="fuerzas/jordi/vectores09.jpg">`
    
        }else if(vectorCampo == "Derecha" && vectorVelocidad == "Arriba" && valorParticula == "Protón"){

            document.getElementById('imagen').innerHTML = `
           <span class="fuerza">Fuerza: ${valorFuerza} N </span> </br>
           <span class="velocidad">Velocidad: ${velocidad} m/s</span> </br>
           <span class="campo">Campo: ${valorCampo} T</span> </br>
           <img src="fuerzas/jordi/vectores10.jpg">`
            
        }else if(vectorCampo == "Derecha" && vectorVelocidad == "Saliente" && valorParticula == "Protón"){

            document.getElementById('imagen').innerHTML = `
           <span class="fuerza">Fuerza: ${valorFuerza} N </span> </br>
           <span class="velocidad">Velocidad: ${velocidad} m/s</span> </br>
           <span class="campo">Campo: ${valorCampo} T</span> </br>
           <img src="fuerzas/jordi/vectores11.jpg">`
            
        }else if(vectorCampo == "Derecha" && vectorVelocidad == "Abajo" && valorParticula == "Protón"){

            document.getElementById('imagen').innerHTML = `
           <span class="fuerza">Fuerza: ${valorFuerza} N </span> </br>
           <span class="velocidad">Velocidad: ${velocidad} m/s</span> </br>
           <span class="campo">Campo: ${valorCampo} T</span> </br>
           <img src="fuerzas/jordi/vectores12.jpg">`
            
        }else if(vectorCampo == "Derecha" && vectorVelocidad == "Entrante" && valorParticula == "Electrón"){

            document.getElementById('imagen').innerHTML = `
           <span class="fuerza">Fuerza: ${valorFuerza} N </span> </br>
           <span class="velocidad">Velocidad: ${velocidad} m/s</span> </br>
           <span class="campo">Campo: ${valorCampo} T</span> </br>
           <img src="fuerzas/jordi/vectores13.jpg">`
    
        }else if(vectorCampo == "Derecha" && vectorVelocidad == "Arriba" && valorParticula == "Electrón"){

            document.getElementById('imagen').innerHTML = `
           <span class="fuerza">Fuerza: ${valorFuerza} N </span> </br>
           <span class="velocidad">Velocidad: ${velocidad} m/s</span> </br>
           <span class="campo">Campo: ${valorCampo} T</span> </br>
           <img src="fuerzas/jordi/vectores14.jpg">`
            
        }else if(vectorCampo == "Derecha" && vectorVelocidad == "Saliente" && valorParticula == "Electrón"){

            document.getElementById('imagen').innerHTML = `
           <span class="fuerza">Fuerza: ${valorFuerza} N </span> </br>
           <span class="velocidad">Velocidad: ${velocidad} m/s</span> </br>
           <span class="campo">Campo: ${valorCampo} T</span> </br>
           <img src="fuerzas/jordi/vectores15.jpg">`
            
        }else if(vectorCampo == "Derecha" && vectorVelocidad == "Abajo" && valorParticula == "Electrón"){
    
            document.getElementById('imagen').innerHTML = `
           <span class="fuerza">Fuerza: ${valorFuerza} N </span> </br>
           <span class="velocidad">Velocidad: ${velocidad} m/s</span> </br>
           <span class="campo">Campo: ${valorCampo} T</span> </br>
           <img src="fuerzas/jordi/vectores16.jpg">`
            
        }else{
            console.log("Algo está mal")
        }
            
    
    
    }else{
    
        console.log("Hay un error en los vectores")
    
    }

}
