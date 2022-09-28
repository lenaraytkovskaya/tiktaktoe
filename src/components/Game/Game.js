import React from 'react';
import style from './Game.module.css'
import Board from "../Board/Board";

const Game = () => {
    return (
        <div className={style.wrapper}>
            <Board/>
        </div>
    );
};

export default Game;
