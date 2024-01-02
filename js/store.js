const store = [
    {
        id: '0',
        rasm: 'https://marketing.uz/brend-goda-2022/uploads/works/covers/9278e61d85534954007b6349d2214f64.jpg'
    },
    {
        id: '1',
        rasm: 'https://www.shutterstock.com/image-vector/texnomart-logo-design-electronic-technology-260nw-1616080975.jpg'
    },
    {
        id: '2',
        rasm: 'https://marketing.uz/uploads/articles/3842/article-original.jpg'
    },
    {
        id: '3',
        rasm: 'https://storage2.alifshop.uz/files?k1=cdcf628b-26ee-4d3a-ad4b-400b22a75c14&k2=c923640b92ac9e39a575cc452dbcbf5c2a9c0aacb1c2df9e12bcec45684dad473e6d7859a3cc68e8142261b74be65b08a486a0ea5aa040351d6d358fb66699a3'
    },
    {
        id: '4',
        rasm: 'https://marketing.uz/brend-goda-2022/uploads/works/covers/7a57aa5ac6af311ccf2151b5fb639202.jpg'
    },
]

// Store API
const elStoreList = document.querySelector(".store__list")
const elStoreTemplate = document.querySelector("#store__template").content

function Store(array) {
    array.forEach((store) => {
        const templateStore = elStoreTemplate.cloneNode(true)

        templateStore.querySelector(".store__img").src = store.rasm

        elStoreList.appendChild(templateStore)
    })
}

Store(store)