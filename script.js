const feed = document.getElementById('feed');
const addBtn = document.getElementById('addBtn');

const pointsDisplay = document.getElementById('userPoints');
const rankDisplay = document.getElementById('userRank');

const itemName = document.getElementById('itemName');
const itemType = document.getElementById('itemType');
const itemPrice = document.getElementById('itemPrice');
const path = document.getElementById('path-card');
const head = document.getElementById('head');
const content = document.getElementById('content');

let items=[{
                name:"hello",
                type:"hi",
                price:"hh"

}];
let count=0;

var x = document.getElementById("login");
var y = document.getElementById("Register");
var z = document.getElementById("btn");

function register(){
                x.style.display = "none";
                y.style.display = "block";
                z.style.left = "9em";
}

function login(){
                x.style.display = "block";
                y.style.display = "none";
                z.style.left = "0";
                               
}
   
function goBack() {
                window.history.back();
}


items.forEach(text => {
                const b1 = document.createElement('div');
                const b2 = document.createElement('div');
                const b3 = document.createElement('div');

                b1.classList.add("block");
                b1.textContent = text.name;
                head.appendChild(b1);

                b2.classList.add("block");
                b2.textContent = text.type;
                content.appendChild(b2);

                b3.classList.add("block")       ;
                b3.textContent = text.type;
                content.appendChild(b3);
});



// function addItem(){
//                 count++;
//                 items[0].name = itemName.value;
//                 items[0].type = itemType.value;
//                 items[0].price = itemPrice.value;

//                 items.classList
// }
