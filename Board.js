class Board {
    constructor(size){
        this.n = size; 
        this.pieces = new Set();
    }
    size(){
        return this.n;
    }
    admissiblePlacementFor(piece){
        console.log('hello here: ', this.pieces);
        for(let other of this.pieces){
            console.log('HELLLLLLOOOOOOOOOO GROUPPPPPPPP 5 HERRRREEEEEEEEEEEE!!!!!!');
            console.log(piece.attacks(other));
            console.log(other.attacks(piece));
            if((other != piece && 
                other.attacks(piece) || 
                piece.attacks(other))){
                return false;
            }
        }
        return true; 
    }
    add(piece){
        this.pieces.add(piece)
    }
    remove(piece){
        this.pieces.remove(piece)
    }
}

//ava
// export default Board;

//jest 

module.exports = Board; 