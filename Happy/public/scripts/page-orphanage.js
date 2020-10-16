const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}
//create map
const map = L.map('mapid', options).setView([-7.2229678,-35.8925207], 15)

// Create and ad tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

// create icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})

// Create and ad marker
L.marker([-7.2229678,-35.8925207], {icon}).addTo(map)

/* Image gallery */
function selectImage(event){
    const button = event.currentTarget
    // remover as classes active
    const buttons = document.querySelectorAll(".images button")
    buttons.forEach(removeActiveClass)

    function removeActiveClass(button) {
        button.classList.remove("active")
    }
    //selecionar a imagem clicada
    const image = button.children[0]
    const imageContainer = document.querySelector(".orphanage-details > img ")
    //atualizar o conteiner de imagem
    imageContainer.src = image.src
    // adicionar a classe active para o botao clicado
    button.classList.add('active')
}