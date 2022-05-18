    //Carga el contenido de un archivo de texto//
    //y lo muestra en el parrafo//
    function showFile(input) {
        let file = input.files[0];
        alert('file name: ${file.name}');
        alert('last modified: ${file.lastModified}');

        let reader = new fileReader();
        reader.readAsText(file);
        reader.onload = function() {
            console.log(reader.result);
            document.getElementById("text-acercade").innerText=reader.result;
        };
        reader.onerror = function(){
            console.log(reader.error);
        };
    }

/*Boton cambiar parrafo*/
    function cambiar_parrafo(){
        document.getElementById("edit-acercade").style.display="block";
        let texto = document.getElementById("text-acercade").innerText;
        console.log(texto);
    };

/*Funcion transmitir texto*/
    function myFunction2(valor){
        document.getElementById("text-acercade").innerText=valor;
    };

    function logMessage(message) {
        console.log(message + "<br>");
    }

// Ventana donde notifica que no se puede editar contenido //
    function ventana_notificacion(){
        alert("Esta sección no está disponible para su edición.");
    }

/*Funcion precionar enter para terminar edicion*/
    let textarea=document.getElementById("edit-acercade")
    textarea.addEventListener('keyup', (e) => {
        logMessage('Key "${e.key}" released [event: keyup]');
        if (e.key=="Enter"){
            document.getElementById("edit-acercade").style.display="none"
        }
    });