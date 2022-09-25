const buyingPrice = document.querySelector("#buying-price")
const currentPrice = document.querySelector("#current-price")
const qty = document.querySelector("#quantity")
const subBtn = document.querySelector("#sub-btn")
const outputBox = document.querySelector("#output")


function calculateProfitLoss() {

    let bp = Number(buyingPrice.value) * Number(qty.value);
    let cp = Number(currentPrice.value) * Number(qty.value);

    if (bp < 0 || cp < 0 || qty.value < 0) {

        outputBox.innerText = "Error: All the values should be greater than zero."

    } else {

        if (bp > cp) {

            var loss = (bp - cp)
            var lossPercentage = (loss / bp) * 100


            outputBox.innerText = 'Your loss is ' + loss + ' and lose percentage is ' + lossPercentage + '%'
        } else if (bp < cp) {

            var profit = (cp - bp)
            var profitPercentage = (profit / bp) * 100

            outputBox.innerText = 'Your profit is ' + profit + ' and profit percentage is ' + profitPercentage + '%'


        } else if (bp = cp) {
            outputBox.innerText = "There is neither loss nor profit"

        }
    }

}
subBtn.addEventListener("click", calculateProfitLoss)