import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

/* A single square of the sudoku square. This is a button. */
class Square extends React.Component {
    render() {
        return (
            <button className="square" style={this.props.borders} onClick={this.props.onClick}>
                {this.props.value ? this.props.value : null}
            </button>
        )
    }
}

/** A Sudoku Board consisting of of a 9x9 array of numbers. A 0 indicates an empty position */
class Board extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(Array(9).fill(1)),
            set: false
        };
    }

    /**Renders a Sudoku Square with a Given Value, Row Index, and Column Index (for styling) */
    renderSquare(value, rowIdx, colIdx) {
        let borders = {};
        let borderSettings = '2px solid #000';

        // eslint-disable-next-line
        switch(rowIdx % 3) {
            case 0:
                borders['border-top'] = borderSettings;
                break;
            case 2:
                borders['border-bottom'] = borderSettings;
                break;
        }

        // eslint-disable-next-line
        switch(colIdx % 3) {
            case 0:
                borders['border-left'] = borderSettings;
                break;
            case 2:
                borders['border-right'] = borderSettings;
                break;
        }

        return (
            <Square 
                value={value}
                borders={borders}
            />
        );
    }

    render() {
        return (
            <div>
                {this.state.squares.map((row, rowIdx) => 
                    <div className="board-row">
                        {row.map((value, colIdx) => this.renderSquare(value, rowIdx, colIdx))}
                    </div>
                )}
            </div>
        );
    }
}



class AlgorithmDropdown extends React.Component {
    render() {
        return (
            <>
            <DropdownButton 
                as={ButtonGroup}
                key='Primary'
                id="choose-algorithm"
                variant='primary'
                title='Algorithm'>
                <Dropdown.Item as="button">Recursive Backtracking</Dropdown.Item>
                <Dropdown.Item as="button">Another action</Dropdown.Item>
                <Dropdown.Item as="button">Something else</Dropdown.Item>
            </DropdownButton>
            </>
        );
    }
}

class App extends React.Component {
    render() {
        return (
            <div>
                <div className="topBar">
                    <h2>Sudoku Solvers</h2>
                    <AlgorithmDropdown />
                </div>

                <div className="game">
                    <div className="game-board">
                        <Board />
                    </div>
                    <div className="game-info">
                        <div>{/* status */}</div>
                        <ol>{/* TODO */}</ol>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
