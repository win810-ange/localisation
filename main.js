let btnlocalisation = document.getElementById('btnlocalisation')

btnlocalisation.addEventListener('click', ()=>{
    let datalocalisation = navigator.geolocation.getCurrentPosition()
    let data = datalocalisation.json()
    window.open(`https//:wa.me/243810340232/${data}`)
    
})