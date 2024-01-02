// elementlar
const elButton = document.querySelector(".header__btn");
const elModal = document.querySelector(".header__modal");
const elModalKirish = document.querySelector(".modal__btn")
const elHisobgaKirish = document.querySelector(".header__kirish")
const elExit = document.querySelector(".kirish__exit")
const elKirish = document.querySelector(".kirish__bos")
const elRuyxat = document.querySelector(".kirish__ruyxat")
const elTel = document.querySelector(".header__tel")
const elKirishRuyxat = document.querySelector(".header__ruyxat")
const elHero = document.querySelector(".hero")

//Modalkalar
elButton.addEventListener("click", () => {
    elModal.classList.toggle("blok")
    elHero.classList.toggle("reklama")
})

elModalKirish.addEventListener("click", () => {
    elHisobgaKirish.classList.toggle('kirish')
    elModal.classList.remove('blok')
})

elKirish.addEventListener("click", () => {
    elTel.classList.toggle('tel')
    elHisobgaKirish.classList.remove('kirish')
})

elRuyxat.addEventListener("click", () => {
    elKirishRuyxat.classList.toggle('ruyxat')
    elHisobgaKirish.classList.remove('kirish')
})

// Button responsive
const elbutton = document.querySelector(".btn");
const elButtonMenu = elbutton.querySelector(".btn__menu");
const elButtonExit = elbutton.querySelector(".btn__exit");
const elInfo = document.querySelector(".header__info");
const elKatalog = document.querySelector(".header__katalog")
const elLike = document.querySelector(".header__like")
const elShop = document.querySelector(".header__shop")



elbutton.addEventListener("click", function(evt){
   evt.preventDefault();

   elButtonMenu.classList.toggle("menu__exit");
   elButtonExit.classList.toggle("exit__menu");
   elInfo.classList.toggle("info__blok");
   elKatalog.classList.toggle("katalog__blok")
   elLike.classList.toggle("like__blok")
   elShop.classList.toggle("shop__blok")
})