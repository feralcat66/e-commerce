
import islands from '../data/islands.js';
import { findById, 
    calcOrderTotal, 
    toUSD } from '../common/utilities.js';
    import renderLineItem from './render-line-item.js';
    
    const tbody = document.querySelector('tbody');
    const orderTotalCell = document.getElementById('order-total-cell');
    const placeOrderButton = document.getElementById('place-order-button')
    const storage = localStorage.getItem('CART');
    let cart;
    if (storage) {
        cart = JSON.parse(storage)
    }
    else{
        cart = [];
    }
    
    for (let i = 0; i < cart.length; i++) {
        const lineItem = cart[i];
        const island = findById(islands, lineItem.id);
        const dom = renderLineItem(lineItem, island);
        
        tbody.appendChild(dom);
    }
    
    const orderTotal = calcOrderTotal(cart, islands);
    orderTotalCell.textContent = toUSD(orderTotal);
    
    if (cart.length === 0) {
        placeOrderButton.disabled = true;
    }
    else {
        placeOrderButton.addEventListener('click', () => {
            localStorage.removeItem('CART');
            alert('Order placed:\n' + JSON.stringify(cart, true, 2));
            window.location = '../';
        });
    }
    const clearButton = document.getElementById('clear-button')
    clearButton.addEventListener('click', () => {
        localStorage.clear();
        location.reload();
    });
    