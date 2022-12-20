var list = document.getElementById("todo-items")
var btn = document.getElementById("btn")
var inputText = document.getElementById("newItem")

btn.addEventListener('click', (e)=>{
    if(inputText.value != ""){
        e.preventDefault()

        const myLi = document.createElement('li');
        myLi.innerHTML = inputText.value;
        list.appendChild(myLi)

        const ex = document.createElement('span')
        ex.innerHTML = 'x';
        myLi.appendChild(ex)
    }
    const remove = document.getElementById('span')
    for(let i=0;  i < remove.length; i++) {
        remove[i].addEventListener('click', (e)=>{
            remove[i].parentElement.style.opacity = 0;
            setTimeout(()=>{
                remove[i].parentElement.style.display = "none"
                remove[i].parentElement.remove()
            }, 500)
        })
    }
    inputText.value = ""
    
})