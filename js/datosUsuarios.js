// JS PARA LA GESTIÓN DE LOS DATOS DE USUARIO
// @autor Denis Arangue <denisarangue18@gmail.com>
// {Link repositorio}
var nick;
var tamano;
var email;
var geolocalizacionTxt;
var avatarImg;

// sessionStorage
function datosUsuario(nick,tamano,email,avatarCont){
    sessionStorage.setItem('nick', nick.value);
    sessionStorage.setItem('tamano', tamano.value);
    sessionStorage.setItem('email', email.value);
    sessionStorage.setItem('geolocalizacionTxt', geolocalizacionTxt);
    sessionStorage.setItem('avatarImg', avatarCont.src);
}

function getDatosUsuario(){
    nick = sessionStorage.getItem('nick');
    tamano = sessionStorage.getItem('tamano');
    email = sessionStorage.getItem('email');
    avatarImg = sessionStorage.getItem('avatarImg'); 
}

function comprobacionDatosUsuario(){
    if(nick==null){
        sessionStorage.setItem('error', 'No se ha rellenado correctamente el formulario');
        return false;
    }
    return true;
}

function datoGeolocalizacion(){
    if(navigator.geolocation){
        geolocalizacionTxt = "El navegador no es compatible con API Geolocation";
    } else {
        navigator.geolocation.getCurrentPosition(
            // Exito
            (position) =>{geolocalizacionTxt='Latitud:'+position.coords.latitude+', Longitud:'+position.coords.longitude},
            // Error
            ()=>{geolocalizacionTxt = "La geolocalización no se ha podido realizar"}
        )
    }
}

// localStorage 
function historicoUsuarios(nick){
    let historicoStorage = localStorage.getItem('historico');
    let historico = [];
    if(historicoStorage==null){
        historico = [];        
    } else {
        historico = JSON.parse(historicoStorage);
    }
    let registroUsuario = {
        usuario:nick.value, 
        fecha: Date.now()
    }
    historico.push(registroUsuario);
    localStorage.setItem('historico', JSON.stringify(historico));
}