const btns = document.querySelectorAll(".btn")
const counter = document.querySelector(".counter span")
let result = 0

btns.forEach((btn)=>{
    btn.addEventListener("click",(e)=>{
        let styles = e.currentTarget.classList
        
        if(styles.contains("btn-decrease")){
            result--
        }else if(styles.contains("btn-increase")){
            result++
        }else{
            result = 0
        }
        counter.textContent = result
        
        if(result>0){
            counter.style.color = "rgb(104, 179, 104)"
        }else if(result<0){
            counter.style.color = "rgb(236, 122, 122)"
        }else{
            counter.style.color = "rgb(218, 207, 115)"
        }
    })
})

























// const decreaseBtn = document.querySelector("#decrease")
// const resetBtn = document.querySelector("#reset")
// const increaseBtn = document.querySelector("#increase")
// const counter = document.querySelector(".counter span")
// let result = 0
// counter.textContent = result 

// decreaseBtn.addEventListener("click", ()=>{
//     result = result - 1
//     counter.textContent = result 
// })
// resetBtn.addEventListener("click", ()=>{
//     result = 0
//     counter.textContent = result
// })
// increaseBtn.addEventListener("click", ()=>{
//     result = result + 1
//     counter.textContent = result
// })
