const icon = document.querySelector(".icon"); 
const search = document.querySelector(".search"); 
icon.addEventListener("click",() =>{
    search.classList.toggle("active")
})

const clear = document.querySelector(".clear");
clear.addEventListener("click", () => {
    const insideinput = document.querySelector(".insideinput")
    insideinput.value =""
})