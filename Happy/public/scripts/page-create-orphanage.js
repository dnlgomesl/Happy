// Create map
const map = L.map('mapid').setView([-7.2229678,-35.8925207], 15)

// Create and ad tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

// create icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68]
})

let marker;

//creat and add marker
map.on('click', (event) => {

    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    // remover icon
    marker && map.removeLayer(marker)

    //add icon layer
    marker = L.marker([lat, lng], {icon}).addTo(map)
}) 

// add campo de fotos
function addPhotoField() {
    //pegar o container de fotos #images
    const container = document.querySelector('#images');
    // pegar o container para duplicar .new-image
    const fieldsContainer = document.querySelectorAll('.new-upload')
    // realizar o clone da ultima imagem adicionada
    const newFieldContainer = fieldsContainer[fieldsContainer.length-1].cloneNode(true)
    // verificar se ta vazio
    const input = newFieldContainer.children[0]
    if(input.value == ""){
        return
    }
    // limpar o campo antes de add
    input.value = ""
    // adicionar o  clone ao container de #images
    container.appendChild(newFieldContainer)
}

/*function deleteField(event){
    const span = event.currentTarget
} */