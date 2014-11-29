$(document).ready(function() {
	//Validacion con BootstrapValidator
	fl = $('#form-login');
    fl.bootstrapValidator({ 
        message: 'El valor no es valido.',
        //fields: name de los inputs del formulario, la regla que debe cumplir y el mensaje que mostrara si no cumple la regla
        fields: {
                usuario: {
                        validators: {
                                notEmpty: {
                                        message: 'Este campo es requerido.'
                                },
                                emailAddress:{
                                        message: 'El correo no es valido.'
                                }
                        }
                },
                password: {
                        validators: {
                                notEmpty: {
                                        message: 'Este campo es requerido.'
                                }
                        }
                }
                
        },
        //Cuando el formulario se lleno correctamente y se envia, se ejecuta esta funcion
        submitHandler: function(validator, form, submitButton) {
            //AQUI PODEMOS ENVIAR LOS DATOS DEL FORMULARIO MEDIANTE AJAX A NUESTRO SERVIDOR Y RECIBIR UNA RESPUESTA...
            //PARA ESTE EJEMPLO NO SE UTILIZA AJAX...SI QUEIRES IMPLEMENTARLO PUEDES USAR LOS METODOS POST O GET DE JQUERY PARA ENVIAR EL FORMULARIO

            //Tomamos el valor de los cuadros de texto con JQEURY
            usuario = $('#usuario').val();
            pass = $('#password').val();

            //Comparamos si el usuario y la contraseña son correctos
            if(usuario == 'user2550@netosolis.com' && pass == 'pass990'){
                location.href = "principal.html"
            }
            //Si no son correctos mandamos un mensage de error...y limpiamos el cuandro de texto del password
            else{
                nota("error","Los Datos Son Incorrectos.");
                 $('#password').val('');
            }
        }
    });
});


//funcion para enviar notificaciones al usuario la libreria la descargas de http://ned.im/noty/
//op: "error", "info" ,"success"
function nota(op,msg,time){
    if(time == undefined)time = 5000;
    var n = noty({text:msg,maxVisible: 1,type:op,killer:true,timeout:time,layout: 'top'});
}