const mainPage = document.getElementsByClassName('main-page')[0]
mainPage.addEventListener('click', () => location.href = 'http://127.0.0.1:5500/')
const productItem = Array.from(document.getElementsByClassName('item-img'))
const count = Array.from(document.getElementsByClassName('count'))
const minus = Array.from(document.getElementsByClassName('minus'))
const plus = Array.from(document.getElementsByClassName('plus'))
const binCount = document.getElementsByClassName('bin-count')[0]
const binPrice = document.getElementsByClassName('bin-price')[0]
const buy = Array.from(document.getElementsByClassName('buy'))
let itemPrice = 500
let countContent = []
let binInfo = {
    itemsAmount: 0,
    price: 0
}
productItem.forEach(item => item.addEventListener('click', () => {
    location.href = 'http://127.0.0.1:5500/product.html'
}))
count.forEach((item, i) => {
    countContent[i] = 1
})
minus.forEach((item, i) => {
    item.addEventListener('click', () => {
        if (countContent[i] == 1) {
            return
        } else {
            countContent[i]--
        }

        count[i].textContent = countContent[i]
    })
})
plus.forEach((item, i) => {
    item.addEventListener('click', () => {
        if (countContent[i] < 30) {
            countContent[i] = countContent[i] + 1
        } else {
            return
        }

        count[i].textContent = countContent[i]

    })
})
buy.forEach((item, i) => item.addEventListener('click', () => {
    binInfo.itemsAmount += countContent[i]
    binInfo.price = binInfo.itemsAmount * itemPrice
    binCount.textContent = binInfo.itemsAmount
    binPrice.textContent = binInfo.price
}))

