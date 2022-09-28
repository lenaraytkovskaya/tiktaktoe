import React, {useState} from 'react';
import style from './Board.module.css'


const Board = () => {
    const[turn, setTurn] = useState('x')
    const[cell, setCells] = useState(Array(9).fill(''))
    const[winner, setWinner] = useState()

    let squares = [...cell]

    const handleClick = (num) =>{
        if(cell[num] !== ''){
            return
        }
        if(turn === 'x'){
            squares[num] = 'x'
            setTurn('o')
        }else{
            squares[num] = 'o'
            setTurn('x')
        }

        CheckWinner(squares)
        setCells(squares)
    }

    const CheckWinner = (squares) => {
        let combos = {
            across: [
                [0, 1, 2],
                [3, 4, 5],
                [6, 7, 8]
            ],
            down: [
                [0, 3, 6],
                [1, 4, 7],
                [2, 5, 8]
            ],
            diagonal: [
                [0, 4, 8],
                [2, 4, 6],
            ]
        }

        for(let combo in combos){
            combos[combo].forEach((patterns) =>{
                if(squares[patterns[0]] === '' ||
                    squares[patterns[1]] === '' ||
                    squares[patterns[3]] === ''){
                }else if(squares[patterns[0]] === squares[patterns[1]] &&
                    squares[patterns[1]] === squares[patterns[2]]){
                    setWinner(squares[patterns[0]])
                }else{
                    if(squares.every( elem => elem !== '')){
                        setWinner('draw')
                    }
                }

            })
        }



    }

    const RefreshBoard = () => {
        setWinner(null)
        setCells(Array(9).fill(''))
    }


    const Sell = ({num}) => {
        return (
            <div>
                <td><button className={style.square} onClick={() => handleClick(num)}>{cell[num]}</button></td>
            </div>
        );
    };

    return (
        <div className={style.board}>
            <h2>turn: {turn}</h2>
            <table>
                <tbody>
                    <tr>
                        <Sell num={0}/>
                        <Sell num={1}/>
                        <Sell num={2}/>
                    </tr>
                    <tr>
                        <Sell num={3}/>
                        <Sell num={4}/>
                        <Sell num={5}/>
                    </tr>
                    <tr>
                        <Sell num={6}/>
                        <Sell num={7}/>
                        <Sell num={8}/>
                    </tr>
                </tbody>
            </table>

            {winner === 'x' && 'o'
                ? <div>
                    <h2> {winner} is winner </h2>
                    <button className={style.button} onClick={() => (RefreshBoard()) }> <h2>Refresh</h2></button>
                </div>
                : <div>
                    <h2> {winner}</h2>
                    <button className={style.button} onClick={() => (RefreshBoard()) }> <h2>Refresh</h2></button>
                </div>}
        </div>
    );
};

export default Board;
