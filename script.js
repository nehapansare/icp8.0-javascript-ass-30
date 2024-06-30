function bulb_on(){
    const bulbon = document.getElementById("img-bulb");
    bulbon.src = "./bulb-on.png"
}
function bulb_off(){
    const bulboff = document.getElementById("img-bulb");
    bulboff.src = "./bulb-off.png"

}
function theme_sun(){
    const body = document.getElementById("bg-body");
    body.classList.remove("bg-dark");
    body.classList.add("bg-light");
}
function theme_moon(){
    const body = document.getElementById("bg-body");
    body.classList.remove("bg-light");
    body.classList.add("bg-dark");
}