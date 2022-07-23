let res = document.querySelector(".res"),
    lis = document.querySelectorAll("ul li"),
    divOne = document.querySelector(".one"),
    divTwo = document.querySelector(".two"),
    submitBtn = document.querySelector("button")

function replace() {
    divOne.remove()
    divTwo.style.display = "block"
}

lis.forEach((ind) => {
    ind.onclick = () => {
        for (let index = 0; index < lis.length; index++) {
            const element = lis[index];
            element.classList.remove("focused")
        }
        ind.classList.add("focused")
        submitBtn.onclick = () => {
            replace()
            console.log(ind.classList.contains("focused"));
            res.innerHTML = `You selected ${ind.innerHTML} out of 5`
        }
    }
})