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

const textHoby1 = document.getElementById('text-hoby1');
const textHobi1 = document.getElementById('text-hobi1');

textHoby1.addEventListener("click",()=>{
  textHobi1.classList.toggle('text-hoby');
});


const textHoby2 = document.getElementById('text-hoby2');
const textHobi2 = document.getElementById('text-hobi2');

textHoby2.addEventListener("click",()=>{
  textHobi2.classList.toggle('text-hoby');
})

const textHoby3 = document.getElementById('text-hoby3');
const textHobi3 = document.getElementById('text-hobi3');

textHoby3.addEventListener("click", ()=>{
   textHobi3.classList.toggle('text-hoby');
})

const textHoby4 = document.getElementById('text-hoby4');
const textHobi4 = document.getElementById('text-hobi4');

textHoby4.addEventListener("click", ()=>{
  textHobi4.classList.toggle('text-hoby');
})


const toggles = document.querySelectorAll('.faq-toggle');

toggles.forEach(toggle =>{
    toggle.addEventListener('click', () =>{
        toggle.parentNode.classList.toggle('active');
    })
})

function hideLoader() {1
  // Hide the loader after 2 seconds
  setTimeout(function() {
      document.getElementById('loader').style.display = 'none';
      document.getElementById('content').style.display = 'block';
  }, 4000); // Adjust the timeout duration as needed
}


alert('disarankan menggunkan dpi di atas 350 terimakasih')


