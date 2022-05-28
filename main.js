const submit = document.querySelector("button")
const content = document.querySelector(".content")
const text = document.getElementById("text")
const section = document.querySelector(".main-section")
const write = document.querySelector(".write")

// console.log(write);

// 
// localStorage.clear()
// let contentValue;



// Create item ==================================



if (localStorage.list != null) {
    items = JSON.parse(localStorage.list)
}else{
    items =[];
}


submit.onclick = function () {
    
    const itemList = {
        item : text.value
    }
    items.push(itemList)
    localStorage.setItem("list", JSON.stringify(items))
    // perventDefault()

    // preventDefault();
    
    showItem()
    text.value = " "

    
}

// Read item ==================================


function showItem() {
    

         for (let i = 0; i < items.length; i++) {
            content.innerHTML +=
                        `
                <section class="main-section">
                        <span class="icon-heart">  ${[i]}</span>
                        <p class="write">${items[i].item}</p>
                        <div class="reaction-right">
                        <span class="icon-pencil"></span>
                            <span class="icon-bin"></span>
                            <span class="icon-remove"></span>
                        </div>
                </section>`
            
            
         }
    }
    







content.addEventListener("click",
    (eo,i) => {
        if (eo.target.classList == "icon-bin") {
            eo.target.parentElement.parentElement.remove()
            items.splice(i,1)
            localStorage.list= JSON.stringify(items)
            showItem()


        }
        else if (eo.target.classList == "icon-remove") {
            eo.target.classList.remove("icon-remove")
            eo.target.innerHTML = `<span class="icon-check"></span>`
            localStorage.list= JSON.stringify(items)
            showItem()
        }

        else if (eo.target.classList == "icon-check") {
            eo.target.classList.remove("icon-check")
            eo.target.classList.add("icon-remove")
            // write.classList.remove("edit-remove")
            eo.target.parentElement.parentElement.classList.remove("edit-remove")
            localStorage.list= JSON.stringify(items)
            showItem()



        }
        else if (eo.target.classList == "icon-heart") {
            content.prepend(eo.target.parentElement)
            eo.target.classList.add("heart")
            localStorage.setItem("heart","#D80808")
            localStorage.list= JSON.stringify(items)
            showItem()


        }

        else if (eo.target.classList == "icon-heart heart") {

            eo.target.classList.remove("heart")
            localStorage.list= JSON.stringify(items)
            showItem()


        }
        // else {

        // }
    })



    showItem()






    


