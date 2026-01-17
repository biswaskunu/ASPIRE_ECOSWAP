const addBtn = document.getElementById('addBtn');

const pointsDisplay = document.getElementById('userPoints');
const rankDisplay = document.getElementById('userRank');

const itemName = document.getElementById('itemName');
const itemType = document.getElementById('itemType');
const itemPrice = document.getElementById('itemPrice');
const path = document.getElementById('path-card');
const head = document.getElementById('head');
const content = document.getElementById('content');

let items = [
    {
        name: "Lithium-Ion Battery Pack",
        type: "Hazardous E-Waste",
        price: "120 Eco-Points"
    },
    {
        name: "Broken LCD Monitors",
        type: "Glass/Plastic Waste",
        price: "50 Eco-Points"
    },
    {
        name: "Old LAN Cables",
        type: "Copper-Rich Waste",
        price: "85 Eco-Points"
    },
    
    {
        name: "Canteen Greywater",
        type: "Non-potable Water",
        price: "10 Pts / Liter"
    },
    {
        name: "Garden Grass Clippings",
        type: "Nitrogenous Biomass",
        price: "20 Eco-Points"
    },
    {
        name: "Tree Prunings",
        type: "Urban Woody Waste",
        price: "15 Eco-Points"
    },

    {
        name: "Used Cooking Oil",
        type: "Household Lipid Waste",
        price: "15 Pts / Liter"
    },
    {
        name: "Eggshells & Fruit Peels",
        type: "Domestic Compost",
        price: "5 Eco-Points"
    },
    {
        name: "Corrugated Cardboard",
        type: "Urban Fiber Waste",
        price: "$0.10 / kg"
    },
    {
        name: "Aluminium Beverage Cans",
        type: "Household Metal",
        price: "25 Eco-Points"
    }
];
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

function displayItems() {
    const container = document.getElementById('item-container');
    
    container.innerHTML = "";

    
    items.forEach(item => {
        const cardHTML = `
            <div class="path-card">
                <h3 class="head">${item.name}</h3>
                <p class="text">${item.type}</p>
                <p class="price"><strong>Value:</strong> ${item.price}</p>
                <a href="#" class="path-btn">Collect Asset</a>
            </div>
        `;
        container.innerHTML += cardHTML;
    });
}

window.onload = displayItems;
