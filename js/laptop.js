const laptop = [
    {
        id: '1230',
        image: 'https://tovar.uz/images/company/444/tovar/3606/o_1_5eb6e0eb197da.jpg',
        title: 'Apple Airpods Pro simsiz quloqchin , Oq rangda',
        cost: "399 999 so'm",
    },
    {
        id: '230',
        image: 'https://tovar.uz/images/company/444/tovar/3606/o_1_5eb6e0eb197da.jpg',
        title: 'Apple Macbook Pro 13" 2.4 2019 Intel core i5 CCR3 8 GB SSD 256 GB',
        cost: "16 114 285 so'm",
    },
    {
        id: '534',
        image: 'https://tovar.uz/images/company/444/tovar/3606/o_1_5eb6e0eb197da.jpg',
        title: 'Apple watch 4',
        cost: "4 234 000 so'm",
    },
    {
        id: '874',
        image: 'https://tovar.uz/images/company/444/tovar/3606/o_1_5eb6e0eb197da.jpg',
        title: 'Robot - tozalagich Xiaomi Mi Robot',
        cost: "1 340 000 so'm",
    },
    {
        id: '565',
        image: 'https://tovar.uz/images/company/444/tovar/3606/o_1_5eb6e0eb197da.jpg',
        title: 'Oynali Fotoaparat Canon EOS 6D Body',
        cost: "1 345 000 so'm",
    },
    {
        id: '1230',
        image: 'https://tovar.uz/images/company/444/tovar/3606/o_1_5eb6e0eb197da.jpg',
        title: 'Apple Airpods Pro simsiz quloqchin , Oq rangda',
        cost: "399 999 so'm",
    },
    {
        id: '230',
        image: 'https://tovar.uz/images/company/444/tovar/3606/o_1_5eb6e0eb197da.jpg',
        title: 'Apple Macbook Pro 13" 2.4 2019 Intel core i5 CCR3 8 GB SSD 256 GB',
        cost: "16 114 285 so'm",
    },
    {
        id: '534',
        image: 'https://tovar.uz/images/company/444/tovar/3606/o_1_5eb6e0eb197da.jpg',
        title: 'Apple watch 4',
        cost: "4 234 000 so'm",
    },
    {
        id: '874',
        image: 'https://tovar.uz/images/company/444/tovar/3606/o_1_5eb6e0eb197da.jpg',
        title: 'Robot - tozalagich Xiaomi Mi Robot',
        cost: "1 340 000 so'm",
    },
    {
        id: '565',
        image: 'https://tovar.uz/images/company/444/tovar/3606/o_1_5eb6e0eb197da.jpg',
        title: 'Oynali Fotoaparat Canon EOS 6D Body',
        cost: "1 345 000 so'm",
    },
]

// Shops API
const elShopsList = document.querySelector(".shops__list")
const elShopsTemplate = document.querySelector("#shops__template").content

function Shops(array) {
    array.forEach((laptop) => {
        const templateShop = elShopsTemplate.cloneNode(true)

        templateShop.querySelector(".shops__img").src = laptop.image
        templateShop.querySelector(".shops__sum").textContent = laptop.cost
        templateShop.querySelector(".shops__text").textContent = laptop.title
        templateShop.querySelector(".shops__buyurtma").textContent = laptop.id + ' ta buyurtma'

        elShopsList.appendChild(templateShop)
    })
}

Shops(laptop)

// Laptop API 
const elLaptopList = document.querySelector(".laptop__list")
const elLaptopTemplate = document.querySelector("#laptop__template").content

function Laptop(array) {
    array.forEach((laptop) => {
        const templateLaptop = elLaptopTemplate.cloneNode(true)

        templateLaptop.querySelector(".laptop__img").src = laptop.image
        templateLaptop.querySelector(".laptop__sum").textContent = laptop.cost
        templateLaptop.querySelector(".laptop__text").textContent = laptop.title
        templateLaptop.querySelector(".laptop__buyurtma").textContent = laptop.id + ' ta buyurtma'

        elLaptopList.appendChild(templateLaptop)
    })
}

Laptop(laptop)

// Input
const elInput = document.querySelector(".header__input")

function SearchInput() {
    elLaptopList.innerHTML = null

    const Inputvalue = elInput.value.trim()

    const Search = new RegExp(Inputvalue,'gi');

    const Input = laptop.filter((laptop) => laptop.title.match(Search))

    Laptop(Input,elLaptopList)
}

elInput.addEventListener("input",SearchInput)