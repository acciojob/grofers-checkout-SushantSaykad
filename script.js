const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");

document.body.appendChild(getSumBtn);

const ans = document.createElement("h3");
ans.id = "ans";
document.body.appendChild(ans);

const getSum = () => {
    const prices = document.querySelectorAll(".price");

    let sum = 0;

    prices.forEach(price => {
        sum += parseFloat(price.textContent);
    });

    ans.textContent = sum;
};

getSumBtn.addEventListener("click", getSum);