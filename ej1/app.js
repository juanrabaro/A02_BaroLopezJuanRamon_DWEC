function mostrarValores() {
    const radio = document.getElementById("input").value
  
    const pi = Math.PI

    const diametro = radio*2
    const perimetro = Math.round((2*pi*radio) * 100) / 100
    const areaCirculo = Math.round((pi*radio*radio) * 100) / 100
    const areaEsfera = Math.round((4*pi*radio*radio) * 100) / 100
    const volumenEsfera = Math.round(((4/3)*pi*Math.pow(radio, 3)) * 100) / 100

    var result = document.getElementById("radio")
    result.textContent = "El radio es: " + radio
    result = document.getElementById("diametro")
    result.textContent = "El diámetro es: " + diametro
    result = document.getElementById("perimetro")
    result.textContent = "El perímetro es: " + perimetro
    result = document.getElementById("areaCirculo")
    result.textContent = "El área del círculo es: " + areaCirculo
    result = document.getElementById("areaEsfera")
    result.textContent = "El área de la esfera es: " + areaEsfera
    result = document.getElementById("volumenEsfera")
    result.textContent = "El volumen es: " + volumenEsfera

  }
  