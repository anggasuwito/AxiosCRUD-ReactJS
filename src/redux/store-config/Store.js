import { createStore } from 'redux';
import MenuReducer from '../store/MenuReducer'
const Store = createStore(
    MenuReducer
);

export { Store }