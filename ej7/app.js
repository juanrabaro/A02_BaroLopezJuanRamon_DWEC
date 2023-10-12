
function abrirVentana() {
    var ventana
    var ancho = 400
    var alto = 400
    var decreciendo = true

    if (ventana) {
    clearInterval(ventana.interval)
    ventana.close()
    ventana = null
    }

    const left = Math.floor(Math.random() * (screen.width - ancho))
    const top = Math.floor(Math.random() * (screen.height - alto))

    ventana = window.open('', '', `width=${ancho},height=${alto},left=${left},top=${top}`)
    ventana.document.write('<p>Nueva ventana que se cambia de tamaño sola</p>')

    ventana.interval = setInterval(() => {
    if (ancho <= 160) {
        decreciendo = false
    } else if (ancho >= 400) {
        decreciendo = true
    }

    if (decreciendo) {
        ancho -= 40
        alto -= 40
    } else {
        ancho += 40
        alto += 40
    }

    ventana.resizeTo(ancho, alto)
    }, 1000)
}