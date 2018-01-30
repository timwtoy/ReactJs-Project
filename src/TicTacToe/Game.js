import { BrowserRouter } from 'react-router-dom'
import React from 'react';
import ReactDOM from 'react-dom';
import {  Route,  Link} from 'react-router-dom'
import './Game.css';
import {Router} from 'react-router';
import ComputerModeToggle from './ComputerModeToggle';


function Square(props) {

    return (
      <button className="square" onClick={props.onClick} disabled={props.isDisabled}>
        {props.value}
      </button>
    );
  
}

class Board extends React.Component {

  constructor(){
    super();

    this.state = {
      isDisabled: false,
    }
  }
  
  renderSquare(i) {
    return (<Square 
    value = {this.props.squares[i]}
    onClick = {() => this.props.onClick(i)}
    isDisabled={this.props.isDisabled}
    />);
  }

  render() {
    return (
      <div>
        {/* <div className="status">{status}</div> */}
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {

  constructor(props){
    super(props);
    this.state = { 
      history: [{
        squares: Array(9).fill(null),
      }],
      firstIsNext: true,
      stepNumber: 0,
      computerState: false,  // Used as flag for computer mode toggle
      computerTurn: {
        move: 0,
        computersMove: false,  // Used as flag if it is the computers turn
        compStatus: 'Computer Mode is toggled off'
      }
    };
  }   

  ResetButton(){
    return(
      <button className="btn" onClick={() => this.Reset()}>
        Reset Game
      </button>
    );
  }

  Reset(){
    const state = { 
      history: [{
        squares: Array(9).fill(null),
      }],
      firstIsNext: true,
      stepNumber: 0,
      computerState: false,  // Used as flag for computer mode toggle
      computerTurn: {
        move: 0,
        computersMove: false,  // Used as flag if it is the computers turn
        compStatus: 'Computer Mode is toggled off'
      }
    };

    this.setState({
      state: state.history,
      firstIsNext: state.firstIsNext,
      stepNumber: state.stepNumber,
      computerState: state.computerState,
      computerTurn: state.computerTurn
    })
  }

  selectRandomMove(){
    let i = (Math.floor(Math.random() * 9) + 1) - 1;
    
    while(this.state.history[this.state.history.length-1].squares[i] === 'X' || this.state.history[this.state.history.length-1].squares[i] === 'O'){
      i = (Math.floor(Math.random() * 9) + 1) - 1;
    }
    return i;
  }

  
  selectMove(){

    if(!this.state.computerState || !this.state.computerTurn.computersMove || this.state.stepNumber > 7){
      return;
    }
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    let i = 10;
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let j = 0; j < lines.length; j++) {
      const [a, b, c] = lines[j];
      if(squares[a] && squares[b] && (squares[a] === squares[b])  && !squares[c]){
        i = c;
        j = lines.length;
      }
      else if(squares[a] && squares[c] && (squares[a] === squares[c]) && !squares[b]){
        i = b;
        j = lines.length;
      }
      else if(squares[c] && squares[b] && (squares[b] === squares[c]) && !squares[a]){
        i = a;
        j = lines.length;
      }
    }
    if(i === 10){
      i = this.selectRandomMove();
    }    

    
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = 'O';
    let computerTurn;
    if(this.state.computerState && this.state.firstIsNext){
      computerTurn = {
        move: 0,
        computersMove: true
      };
    }
    else {
      computerTurn = {
        move: 0,
        computersMove: false
      };
    }

    let firstIsNext = !this.state.firstIsNext;
    setTimeout(function() {
      this.setState({
        history: history.concat([{
          squares: squares,
        }]),
        stepNumber: history.length,
        firstIsNext: firstIsNext,
        computerTurn: computerTurn
      });
    }.bind(this), 1000);
  }
  
  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.firstIsNext ? 'X' : 'O';
    let computerTurn;
    if(this.state.computerState && this.state.firstIsNext){
      computerTurn = {
        move: 0,
        computersMove: true
      };
    }
    else {
      computerTurn = {
        move: 0,
        computersMove: false
      };
    }

    this.setState({
      history: history.concat([{
        squares: squares,
      }]),
      stepNumber: history.length,
      firstIsNext: !this.state.firstIsNext,
      computerTurn: computerTurn
    }, function() {
      this.selectMove()
    });
    
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      firstIsNext: (step % 2) === 0,
    });
  }

  handleComputerState(computerState){
    let computerTurn;
    if(computerState !== null){
      if(computerState === true){
        computerTurn = {
          move: this.state.computerTurn.move,
          computersMove: this.state.computerTurn.computersMove,
          compStatus: 'Computer Mode is toggled on'
        }
      }
      else{
        computerTurn = {
          move: this.state.computerTurn.move,
          computersMove: this.state.computerTurn.computersMove,
          compStatus: 'Computer Mode is toggled off'
        }
      }

      this.setState({
        computerState: computerState,
        computerTurn: computerTurn
      });
    }
  }
  
  getComputerModeStatus(){
    return this.state.computerState ? 'Computer Mode is toggled on.' : 'Computer Mode is toggled off.'
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];

    const winner = calculateWinner(current.squares);
    let status;
    if (winner && winner !== 'tie') {
      status = 'Winner: ' + winner;
    } else if(winner === 'tie'){
      status = 'Tie!';
    } else {
      status = 'Next player: ' + (this.state.firstIsNext ? 'X' : 'O');
    }

    const moves = history.map((step, move) => {
      const desc = move ? 'Go to move #' + move : 'Go to game start';
      return(
        <li key={move}> 
          <button className="btn" onClick={() => this.jumpTo(move)}>{desc}</button>  
        </li>
      );
    });
    
    return (
      <div className="game">
      <div className="row game-row">
        
        <div className="status">{status}</div>
        <div className="game-board">
          <Board
          squares={current.squares}
          onClick={(i) => this.handleClick(i)}
          isDisabled = {this.state.computerTurn.computersMove} />
        </div>
        <div className="game-info">
          <br/>
          <ComputerModeToggle changeState={this.handleComputerState.bind(this)}/>
          <br />
          <div> {this.getComputerModeStatus()} </div>
          <br />
          <div> {this.ResetButton()} </div>
          {/* <ol>{moves}</ol> */}
        </div>
      </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Game />,
  document.getElementById('root'),
);

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  let count = 0;
  squares.map(square => {
    if(square){
      count++;
    }
  })
  if(count >= 9){
    return 'tie';
  }
  return null;
}

export default Game
