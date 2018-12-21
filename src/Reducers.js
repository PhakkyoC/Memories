import { combineReducers } from 'redux'
import {
    GET_DECK,FLIP_CARD,TIMER,SET_CARD,UNFLIP_CARDS,BLOCKED,UNBLOCKED,SUPPR_CARD
} from './Actions'

function game(state = {timer:300,score:0,flipped:{'id':undefined,'value':""}},action) {
    switch (action.type) {
        case TIMER:
            state.timer = state.timer-1;
            return {...state};
        case SET_CARD:
            if (state.flipped.id!=undefined)
            {
                if (state.flipped.value==action.value && state.flipped.id!=action.id)
                {
                    state.score=state.score+1;
                    state.flipped={'id':undefined,'value':""};
                }
                else{
                    state.flipped={'id':undefined,'value':""};
                }
            }
            else
            {
                state.flipped.id = action.id
                state.flipped.value = action.value
            }
            return {...state};
        default:
            return state
    }
}

function cards(state = [], action) {
    switch (action.type) {
        case GET_DECK:
            let i = 0;
            action.deck.cards.map((e) =>{
                e.flipped = false;
                e.id = i;
                e.blocked = false;
                state[i] = e;
                i++;
            })
            return [...state]
        case FLIP_CARD:
            return state.map((card,index ) => {
                if (action.id === card.id) {
                    if (!card.flipped && !card.blocked)
                    {
                        return Object.assign({}, card, {
                            flipped: !card.flipped
                        })
                    }
                }
                return card
            })
        case UNFLIP_CARDS:
            return state.map((card,index ) => {
                return Object.assign({}, card, {
                    flipped: false
                })
            })
        case BLOCKED:
            return state.map((card,index ) => {
                return Object.assign({}, card, {
                    blocked: true
                })
            })
        case UNBLOCKED:
            return state.map((card,index ) => {
                return Object.assign({}, card, {
                    blocked: false
                })
            })
        case SUPPR_CARD:
            return state.filter(({ id }) => id !== action.id);
        default:
            return state
    }
}

const gameApp = combineReducers({
    game,
    cards
});

export default gameApp