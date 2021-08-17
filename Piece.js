import Board from './Board.js';

class Piece extends Board {
    constructor(){
        super();
        this.board = null;
        this.i = null;
        this.j = null;
    }
    isOnBoard(){
        return this.board != null;
        
    }
    placeOn(board, i, j){
        if(!this.isOnBoard() && 
            (0 <= i) &&
            (0 <= j) && 
            (j < board.size())
            ){
                this.board = board; 
                this.i = i; 
                this.j = j;
                board.add(this)
        }
    }
    removeFromBoard(){
        if(this.isOnBoard()){
            this.board.remove(this);
            this.board = null;
        }
    }
    attacks(piece){
        throw new Error('An abstract method has been invoked')
    }
    isMindfulOf(piece){
        if((piece != null) &&
            this.isOnBoard() &&
            piece.isOnBoard() &&
            this.piece == piece.board &&
            !(this.piece)){
                return False; 
            }
    }
    rowIndex(){
        if(this.isOnBoard()){
            return this.i;
        }
        return this.unknown;
    }
    colIndex(){
        if(this.isOnBoard()){
            return this.j;
        }
        return this.unknown
    }
    unknown = -1
}

export default Piece; 