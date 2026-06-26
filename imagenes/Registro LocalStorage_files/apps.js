function registrarPersona() {

    const persona = {
        nombre: document.getElementById("nombre").value,
        apellido: document.getElementById("apellido").value,
        identificacion: document.getElementById("identificacion").value,
        telefono: document.getElementById("telefono").value
    };
    if (!persona.identificacion) {
        alert("Ingrese una identificación");
        return;
    }
    let personas = JSON.parse(localStorage.getItem("personas")) || [];
    const existe = personas.find(
        p => p.identificacion === persona.identificacion
    );
    if (existe) {
        alert("La persona ya está registrada");
        return;
    }
    personas.push(persona);
    localStorage.setItem(
        "personas",
        JSON.stringify(personas)
    );

    alert("Persona registrada correctamente");

    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("identificacion").value = "";
    document.getElementById("telefono").value = "";
}





function buscarPersona() {

    const identificacion =
        document.getElementById("buscarId").value;
    let personas =
        JSON.parse(localStorage.getItem("personas")) || [];
    const persona = personas.find(
        p => p.identificacion === identificacion
    );
    const resultado =
        document.getElementById("resultado");
    const bienvenida =
        document.getElementById("bienvenida");
    if (persona) {

        bienvenida.classList.remove("d-none");
        bienvenida.innerHTML =
            `Bienvenido a tu cuenta, ${persona.nombre}`;
        resultado.innerHTML = `
            <div class="card mt-3">
                <div class="card-body">
                    <h5>${persona.nombre} ${persona.apellido}</h5>
                    <p><b>ID:</b> ${persona.identificacion}</p>
                    <p><b>Teléfono:</b> ${persona.telefono}</p>
                </div>
            </div>
        `;

    } else {
        bienvenida.classList.add("d-none");
        resultado.innerHTML = `
            <div class="alert alert-danger mt-3">
                Usuario no encontrado
            </div>
        `;
    }
}