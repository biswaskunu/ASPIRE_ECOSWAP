// Initialization
let items = JSON.parse(localStorage.getItem('ecoSwapItems')) || [];
let user = JSON.parse(localStorage.getItem('ecoSwapUser')) || { points: 0 };

const feed = document.getElementById('feed');
const addBtn = document.getElementById('addBtn');
const pointsDisplay = document.getElementById('userPoints');
const rankDisplay = document.getElementById('userRank');

// UI Update Function
function updateUI() {
    pointsDisplay.innerText = user.points;
    rankDisplay.innerText = calculateRank(user.points);
    
    feed.innerHTML = '';
    items.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = `item-card ${item.claimed ? 'claimed' : ''}`;
        
        card.innerHTML = `
            <span class="points-tag">+${item.reward} XP</span>
            <h3>${item.name}</h3>
            <p><strong>Category:</strong> ${item.category}</p>
            <p><small>Posted: ${new Date(item.id).toLocaleTimeString()}</small></p>
            <button onclick="claimItem(${index})">${item.claimed ? 'Claimed' : 'I Need This'}</button>
        `;
        feed.appendChild(card);
    });

    localStorage.setItem('ecoSwapItems', JSON.stringify(items));
    localStorage.setItem('ecoSwapUser', JSON.stringify(user));
}

// Logic Functions
function addItem() {
    const nameInput = document.getElementById('itemName');
    const catInput = document.getElementById('itemCategory');

    if (!nameInput.value.trim()) {
        alert("Enter an item name!");
        return;
    }

    const newItem = {
        name: nameInput.value,
        category: catInput.value,
        reward: 10,
        claimed: false,
        id: Date.now() // Unique ID based on timestamp
    };

    items.unshift(newItem);
    nameInput.value = '';
    updateUI();
}

function claimItem(index) {
    if (items[index].claimed) return;

    items[index].claimed = true;
    user.points += items[index].reward;
    alert("Item claimed! Please coordinate pickup with the donor.");
    updateUI();
}

function calculateRank(points) {
    if (points >= 100) return "Oak (Expert)";
    if (points >= 50) return "Sapling (Contributor)";
    return "Seedling (Novice)";
}

// Event Listeners
addBtn.addEventListener('click', addItem);

// Initial Render
updateUI();

let currentView = 'Giveaway'; // Default view

function updateUI() {
    pointsDisplay.innerText = user.points;
    rankDisplay.innerText = calculateRank(user.points);
    
    feed.innerHTML = '';
    
    // Filter items based on the active tab
    const filteredItems = items.filter(item => item.type === currentView);

    filteredItems.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = `item-card ${item.claimed ? 'claimed' : ''}`;
        
        const priceHTML = item.type === 'Sell' ? `<div class="price-tag">₹${item.price}</div>` : `<div class="price-tag">FREE</div>`;

        card.innerHTML = `
            <span class="points-tag">+${item.reward} XP</span>
            <h3>${item.name}</h3>
            ${priceHTML}
            <p><small>Posted: ${new Date(item.id).toLocaleTimeString()}</small></p>
            <button onclick="claimItem(${item.id})">${item.claimed ? 'Taken' : 'Interested'}</button>
        `;
        feed.appendChild(card);
    });

    localStorage.setItem('ecoSwapItems', JSON.stringify(items));
}

function addItem() {
    const nameInput = document.getElementById('itemName');
    const typeInput = document.getElementById('itemType');
    const priceInput = document.getElementById('itemPrice');

    if (!nameInput.value.trim()) return alert("Name the item!");

    const newItem = {
        id: Date.now(),
        name: nameInput.value,
        type: typeInput.value,
        price: typeInput.value === 'Sell' ? priceInput.value : 0,
        reward: typeInput.value === 'Giveaway' ? 15 : 5, // More points for giving for free!
        claimed: false
    };

    items.unshift(newItem);
    nameInput.value = '';
    priceInput.value = '';
    updateUI();
}

function filterFeed(type) {
    currentView = type;
    // Update tab button styles
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.toggle('active', btn.innerText.includes(type));
    });
    updateUI();
}

// Update claimItem to find by ID since we are filtering the array
function claimItem(id) {
    const item = items.find(i => i.id === id);
    if (item.claimed) return;
    item.claimed = true;
    user.points += item.reward;
    alert(item.type === 'Sell' ? "Seller notified!" : "Item claimed!");
    updateUI();
}
