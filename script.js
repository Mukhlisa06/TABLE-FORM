let con = document.querySelector(".content")
let form = document.forms.creater
let Inps = document.querySelectorAll('.required')
let modal = document.querySelector('.modal')
let modalBg = document.querySelector('.modalBg')
let btnEdit = document.querySelector('.btn')
let modalInp = document.querySelector('.modal input')
let title = document.querySelector('.title')
let edID 


let count = 1

let table = []
console.log(table)

form.onsubmit = (e) => {
    e.preventDefault()
   Inps.forEach(lbl =>{
    let inp = lbl.querySelector("input")

    lbl.classList.remove("invalid")

    if(inp.value.length === 0){
        lbl.classList.add("invalid")
    } else{
        lbl.classList.remove("invalid")
        submit()
       
       
}

   })
   reload(table)
}


function submit(){
    let user = {
        id: Math.random()
    }
   
    let fm = new FormData(form)

    fm.forEach((value, key) => {
        user[key] = value
    })
    
    table.push(user)
}



function reload(arr) {
    con.innerHTML = " "

    for(let item of arr){
        let thing = document.createElement("div")
        let divn = document.createElement("div")
        let divnam = document.createElement("div")
        let diva = document.createElement("div")
        let num =document.createElement("h3")
        let name = document.createElement("h3")
        let age = document.createElement("h3")
        let btn = document.createElement("div")
        let edBtn = document.createElement("button")
        let delBtn = document.createElement("button")
        let edit = document.createElement("span")
        let dlt = document.createElement("span")
        
        
        thing.classList.add("item") 
        divn.classList.add("number")
        divnam.classList.add("name")
        diva.classList.add("age")
        num = count++
        name.innerHTML = item.name
        age.innerHTML = item.age
        btn.classList.add("btns")
        edit.classList.add("material-symbols-outlined")
        dlt.classList.add("material-symbols-outlined")
        edit.innerHTML = "edit_note"
        dlt.innerHTML = "delete"
        
       
        thing.append(divn , divnam , diva , btn)
        divn.append(num)
        divnam.append(name)
        diva.append(age)
        edBtn.append(edit)
        delBtn.append(dlt)
        btn.append(edBtn, delBtn)
        con.append(thing)

        edBtn.onclick = () => {
            openModal(item)
            edID = item.id
        }
        delBtn.onclick = () => {
            table = table.filter(el => el.id !== item.id)
            reload(table)
        }

    }
}
reload(table) 


function openModal(item) {
    title.innerHTML = item.name
    modal.style.display = 'block'
    modalBg.style.display = 'block'
    setTimeout(() => {
        modal.style.opacity = '1'
        modalBg.style.opacity = '1'
    }, 100);
}
function closeModal() {
    modal.style.opacity = '0'
    modalBg.style.opacity = '0'
    setTimeout(() => {
        modal.style.display = 'none'
        modalBg.style.display = 'none'
    }, 100);
}
modalBg.onclick = () => {
    closeModal()
}

btnEdit.onclick = () => {
    let newnAME = modalInp.value
    let finded = table.find(item => item.id === edID)

    finded.name = newnAME
    reload(table)
    closeModal()
}
