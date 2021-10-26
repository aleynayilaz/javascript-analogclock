const deg = 6;
const hr= document.querySelector("#hr")
const mn= document.querySelector("#mn")
const sc= document.querySelector("#sc")
const number=document.querySelector("number")

let degree=0;
let clock=document.getElementsByClassName('clock')[0]
for(let i = 1; i <= 12; i++) {
    degree +=30;
    let element = document.createElement("span")
    element.className = 'number'
    element.innerText = i;
    element.style.transform = `rotate(${degree}deg)`
    clock.appendChild(element) 
}

setInterval(() => {
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * deg;
    let ss = day.getSeconds() * deg;
    hr.style.transform = `rotate(${hh+(mm/12)}deg)`
    mn.style.transform = `rotate(${mm}deg)`
    sc.style.transform = `rotate(${ss}deg)`
})
