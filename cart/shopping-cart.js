import cart from '../cart/cart.js';
import islands from '../data/islands.js';
import { findById, 
         calcOrderTotal, 
         toUSD } from '../common/utilities.js';
import renderLineItem from './render-line-item.js';

const tbody = document.querySelector('tbody');
const orderTotalCell = document.getElementById('order-total-cell');

for (let i = 0; i < cart.length; i++) {
    const lineItem = cart[i];
    const island = findById(islands, lineItem.id);
    const dom = renderLineItem(lineItem, island);

    tbody.appendChild(dom);
}

const orderTotal = calcOrderTotal(cart, islands);
orderTotalCell.textContent = toUSD(orderTotal);