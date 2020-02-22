import {combineReducers} from "redux";
import todoReducer, {TodoState} from "../../modules/todolist/reducers/todo.reducer";
import visibilityFilterReducer, {VisibilityFilterState} from "../../modules/todolist/reducers/visibility-filter.reducer";
import {gameReducer, GameState} from "../../modules/tic-tac-toe/reducers/game.reducer";

export interface RootState {
    readonly todo: TodoState;
    readonly visibilityFilter: VisibilityFilterState;
    readonly game: GameState
}

const rootReducer = combineReducers<RootState>({
    todo: todoReducer,
    visibilityFilter: visibilityFilterReducer,
    game: gameReducer
});
export default rootReducer;