import { dishes } from '../shared/dishes';
import * as ActionTypes from './ActionTypes';

export const Dishes = (state = dishes, action) =>{
    switch(action.type) {
        case ActionTypes.ADD_DISH:
            var dish = action.payload;
            
        default:
            return state
    }
}

