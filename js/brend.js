const brend = [
    {
        id: '0',
        images: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/HP_New_Logo_2D.svg/2048px-HP_New_Logo_2D.svg.png',
    },
    {
        id: '1',
        images: 'https://e1.pxfuel.com/desktop-wallpaper/914/521/desktop-wallpaper-acer-and-backgrounds-acer-logo-background.jpg',
    },
    {
        id: '2',
        images: 'https://cdn.dribbble.com/userupload/3827534/file/original-9ccba34bb333d26a86532111fe52a1c2.jpg?resize=752x',
    },
    {
        id: '3',
        images: 'https://d12jofbmgge65s.cloudfront.net/wp-content/uploads/2023/01/tech-guide_header-image-samsung.webp',
    },
    {
        id: '4',
        images: 'https://www.tailorbrands.com/wp-content/uploads/2021/01/apple_logo_1988.jpg',
    },
    {
        id: '5',
        images: 'https://ih1.redbubble.net/image.1923520568.0912/st,small,507x507-pad,600x600,f8f8f8.jpg',
    },
    {
        id: '6',
        images: 'https://logos-world.net/wp-content/uploads/2020/05/Xiaomi-Symbol.jpg',
    },
    {
        id: '7',
        images: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1CiKUOSYSYjTHu_7Ljl8qdd0o18xd2cwTLA&usqp=CAU',
    },
]

// Brend API
const elBrendList = document.querySelector(".brend__list")
const elBrendTemplate = document.querySelector("#brend__template").content

function Brend(array) {
    array.forEach((brend) => {
        const templateBrend = elBrendTemplate.cloneNode(true)

        templateBrend.querySelector(".brend__img").src = brend.images

        elBrendList.appendChild(templateBrend)
    })
}

Brend(brend)