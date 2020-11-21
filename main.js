let container = document.getElementById('tBody');
let inputBox = document.getElementById('input1');
let textBox = document.getElementById('text');

let submitBtn = document.getElementById('submit');
let clearBtn = document.getElementById('clear');

let divisor = document.getElementById('divisor');

submitBtn.addEventListener('click', function(){
    var divisor1 = document.createElement('div');
    divisor.appendChild(divisor1);
    divisor1.classList.add('col-sm-5');
    divisor1.classList.add('bord');

    var head = document.createElement('h4');
    divisor1.appendChild(head);
    head.innerText = inputBox.value;
    inputBox.value = "";

    var para = document.createElement('p');
    divisor1.appendChild(para);
    para.innerText = textBox.value;
    textBox.value = "";

    clearBtn.addEventListener('click', function(){
        divisor.removeChild(divisor1);
    })
    divisor1.addEventListener('dblclick', function(){
        divisor.removeChild(divisor1);
    })
    divisor1.addEventListener('click', function(){
        bord.classList.add('open-modal');
    })
})





