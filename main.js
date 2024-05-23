const menuIcon = document.getElementById("menu-icon")
const menulist = document.getElementById("menu-list")
// const li = document.getElementsByTagName("li")
menuIcon.addEventListener("click", ()=>{
    menulist.classList.toggle("hidden")
})

const view = document.getElementById("view")
view.addEventListener("click", ()=>{
alert('lanjut ke halaman web')
})