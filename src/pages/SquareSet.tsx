import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';

interface Square {
    id: string,
    color: string,
}

const SquareSet: React.FC = () => {
  const size = 20;
  const [squareTrack, setSquareTrack] = useState<Square[][]>([]);

  useEffect(() => {
    const squares = new Array(size);
    for(let i =0; i<size; i++){
        squares[i] = new Array(size);
        for(let j=0; j<size; j++){
            squares[i][j] = {id: uuidv4(), color: 'blue' };
        }
    }
    setSquareTrack(squares);
  }, []);

  const changeColor = (id: string) => {
    const newSquares = new Array(size);
    let next = false;
    for(let i =0; i<size; i++){
        newSquares[i] = new Array(size);
        for(let j=0; j<size; j++){
            if(id === squareTrack[i][j].id){
                newSquares[i][j] = {...squareTrack[i][j], color: 'red'};
                next = true;
            }
            else if(next){
                newSquares[i][j] = {...squareTrack[i][j], color: 'green'};
                next = false;
            }
            else{
                newSquares[i][j] = {...squareTrack[i][j], color: 'blue'};
            }
        }
    }
    if(next){
        newSquares[0][0] = {...squareTrack[0][0], color: 'green'};
    }
    setSquareTrack(newSquares);
  }

  return (
    <div>
      <h2>Square Set</h2>
      <div
        style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${size}, 1fr)`,
            gap: '1px',
            width: '60vw',
        }}
        >
        {squareTrack.flat().map((square) => (
            <div
            key={square.id}
            onClick={() => changeColor(square.id)}
            style={{
                backgroundColor: square.color,
                aspectRatio: '1',
                width: '100%',
                border: '1px solid red',
            }}
            />
        ))}
      </div>
    </div>
  );
};


export default SquareSet;
