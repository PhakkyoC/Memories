/*
 * action types
 */
import fetch from 'cross-fetch'


export const GET_DECK = 'GET_DECK';
export const FLIP_CARD='FLIP_CARD';
export const TIMER = "TIMER";
export const SET_CARD = "SET_CARD";
export const DONE="DONE";
export const BLOCKED = 'BLOCKED';
export const NONE = "NONE";
export const UNBLOCKED = 'UNBLOCKED';

/*
 * action creators
 */
function receiveCard(json) {
    return json
}

function getCards(json) {
    let idDeck = json.deck_id;
    return fetch(`https://deckofcardsapi.com/api/deck/${idDeck}/draw/?count=52`)
        .then(response => response.json())
        .then(json => receiveCard(json))

}

function fetchDeck() {
    return fetch(`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`)
        .then(response => response.json())
        .then(json => getCards(json))

}

export function getDeck(e) {
    return function (dispatch){
        return fetchDeck().then(deck => {
            dispatch( {
                type: GET_DECK,
                deck,
            })
        })
    }
}
export function onCardClick(id,value) {
    return (dispatch, getState) => {
        return dispatch(check(getState(),id,value))
    };
}

export function updateCardGame(value,id) {
    return {type: SET_CARD, value:value,id:id}
}

export function cardFlip(id,force=false) {
    return {type: FLIP_CARD, id:id,force:force}
}

export function updateTimer() {
    return function (dispatch,getState){
        if (getState().game.timer>0){
            return dispatch({type: TIMER})
        }
    }
}

function check(state,id,value) {
    let flipped = state.game.flipped;
    if(state.game.timer<=0){
        return {type: NONE}
    }
    else if (flipped.id!=id && flipped.value==value)
    {
        return (dispatch) => {
            dispatch(updateCardGame(value,id))
            dispatch(updateDoneCard(flipped.id));
            dispatch(updateDoneCard(id));
            dispatch(cardFlip(id));
        };
    }
    else if((flipped.id==id && flipped.value==value) || state.cards[id].done){
        return {type: NONE}
    }
    else if(flipped.id==undefined){
        return (dispatch) => {
            dispatch(updateCardGame(value,id))
            dispatch(cardFlip(id));
        };
    }
    else{
        return (dispatch) => {
            dispatch(updateCardGame(value,id))
            dispatch(cardFlip(id))
            dispatch(blocked())
            setTimeout(() => {
                dispatch(cardFlip(id,true))
                dispatch(cardFlip(flipped.id,true))
                dispatch(unblocked())
            }, 650)
        };
    }

}
function blocked() {
    return {type: BLOCKED}
}
function unblocked() {
    return {type: UNBLOCKED}
}
function updateDoneCard(id) {
    return {type: DONE,id}
}