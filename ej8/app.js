function cookieStorageManager() {
    var nombreC = prompt("escribe nombre: ")
    var direccionC = prompt("escribe direccion: ")
    var edadC = prompt("escribe edad: ")
    var profesionC = prompt("escribe profesion: ")
    
    document.cookie = `nombreC=${nombreC}; expires=Thu, 04 Jan 2025 00:00:00 UTC; path=/;`
    document.cookie = `direccionC=${direccionC}; expires=Thu, 04 Jan 2025 00:00:00 UTC; path=/;`
    document.cookie = `edadC=${edadC}; expires=Thu, 04 Jan 2025 00:00:00 UTC; path=/;`
    document.cookie = `profesionC=${profesionC}; expires=Thu, 04 Jan 2025 00:00:00 UTC; path=/;`
    var datosC = document.cookie.split("; ")
    alert(datosC.slice(2))
    document.cookie = `nombreC=${nombreC}; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`
    document.cookie = `direccionC=${direccionC}; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`
    document.cookie = `edadC=${edadC}; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`
    document.cookie = `profesionC=${profesionC}; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`

    const datosPersonales = {
        nombre: nombreC,
        direccion: direccionC,
        edad: edadC,
        profesion: profesionC
    }

    const datos = localStorage.getItem("datosPersonales")
    console.log(datos)
    if (datos) {
        alert(datos)
        localStorage.removeItem("datosPersonales")
    } else {
        datosPersonales.nombre = nombreC
        datosPersonales.direccion = direccionC
        datosPersonales.edad = edadC
        datosPersonales.profesion = profesionC
        localStorage.setItem("datosPersonales", JSON.stringify(datosPersonales))
    }
}
