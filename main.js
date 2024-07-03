const menuIcon = document.getElementById("menu-icon")
const menulist = document.getElementById("menu-list")
const nav = document.querySelector('nav')
// const li = document.getElementsByTagName("li")
menuIcon.addEventListener("click", ()=>{
    menulist.classList.toggle("hidden")
})
const view = document.getElementById("view")
view.addEventListener("click", ()=>{
alert('lanjut ke halaman web')
})

const textHoby1 = document.getElementById('text-hoby1')
const jpgHoby1 = document.getElementById('jpg-hoby1')

textHoby1.addEventListener("click", function(){
   jpgHoby1.innerHTML= "FUTSAL"
   textHoby1.style.display= "none"

   setTimeout(()=>{
    textHoby1.style.display= "block"
    jpgHoby1.style.display= "none"
   } ,15000)
});


const textHoby2 = document.getElementById('text-hoby2')
const jpgHoby2 = document.getElementById('jpg-hoby2')

textHoby2.addEventListener("click", function (){
    jpgHoby2.innerHTML= "MARTABAK";
    textHoby2.style.display="none";

    setTimeout(()=>{
        textHoby2.style.display= "block"
        jpgHoby2.style.display= "none"
       } ,15000)
})

const textHoby3 = document.getElementById('text-hoby3')
const jpgHoby3 = document.getElementById('jpg-hoby3')

textHoby3.addEventListener("click", function (){
    jpgHoby3.innerHTML= "FRONTEND DEVOLOPER";
    textHoby3.style.display="none";

    setTimeout(()=>{
        textHoby3.style.display= "block"
        jpgHoby3.style.display= "none"
       } ,15000)
})

const textHoby4 = document.getElementById('text-hoby4')
const jpgHoby4 = document.getElementById('jpg-hoby4')

textHoby4.addEventListener("click", function (){
    jpgHoby4.innerHTML= "Belum ada untuk sekarang (FOKUS KE MASA DEPAN)";
    textHoby4.style.display="none";

    setTimeout(()=>{
        textHoby4.style.display= "block"
        jpgHoby4.style.display= "none"
       } ,15000)
})

