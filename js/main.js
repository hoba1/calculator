let num = document.querySelectorAll(".box-num");
let equals = document.querySelector(".equals");
let result = document.querySelector(".result");
let clear = document.querySelector(".clear"); 
let deletenum = document.querySelector(".del"); 
let switchpostoneg = document.querySelector(".switch"); 
let showresult;
num.forEach((ele) => {
    ele.addEventListener("click", () => {
        if(ele.classList.contains("num") || ele.classList.contains("prop")){
            showresult = result.innerHTML +  ele.getAttribute("data-num");
            result.innerHTML = showresult;
        }
    })
})

equals.addEventListener("click", () => {
    result.innerHTML = eval(showresult)
})

clear.addEventListener("click", () => {
    result.innerHTML = ""
})

deletenum.addEventListener("click", () => {
    result.innerHTML = result.innerHTML.slice("0",`${result.innerHTML.length - 1}`)
})

switchpostoneg.addEventListener("click", () => {
    result.innerHTML = (-result.innerHTML)
})