
    const imageArray = ["./img/01.webp", "./img/02.webp", "./img/03.webp", "./img/04.webp", "./img/05.webp"]
    const imageContainer = document.getElementById("image-container");
    

    for (let i = 0; i < imageArray.length; i++) {
        const image = imageArray[i];

        imageContainer.innerHTML +=
        `<div class="item">
        <img src="${image}" alt="">
        </div>`;
    }
    
    const itemContainer = document.getElementsByClassName("item");
    let currentPicIndex = 0;
    let startingPic =  itemContainer[0]  
    startingPic.classList.add("active")

    function nextPic() {
       
        if (currentPicIndex < imageArray.length - 1) {
            
            currentPicIndex = currentPicIndex + 1;
            console.log(currentPicIndex);
            itemContainer[currentPicIndex].classList.add("active")
            itemContainer[currentPicIndex - 1].classList.remove("active") 
        } else {
            currentPicIndex = 0;
            itemContainer[currentPicIndex].classList.add("active")
            itemContainer[itemContainer.length - 1].classList.remove("active") 
        }
         
       
       
        
      
    }
    document.getElementById("next").addEventListener("click", nextPic)


    function prevPic() {
       
        if (currentPicIndex > 0) {
            let prova = itemContainer[currentPicIndex]
            currentPicIndex = currentPicIndex - 1;
            console.log(currentPicIndex);
            itemContainer[currentPicIndex].classList.add("active")
            itemContainer[currentPicIndex + 1].classList.remove("active") 
        } else {
            currentPicIndex = itemContainer.length - 1;
            itemContainer[currentPicIndex].classList.add("active")
            itemContainer[0].classList.remove("active") 
        }
         
       
       
        
      
    }
    document.getElementById("prev").addEventListener("click", prevPic)







