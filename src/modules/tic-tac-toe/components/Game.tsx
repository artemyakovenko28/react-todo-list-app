import React from 'react';
import {Board} from "./Board";
import '../index.css';
import {RootState} from "../../../shared/reducers";
import {connect} from "react-redux";
import {jumpToTurn, makeTurn} from "../reducers/game.reducer";

type Props = {} & StateProps & DispatchProps;

const Game = ({game, makeTurn, jumpToTurn}: Props) => {
    const {history, next, stepNumber} = game;
    const squares = history[stepNumber];

    const calculateWinner = (squares: string[]): string | null => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    };

    const jumpTo = (move: number): void => {
        jumpToTurn(move, history);
    };

    const moves = history.map((step, move) => {
        const desc = move ?
            'Go to move #' + move :
            'Go to game start';
        return (
            <li key={move}>
                <button onClick={() => jumpTo(move)}>{desc}</button>
            </li>
        );
    });

    const handleClick = (i: number): void => {
        if (history[history.length - 1][i]) {
            return;
        }
        makeTurn(i, game);
    };

    if (calculateWinner(history[stepNumber])) {
        return <div>Winner is {next === 'X' ? 'O' : 'X'}</div>
    } else {
        return (
            <div className="game">
                <div className="game-board">
                    <Board squares={squares} onSquareClick={(i: number) => handleClick(i)}/>
                </div>
                <div className="game-info">
                    <div>Next player {next}</div>
                    <ol>{moves}</ol>
                </div>
            </div>
        );
    }
};

const mapStateToProps = (state: RootState) => {
    return {
        game: state.game
    };
};

const mapDispatchToProps = {
    makeTurn,
    jumpToTurn
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(Game);