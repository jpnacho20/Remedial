var usuariosRegistrados = [];
//console.log(usuariosRegistrados);

function validar_nombre(nombre) {
    let arr = nombre.split('');
    let arr2 = nombre.toUpperCase();  
    let numCaracteres = arr.length;      
    const pattern = /^[A-Z ]*$/;
    if(numCaracteres > 0) {
        if(pattern.test(nombre)) {
            if(arr[0] === arr2[0])                
                return true; 
            else
                return false;        
        }          
        else
            return false; 
    }
    return false;
}

function validar_usuario(usuario) {
    let arr = usuario.split('');
    let arr2 = usuario.toLowerCase();  
    let numCaracteres = arr.length;  
    const pattern = /^[a-z0-9]*$/;    
    if(numCaracteres >= 6) {
        if(pattern.test(usuario)) {
            if(arr[0] === arr2[0])                
                return true; 
            else
                return false;        
        }          
        else
            return false; 
    }
    return false;
}

function validar_fechaNacimiento(fecha) { 
    let arr = fecha.split('');   
    let numCaracteres = arr.length;  
    const pattern = /^[0-9]*$/;       
    if(numCaracteres == 4) {
        if(pattern.test(fecha)) {               
            return true;             
        }          
        else
            return false; 
    }
    return false;
}

function validar_contrasena(contrasena, contrasena2) {
    let arr = contrasena.split('');
    let arr2 = contrasena2.split(''); 
    let numCaracteres = arr.length;  
    const pattern = /^[A-Za-z0-9]*$/; 
    if(numCaracteres >= 6 && numCaracteres <= 10) {
        if(pattern.test(contrasena)) {    
            if(arr[0] === arr2[0])                
                return true; 
            else
                return false;        
        }    
        else
            return false;  
    }    
    else
        return false;     
}

function validar_registro() {
    var validacion = true;
    var nombre = document.getElementById('txt_nombre').value;
    var usuario = document.getElementById('txt_usuario').value;
    var fechaNacimiento = document.getElementById('txt_fecha_nacimiento').value;
    var contrasena = document.getElementById('txt_contrasena').value;
    var contrasena2 = document.getElementById('txt_contrasena2').value;
    var mensaje = '';

    if(!validar_nombre(nombre)){
        validacion = false;
        mensaje = mensaje + 'El nombre debe ser en mayusculas y contener solo letras\n';
    }

    if(!validar_usuario(usuario)){
        validacion = false;
        mensaje = mensaje + 'El usuario debe ser en minuscula y contener solo letras y numeros.\nLa longitud del usuario debe ser mayor a 6 caracteres\n';
    }

    if(!validar_fechaNacimiento(fechaNacimiento)){
        validacion = false;
        mensaje = mensaje + 'El año debe contener solo numeros.\nEl año debe contener 4 caracteres\n';
    }

    if(!validar_contrasena(contrasena, contrasena2)){
        validacion = false;
        mensaje = mensaje + 'La contraseña debe contener solo letras y numeros.\nLa longitud de la contraseña debe ser entre 6 y 10 caracteres\nLas contraseñas no son iguales';
    }

    if(validacion) {
        var registro = {"Nombre":nombre,"Usuario":usuario,"Nacimiento":fechaNacimiento,"Contrasena":contrasena};
        usuariosRegistrados.push(registro);
	    console.log(usuariosRegistrados);
        alert('Usuario registrado satisfactoriamente');
    }
    else {
        alert('Error, usuario no registrado. Los posibles problemas pueden ser los siguientes\n' + mensaje);
    }
}

function validar_ingreso() {
    var validacion = false;
    var usuario = document.getElementById('txt_usuario').value;
    var contrasena = document.getElementById('txt_contrasena').value;
    var mensaje = ''; 

    usuariosRegistrados = [{"Nombre":"Juan Pablo","Usuario":"juanp5","Nacimiento":"1981","Contrasena":"Abc123"},{"Nombre":"Diana Carolina","Usuario":"diana5","Nacimiento":"1981","Contrasena":"Abc123"}];

    console.log(usuariosRegistrados);
    
    usuariosRegistrados.forEach(function(x) {
        if (x.Usuario == usuario && x.Contrasena == contrasena) {
            validacion = true;
        }
    });

    if(validacion) {
        alert('Usuario logueado satisfactoriamente');
        document.getElementById("form_registro").submit();   
    } 
    else
        alert('Error, usuario no existe o las credenciales son incorrectas');
}