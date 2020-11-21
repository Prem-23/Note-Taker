let inputField=document.getElementById('inputField');
let submitButton=document.getElementById('submit-btn');
let resetButton=document.getElementById('reset-btn');
let container = document.querySelector('.container');


inputField.addEventListener('keyup', (e) => 
{
    if(e.keyCode === 13){
        var store = document.createElement('div');
        container.appendChild(store);

        var storage = document.createElement('div');
        store.appendChild(storage);
        storage.classList.add('bot');

        var inputBox = document.createElement('input');
        storage.appendChild(inputBox);
        inputBox.value = inputField.value;
        inputField.value="";
        inputBox.disabled = true;
        inputBox.classList.add('paras');

        var editBtn = document.createElement('button');
        storage.appendChild(editBtn);
        editBtn.innerHTML = "Edit";
        editBtn.classList.add('btn');
        editBtn.addEventListener('click',function(){
            inputBox.disabled = !inputBox.disabled;
        })
    
        var removeBtn = document.createElement('button');
        storage.appendChild(removeBtn);
        removeBtn.innerHTML = "Remove";
        removeBtn.classList.add('btn');
        removeBtn.addEventListener('click',function()
        {
            store.removeChild(storage);
        })
        resetButton.addEventListener('click',function()
        {
            container.removeChild(store);
        })
    }
})

submitButton.addEventListener('click',function()
{
    var store = document.createElement('div');
    container.appendChild(store);

    var storage = document.createElement('div');
    store.appendChild(storage);
    storage.classList.add('bot');

    var inputBox = document.createElement('input');
    storage.appendChild(inputBox);
    inputBox.value = inputField.value;
    inputField.value="";
    inputBox.disabled = true;
    inputBox.classList.add('paras');

    var editBtn = document.createElement('button');
    storage.appendChild(editBtn);
    editBtn.innerHTML = "Edit";
    editBtn.classList.add('btn');
    editBtn.addEventListener('click',function(){
        inputBox.disabled = !inputBox.disabled;
    })

    var removeBtn = document.createElement('button');
    storage.appendChild(removeBtn);
    removeBtn.innerHTML = "Remove";
    removeBtn.classList.add('btn');
    removeBtn.addEventListener('click',function()
    {
        store.removeChild(storage);
    })
    
    resetButton.addEventListener('click',function()
        {
            container.removeChild(store);
        })
})



