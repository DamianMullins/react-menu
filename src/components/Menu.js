import React from 'react';
import MenuItem from './MenuItem';

const Menu = ({ menu }) => (
    <div className="c-listing">
        <h1>{menu.restaurantName}</h1>

        {menu.items.map(item => <MenuItem item={item} key={item.id} />)}
    </div>
);

export default Menu;
