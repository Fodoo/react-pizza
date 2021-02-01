import { combineReducers } from 'redux';

import filtersReducer from './filters';
import pizzasreducer from './pizzas';

const rootReducer = combineReducers({
  filtersReducer,
  pizzasreducer,
});

export default rootReducer;
