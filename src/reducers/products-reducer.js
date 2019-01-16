import {UPDATE_PRODUCTS} from '../actions/products-actions'
export default function productsReducer(state = [], {type,payload}) {

    if (type === UPDATE_PRODUCTS) {
        return payload.products;
    }
    return state;
}
