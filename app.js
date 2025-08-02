
// Aplicación que permita a los usuarios ingresar nombres de amigos en una lista para luego realizar un sorteo aleatorio y determinar quién es el "amigo secreto".


let amigos = []; //lista de amigos

// Agrega un amigo a la lista
function agregarAmigo(){
    const nombre = document.getElementById("amigo").value.trim();
    // Validación del nombre
    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }
    // Verifica si el nombre ya está en la lista
    if (amigos.includes(nombre)) {
        alert("El nombre ya está en la lista.");
        return;
    }
    // Agrega el nombre a la lista
    amigos.push(nombre);
    document.getElementById("nombre").value = ""; // Limpia el campo de entrada
    mostrarLista(); // Muestra la lista actualizada
    console.log(amigos); 
}

//Muestra la lista de amigos
function mostrarLista() {
    const lista = document.getElementById("lista");
    lista.innerHTML = ""; // Limpia la lista actual

    amigos.forEach((amigo, index) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
    console.log("Lista actualizada:", amigos);
}


//Raliza el sorteo
function sortearAmigo() {}


//Valida la entrada de nombres
function validarEntrada() {}
