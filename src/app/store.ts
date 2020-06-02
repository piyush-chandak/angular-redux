import { Action } from '@ngrx/store';

export interface IAppState {
    message: String
}
export var LANGUAGE = {
    SPANISH: 'SPANISH',
    FRENCH: 'FRENCH',
    DEFAULT: ''
};

export function rootReducer(state: string, action: Action){
    console.log(action.type, state);
    switch(action.type) {
        case LANGUAGE.SPANISH:
            state = 'Hola Munda!';
            break;
        case LANGUAGE.FRENCH:
            state = 'Bonjour le Monde!';
            break;
        default:
            state = 'Hello World';
            break;
    }
    return state;
}