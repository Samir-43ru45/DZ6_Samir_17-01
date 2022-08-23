const mass_1 = [1,2,3,4,5,]
const mass_2 = [43,53,87,90]
const mass_3 = [456,1241,1331,114011,143211]
const mass_4 = ["Jacky_Chan","Ariana_Granda","Michel_Jackson"]
const mass_5 = [...mass_1,...mass_2,...mass_3,...mass_4]
console.log(mass_5)


const obj = {
    key:1,
    key2:2,
    key3:3,
    key4:4,
    key5:5
}
const obj_2 = {
    ...obj,
    key6:"second_part",
    key7:"Of_HW"
}
console.log(obj_2)

const list = [
    // {
    //     id: 1,
    //     text: "Learn JS!"
    // }
]
const addButton = document.getElementById('button');
const input = document.getElementById('input')

function render(){
    const mainDiv = document.createElement('div');
    mainDiv.setAttribute('class', 'list')


    for(let i = 0; i < list.length; i++){

        const div = document.createElement('div')
        div.setAttribute('class', 'todoBlock');
        const p = document.createElement('p');
        p.innerText = list[i].text
        div.append(p)




        const actions = document.createElement('div')
        actions.setAttribute('class', 'actions');
        const changeButton = document.createElement('button');
        changeButton.setAttribute('class', 'change')
        changeButton.innerText = "change"

        const deleteButton = document.createElement('button');
        deleteButton.setAttribute('class', 'delete')
        deleteButton.innerText = "delete"

        changeButton.onclick = () => {
            p.innerText= prompt()
        }
        deleteButton.onclick = () => {
            div.remove('todoBlock')
        }

        actions.append(changeButton, deleteButton)
        div.append(actions)
        mainDiv.append(div)
    }
    const form = document.querySelector('.form')
    document.querySelector('.list').remove("todoBlock")
    form.append(mainDiv)
}


addButton.onclick = () => {
    const obj = {
        id: list.length+1,
        text:"Hello"+" "+input.value
    }
    list.push(obj);
    console.log(list);
    render()
}