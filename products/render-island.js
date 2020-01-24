import { findById } from "../common/utilities.js";

function renderIsland(island){
    const li = document.createElement('li');
    li.className = island.category;
    li.title = island.description;

    const h3 = document.createElement('h3');
    h3.textContent = island.name;
    li.appendChild(h3);

    const img = document.createElement('img');
    img.src = '../assets/' + island.image;
    img.alt = island.name + 'image';
    li.appendChild(img);

    const p = document.createElement('p');
    p.className = 'price';

    const usd = '$' + island.price.toFixed(2);
    p.textContent = usd;

    const button = document.createElement('button');
    button.textContent = 'Add';
    button.value = island.id;
    button.addEventListener('click', () => {

        let storage = localStorage.getItem('CART');
        let cart;
        if (storage) {
            cart = JSON.parse(storage);
        }
            else{
                cart = [];
            }
            let lineItem = findById(cart, island.id);

            if (!lineItem) {
                lineItem = {
                    id: island.id,
                    quantity: 1
                };
                cart.push(lineItem);
            }else {
                lineItem.quantity++;
            }
            storage = JSON.stringify(cart);
            localStorage.setItem('CART', storage);

        
    });

    p.appendChild(button);



    li.appendChild(p);



    return li;

}

export default renderIsland;