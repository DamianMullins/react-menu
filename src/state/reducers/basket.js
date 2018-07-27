import { produce } from 'immer';
import {
    BASKET_ADD_ITEM,
    BASKET_REMOVE_ITEM,
    BASKET_INCREMENT_ITEM_QUANTITY,
    BASKET_DECREMENT_ITEM_QUANTITY
} from '../actions';

const basket = (state = { address: '', deliveryFee: 0, deliveryTime: '', items: [] }, action) => {
    switch (action.type) {
        case BASKET_ADD_ITEM: {
            return produce(state, draftState => {
                draftState.items.push(action.item);
            });
        }

        case BASKET_REMOVE_ITEM: {
            return produce(state, draftState => {
                draftState.items = draftState.items.filter(item => item.id !== action.id);
            });
        }

        case BASKET_INCREMENT_ITEM_QUANTITY: {
            return produce(state, draftState => {
                const exisingItem = draftState.items.find(item => item.id === action.id);

                if (exisingItem) {
                    exisingItem.quantity++;
                }
            });
        }

        case BASKET_DECREMENT_ITEM_QUANTITY: {
            return produce(state, draftState => {
                const exisingItem = draftState.items.find(item => item.id === action.id);

                if (exisingItem) {
                    exisingItem.quantity--;
                }
            });
        }

        default: {
            return state;
        }
    }
}

export default basket;
