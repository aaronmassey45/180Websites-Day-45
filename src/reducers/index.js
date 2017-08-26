import { combineReducers } from 'redux';
import GifReducer from './reducer_gif';

const rootReducer = combineReducers({
  gifs: GifReducer
});

export default rootReducer;
