import { produce } from 'immer';
import { MENU_GET_ALL_ITEMS } from '../actions';

const menu = (state = { restaurantname: '', items: [] }, action) => {
    switch (action.type) {
        case MENU_GET_ALL_ITEMS: {
            return produce(state, draftState => {
                console.log(draftState);
                draftState.menu.items = [...draftState.menu.items, ...action.items];
            });
        }

        default: {
            return state;
        }
    }
}

export default menu;
