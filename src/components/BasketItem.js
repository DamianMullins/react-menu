import React, { Component } from 'react';

class BasketItem extends Component {
    removeItem = item => {
        console.log(item);
    }

    itemTotal = item => item.price * item.quantity

    render () {
        const { item } = this.props;

        return (
            <div className="c-basket-row">
                <button className="o-btn o-btn--small" onClick={() => this.removeItem(item)}>-
                    <span className="is-visuallyHidden" dangerouslySetInnerHTML={{__html: `Remove ${item.name} from basket`}}></span>
                </button>
                <p className="c-basket-item" dangerouslySetInnerHTML={{__html: `${item.quantity} x ${item.name}`}}></p>
                <p className="c-basket-price">{this.itemTotal(item)}</p>
            </div>
        );
    }
}

export default BasketItem;
