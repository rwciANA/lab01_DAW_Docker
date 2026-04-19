function mostrar(alumno) {
    let info = document.getElementById("info");

    if (alumno === "a1") {
        info.innerHTML = `
            <h2>Juan</h2>
            <p>Edad: 18</p>
            <p>Hobby: Videojuegos</p>
        `;
    }

    if (alumno === "a2") {
        info.innerHTML = `
            <h2>María</h2>
            <p>Edad: 19</p>
            <p>Hobby: Lectura</p>
        `;
    }

    if (alumno === "a3") {
        info.innerHTML = `
            <h2>Carlos</h2>
            <p>Edad: 18</p>
            <p>Hobby: Fútbol</p>
        `;
    }
}

function enviar() {
    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;

    if (nombre !== "" && email !== "") {
        alert("¡Gracias " + nombre + "! Hemos recibido tu mensaje. Nos pondremos en contacto al correo: " + email);
    }
}


function cambiarColor() {
    document.body.style.background = "linear-gradient(135deg, #36d1dc, #5b86e5)";
}
