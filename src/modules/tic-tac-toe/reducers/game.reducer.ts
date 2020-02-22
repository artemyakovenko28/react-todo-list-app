import {Action} from "../../../shared/model/action.model";

export interface GameState {
    readonly history: string[][];
    readonly stepNumber: number;
    readonly next: 'X' | 'O';
}

const initialState: GameState = {
    history: [Array(9).fill(null)],
    stepNumber: 0,
    next: 'X'
};

export const ACTION_TYPES = {
    MAKE_TURN: 'game/MAKE_TURN',
    JUMP_TO_TURN: 'game/JUMP_TO_TURN'
};

export const gameReducer = (state: GameState = initialState, action: Action<GameState>): GameState => {
    switch (action.type) {
        case ACTION_TYPES.MAKE_TURN:
            return action.payload;
        case ACTION_TYPES.JUMP_TO_TURN:
            return action.payload;
        default:
            return state;
    }
};

export const makeTurn = (i: number, game: GameState): Action<GameState> => {
    const {stepNumber, history, next} = game;
    const current = history[stepNumber].slice();
    current[i] = next;
    return {
        type: ACTION_TYPES.MAKE_TURN,
        payload: {
            history: [...history, current],
            stepNumber: history.length,
            next: next === 'X' ? 'O' : 'X'
        }
    };
};

export const jumpToTurn = (move: number, history: string[][]): Action<GameState> => {
    const newHistory = history.slice(0, move + 1);
    return {
        type: ACTION_TYPES.JUMP_TO_TURN,
        payload: {
            history: newHistory,
            stepNumber: move,
            next: move % 2 === 0 ? 'X' : 'O'
        }
    };
};