import { toUSD } from '../common/utilities.js';

function renderLineItem(lineItem, island) {
    const tableRow = document.createElement('tr');

    const nameCell = document.createElement('td');
    nameCell.className = 'align-left';
    nameCell.textContent = island.name;
    tableRow.appendChild(nameCell);

    const quantityCell = document.createElement('td');
    quantityCell.textContent = lineItem.quantity;
    tableRow.appendChild(quantityCell);

    const priceCell = document.createElement('td');
    priceCell.textContent = toUSD(island.price);
    tableRow.appendChild(priceCell);

    const totalCell = document.createElement('td');
    totalCell.className = 'line-item-total';
    const total = lineItem.quantity * island.price;
    totalCell.textContent = toUSD(total);
    tableRow.appendChild(totalCell);

    return tableRow;
}

export default renderLineItem;