const buttons = document.querySelectorAll("button")
const input = document.querySelector("input")
let pointClear = true
let resultIsPossivle = false

buttons.forEach(value =>{
    value.addEventListener("click",() => {
        if(value.innerHTML === "AC")
            input.value = ""
        if(value.innerHTML === "="){
            if(resultIsPossivle){
                const result = String(eval(input.value))
                if(result.includes("."))
                    pointClear = false
                else
                    pointClear = true
                input.value = result
            }
        }
        else if(isNaN(value.innerHTML) && input.value.length > 0 && !isNaN(input.value[input.value.length-1])){
            if(value.innerHTML !== '.'){
                input.value = `${input.value}${value.innerHTML}`
                pointClear = true
            }
            else{
                if(pointClear){
                    input.value = `${input.value}${value.innerHTML}`
                    pointClear = false
                }
            }
        }
        else if(!isNaN(value.innerHTML))
            input.value = `${input.value}${value.innerHTML}`
            if(isNaN(input.value[input.value.length-1]))
                resultIsPossivle = true;
    })
})