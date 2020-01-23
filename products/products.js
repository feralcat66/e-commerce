import islands from '../data/islands.js';
import renderIsland from './render-island.js';

const list = document.getElementById('islands');

for(let i = 0; i < islands.length; i++) {
    const island1 = islands[i];
    const dom = renderIsland(island1);
    list.appendChild(dom);
}