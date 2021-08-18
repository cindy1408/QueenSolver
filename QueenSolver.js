// npm i argparse 
import argparse from 'argparse';
import { toInteger } from 'lodash';

import Board from './Board.js';
import Queen from './Queen.js';

let numberOfSolutions = (i, board) => {
    if(i < board.size()){
        queen = Queen();
        count = 0

        for( j = 0; j <= board.size; j++ ){
            queen.placeOn(board, i, j) 
            
            if(board.adminissiblePlacementfor(queen)){
                count = count + numberOfSolutions(i + 1, board)
            }
            queen.removeFromBoard()
        }
        return count;
    }   
    return 1; 
}

const parser = new argparse.ArgumentParser({
    description: `Solve the Queen's puzzle of the specified size`
  });

parser.add_argument('size', metavar='N', type=int , help='an integer for the size of the board and number of queens')

let args = parser.parse_args()

let size = args.size

//size = 8;
let board = Board(size)

console.log(numberOfSolutions(0, board))