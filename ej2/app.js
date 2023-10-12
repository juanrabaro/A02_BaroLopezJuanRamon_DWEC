function nombreYapellido() {
    const input = document.getElementById("input").value
    
    const size = getSize(input)
    var result1 = document.getElementById("result1")
    result1.textContent = "Longitud del nombre más los dos apellidos es de " + size

    const lowerupper = lowerUppercase(input)
    var result2 = document.getElementById("result2")
    result2.textContent = "Tu nombre y apellidos en minúscula y mayúscula es: " + lowerupper

    const dividedText = divideText(input)
    var result31 = document.getElementById("result3-1")
    result31.textContent = "Nombre: " + dividedText[0]
    var result32 = document.getElementById("result3-2")
    result32.textContent = "Primer apellido: " + dividedText[1]
    var result33 = document.getElementById("result3-3")
    result33.textContent = "Segundo apellido: " + dividedText[2]

    const prop1 = propuesta1(input)
    var result4 = document.getElementById("result4")
    result4.textContent = "Propuesta nombre usuario 1: " + prop1

    const prop2 = propuesta2(input)
    var result5 = document.getElementById("result5")
    result5.textContent = "Propuesta nombre usuario 2: " + prop2
}


function getSize(input) {
    const juntado = input.split(" ")

    const junto = juntado[0] + juntado[1] + juntado[2]
    const longitud = junto.length

    return longitud
}

function lowerUppercase(input) {
    const lower = input.toLowerCase()
    const upper = input.toUpperCase()

    const result = lower + " " + upper

    return result
}

function divideText(input) {
    const result = input.split(" ")

    return result
}

function propuesta1(input) {
    const inputProp = input.split(" ")
    const nombre = inputProp[0][0].toLowerCase()
    const apellido1 = inputProp[1].toLowerCase()
    const apellido2 = inputProp[2][0].toLowerCase()

    return nombre + apellido1 + apellido2
}

function propuesta2(input) {
    const inputProp = input.split(" ")
    const nombre = inputProp[0][0].toUpperCase() + inputProp[0][1].toLowerCase() + inputProp[0][2].toLowerCase()
    const apellido1 = inputProp[1][0].toLowerCase() + inputProp[1][1].toLowerCase() + inputProp[1][2].toLowerCase()
    const apellido2 = inputProp[2][0].toLowerCase() + inputProp[2][1].toLowerCase() + inputProp[2][2].toLowerCase()

    return nombre + apellido1 + apellido2
}