import React from 'react';
import deliveryIcon from '../icon--delivery.svg';
import BasketItem from './BasketItem';

const Basket = ({ basket }) => (
    <div>
        {basket.items.map(item => <BasketItem item={item} key={item.id} />)}

        <hr className="c-basket-separator" />

        <basket-totals />

        <hr className="c-basket-separator" />

        <p className="c-basket-restaurantAddress">
            {basket.address}
        </p>

        <hr className="c-basket-separator" />

        <p className="c-basket-deliveryOrCollectionDetails">
            <img src={deliveryIcon} className="icon-deliveryOrCollection" alt="" />
            {basket.deliveryTime}
        </p>
    </div>
);

export default Basket;
