const value = document.querySelector(".value")
const btns = document.querySelectorAll(".btn")
let count = 0

btns.forEach(function(btn){
    btn.addEventListener("click", function(e){
        let myBtn = e.currentTarget.classList
        if(myBtn.contains("decrease")){
            count--
        } else if(myBtn.contains("increase")){
            count++
        } else{
            count = 0
        }
        if(count > 0){
            value.style.color = "green"
            document.body.style.backgroundColor = "green"
        }
        if(count < 0){
            value.style.color = "red"
            document.body.style.backgroundColor = "red"
        }
        if(count === 0){
            value.style.color = "white"
             document.body.style.backgroundColor = "white"
        }
        value.textContent = count
    })
})

