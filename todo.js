const arr = [];

const add1 = document.querySelector('#add1');
const input1 = document.querySelector('#input1');

add1.addEventListener("click", () => {
    const text = input1.value;
    if(text == ''){
        alert("please input some value");
        return;
    }
    arr.push(text);
    console.log(arr);
    input1.value = '';
})


const add2 = document.querySelector('#add2');
const input2 = document.querySelector('#input2');

add2.addEventListener("click", () => {
    const text = input2.value;
    if(text == ''){
        alert("please input some value");
        return;
    }
    const para = document.createElement('p');
    para.innerHTML = text;
    const div = document.querySelector('.d1');
    div.appendChild(para);
    input2.value = '';
})

const array = [];
const add3 = document.querySelector('#add3');
const input3 = document.querySelector('#input3');
const date = document.querySelector('.date');
add3.addEventListener("click", () => {
    const text = input3.value;
    const d = date.value;
    if(text == ''){
        alert("please input some value");
        return;
    }
    array.push({'name': text,'date': d});
    console.log(text);
    createDiv();
    input3.value = '';
})

function createDiv(){
    let todohtml = '';
    
    for(let i = 0; i < array.length; i++){
        const a =array[i];
        const txt = a.name;
        const d = a.date;
        console.log(txt);
        const ht = `<div class="d3"> ${txt} </div >  <div class="d3"> ${d} </div> <button class="delete" id="${i}" onclick="array.splice(${i}, 1);  createDiv();">  Delete </button> `
        todohtml += ht;
    }
    console.log(todohtml);
    const div = document.querySelector('.d2');
    div.innerHTML = todohtml;
}

// const deleteB = document.querySelector()
// const deleteButton = function deleteButtonFun( i)  {
//     array.splice(i, 1);
//     createDiv();
// }


