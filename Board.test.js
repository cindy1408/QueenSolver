const Board = require('./Board.js');
const Piece = require('./Piece.js');


test('test_constructor_ok', () => {
    let board = new Board(8);
    board.n == 8;
    board.pieces == new Set();
    expect(new Set()).toEqual(board.pieces);
});

test('test_constructor_negative_number_error', () => {
    let board = new Board(-1000);
    let boardNumber = board.n; 
    function checkForNegatives (){
        if(boardNumber < 0){
            throw new TypeError('You must provide a positive number'); 
        }
    }
        expect(checkForNegatives).toThrow();
});



test('test_constructor_infinity_error', () => {
    let board = new Board(Infinity);
    let boardNumber = board.n;
    function checkForInfinity (){
        if(boardNumber == Infinity){
            throw new TypeError('You must provide a positive number');
        }
    }
    expect(checkForInfinity).toThrow();
});

test('test_size_ok8', () => {
    let board = new Board(8);
    expect(board.size()).toBe(8);
});

test('test_size_ok1000', () => {
    let board = new Board(1000);
    expect(board.size()).toBe(1000);
});


test('should add piece to board', () => {
    let board = new Board(3);
    let piece = new Piece();
    board.add(piece);
    expect(board.pieces.size).toBe(1);
    expect(board.pieces.has(piece))
});

test('test_admissiblePlacementFor_true', () => {
    let board = new Board(3);
    let piece1 = new Piece();
    piece1.attacks = jest.fn(() => true);
    board.add(piece1);
    
    let piece2 = new Piece();
    piece2.attacks = jest.fn(() => true);
    let actual = board.admissiblePlacementFor(piece2);

    expect(actual).toBe(false);
});



test('test_admissiblePlacementFor_false1', () => {
    let board = new Board(3);
    let piece1 = new Piece();

    piece1.attacks = jest.fn();
    piece1.attacks.mockReturnValue(true);
    board.add(piece1);

    let piece2 = new Piece();
    piece2.attacks = jest.fn();
    piece2.attacks.mockReturnValue(false);
    let actual = board.admissiblePlacementFor(piece2);

    expect(actual).toEqual(false);
});


test('test_admissiblePlacementFor_false2', () => {
    let board = new Board(3);
    let piece1 = new Piece();
    piece1.attacks = jest.fn();
    piece1.attacks.mockReturnValue(false);
    board.add(piece1);

    let piece2 = new Piece();
    piece2.attacks = jest.fn();
    piece2.attacks.mockReturnValue(true);
    let actual = board.admissiblePlacementFor(piece2);

    expect(actual).toEqual(false);
});


test('test_admissiblePlacementFor_false3', () => {
    let board = new Board(3);
    let piece1 = new Piece();
    piece1.attacks = jest.fn();
    piece1.attacks.mockReturnValueOnce(true);
    board.add(piece1);

    let piece2 = new Piece();
    piece2.attacks = jest.fn();
    piece2.attacks.mockReturnValueOnce(true);
    let actual = board.admissiblePlacementFor(piece2);

    expect(actual).toEqual(false);
});


test('test_admissiblePlacementFor_empty-board', () => {
    let board = new Board(3);
    let piece1 = new Piece();
    piece1.attacks = jest.fn();
    piece1.attacks.mockReturnValue(false);
    board.admissiblePlacementFor(piece1);

    function checkForEmptyBoard(){
        if(board.pieces.size < 2){
            throw new TypeError('There must be at least 2 pieces on the board');
        }
    }
    expect(checkForEmptyBoard).toThrow();
});
