const kategoriya = [
    {
        id: '0',
        img: 'https://assets.asaxiy.uz/product/items/desktop/db9fdf4f68f85457de2648589be948962021091011343447469CsIiSewzIs.jpg.webp',
        text: 'Smartfonlar',
    },
    {
        id: '1',
        img: 'https://tovar.uz/images/company/444/tovar/3606/o_1_5eb6e0eb197da.jpg',
        text: 'Kompyuterlar va notebooklar',
    },
    {
        id: '2',
        img: 'https://olcha.uz/image/600x600/products/2022-12-02/televizor-mi-tv-p1-55-gl-172948-0.jpeg',
        text: 'Televizorlar',
    },
    {
        id: '3',
        img: 'https://tovar.uz/images/company/444/tovar/100078/o_6462ec8378223.jpg',
        text: 'Aqlli soatlar',
    },
    {
        id: '4',
        img: 'https://assets.asaxiy.uz/product/main_image/desktop//617a81299f265.jpg.webp',
        text: 'Quloqchinlar',
    },
    {
        id: '5',
        img: 'https://tovar.uz/images/company/444/tovar/99797/o_645da6ede41a0.jpg',
        text: 'Konditsioner',
    },
    {
        id: '6',
        img: 'https://tovar.uz/images/company/444/tovar/98834/o_64531b41e0b90.jpg',
        text: 'Sovutkichlar',
    },
    {
        id: '7',
        img: 'https://www.lg.com/uz/images/washing-machines/md07531417/gallery/dm-10.jpg',
        text: 'Kir yuvish mashinalari',
    },
]

// Kategoriya API
const elList = document.querySelector(".about__list")
const elTemplate = document.querySelector("#about__template").content

function Kategoriya(array) {
    array.forEach((kategoriya) => {
        const template = elTemplate.cloneNode(true)

        template.querySelector(".about__img").src = kategoriya.img
        template.querySelector(".about__text").textContent = kategoriya.text

        elList.appendChild(template)
    })
}

Kategoriya(kategoriya)