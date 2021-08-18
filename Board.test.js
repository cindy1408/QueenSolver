const Board = require('./Board.js');
const Piece = require('./Piece.js');


test('test_constructor_ok', () => {
    let board = new Board(8);
    board.n == 8;
    board.pieces == new Set();
    expect(new Set()).toEqual(board.pieces);
    expect(new Set()).not.toBe(board.pieces);
});

test('test_constructor_negative_number_error', () => {
    let board = new Board(-1000);
    let boardNumber = board.n; 
    expect(boardNumber).toBeLessThan(0);
});

test('test_constructor_infinity_error', () => {
    let board = new Board(Infinity);
    let boardNumber = board.n;
    expect(boardNumber).toBe(Infinity);
});

test('test_size_ok8', () => {
    let board = new Board(8);
    expect(board.size()).toBe(8);
});

test('test_size_ok1000', () => {
    let board = new Board(1000);
    expect(board.size()).toBe(1000);
});

test('test_add_ok', () => {
    let board = new Board(3);
    let piece = new Piece();
    board.add(piece);
    expect(board.pieces.size).toBe(1);
    expect(board.pieces.has(piece))
});

test('test_admissiblePlacementFor_true', () => {
    let board = new Board(3);
    let piece1 = new Piece();
    piece1.attacks = jest.fn();
    piece1.attacks.mockReturnValueOnce(true);
    board.add(piece1);
    // let myMock = jest.fn();
    // piece1.attacks = myMock.mockReturnValueOnce(true);
    
    let piece2 = new Piece();
    piece2.attacks = jest.fn();
    piece2.attacks.mockReturnValueOnce(true);
    let actual = board.admissiblePlacementFor(piece2);

    expect(actual).toBe(true);
});

test('test_admissiblePlacementFor_false1', () => {
    let board = new Board(3);
    let piece1 = new Piece();
    let piece2 = new Piece();
    // console.log('This is the type of for piece1.attacks: ', typeof piece1.attacks)
    piece1.attacks = jest.fn();
    piece1.attacks.mockReturnValueOnce(true);

    piece2.attacks = jest.fn();
    piece2.attacks.mockReturnValueOnce(false);
    let actual = board.admissiblePlacementFor(piece2.attacks);
    // console.log('This is the type of for piece2.attacks: ', typeof piece2.attacks)
    expect(actual).toEqual(false);
});

// test('test_admissiblePlacementFor_false2', () => {
//     let board = new Board(3);
//     let piece1 = new Piece();
//     piece1.attacks = jest.fn();
//     piece1.attacks.mockReturnValueOnce(false);

//     let piece2 = new Piece();
//     piece2.attacks = jest.fn();
//     piece2.attacks.mockReturnValueOnce(true);
//     let actual = board.admissiblePlacementFor(piece2.attacks);
//     console.log(actual);
//     expect(actual).toEqual(false);
// });


// test('test_admissiblePlacementFor_false3', () => {
//     let board = new Board(3);
//     let piece1 = new Piece();
//     piece1.attacks = jest.fn();
//     piece1.attacks.mockReturnValueOnce(true);

//     let piece2 = new Piece();
//     piece2.attacks = jest.fn();
//     piece2.attacks.mockReturnValueOnce(true);
//     let actual = board.admissiblePlacementFor(piece2.attacks);
//     console.log(actual);
//     expect(actual).toEqual(false);
// });
