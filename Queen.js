import Piece from './Piece.js';
class Queen extends Piece {
    constructor(){
        super();
    } 
    attacks(piece){
        i = this.rowIndex()
        j = this.colIndex()

        u = piece.rowIndex()
        v = piece.colIndex()

        return (
            this.isMindfulOf(piece)
            && ((i == u)
                || (j == v) 
                || (i-j == u-v)
                || (i+j == u+v)) 
        )
    }
};

export default Queen; 