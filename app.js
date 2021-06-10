
const closeButton = document.querySelector(".close-button");
const aside = document.querySelector("aside");
const contentArea = document.querySelectorAll(".content-area");


closeButton.addEventListener('click',()=>{
    aside.classList.toggle('active')


    if(aside.classList.contains('active')){
        contentArea.forEach(content =>{
            content.classList.add('active')
        })
    } else{
        contentArea.forEach(content =>{
            content.classList.remove('active')
        })
    }
    
})

