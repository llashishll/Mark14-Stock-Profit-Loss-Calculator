const buyingPrice = document.querySelector("#buying-price")
const currentPrice = document.querySelector("#current-price")
const subBtn = document.querySelector("#sub-btn")
const outputBox = document.querySelector("#output")

function calculateProfitLoss() {

    let bp = Number(buyingPrice.value)
    let cp = Number(currentPrice.value)

    if (bp > cp) {

        var loss = bp - cp;
        var lossPercentage = loss / cp * 100

        outputBox.innerText = 'Your loss is ' + loss + ' and lose percentage is ' + lossPercentage + '%'
    } else if (bp < cp) {

        var profit = cp - bp
        var profitPercentage = profit / cp * 100

        outputBox.innerText = 'Your profit is ' + profit + ' and profit percentage is ' + profitPercentage + '%'


    } else {
        outputBox.innerText = "There is neither loss nor profit"
    }

}
subBtn.addEventListener("click", calculateProfitLoss)