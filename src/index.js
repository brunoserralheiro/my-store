import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import productsReducer from './reducers/products-reducer'
import userReducer from './reducers/user-reducer'


const allReducers = combineReducers({
    products: productsReducer,
    user: userReducer
});
const phone1 = { name: 'iPhone8' };
const phone2 = { name: 'iPhoneX' };
const phone3 = { name: 'iPhoneXXX' };
let user1 = 'Bruno';
let user2 = 'Maia';
let initProducts = [phone1];


const store = createStore(allReducers, {
    products: [phone1],
    user: user1
},

    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
console.log(store.getState());

initProducts.push(phone2);
initProducts.push(phone3);
console.log(initProducts);

const updateUserAction = {
    type: 'updateUser',
    payload: {
        user: user2
    }
}
const updateProductsAction = {
    type: 'updateProducts',
    payload: {
        products: initProducts
    }
}
store.dispatch(updateUserAction);
console.log(store.getState());
store.dispatch(updateProductsAction);
console.log(store.getState());

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
