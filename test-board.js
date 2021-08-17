// const test = require('ava');
// npm init ava
import test from 'ava';
// npm i sinon --save (mock)
import Sinon  from 'sinon';
import Board from './Board.js';
import Piece from './Piece.js'

const test_windy = test;

test_windy('test_windy', name => {
	let names = 'Windy';
	name.is(names, 'Windy')
});

const test_constructor_ok = test;

test_constructor_ok('test_constructor_ok', functionBoard => {
	let board = new Board(8);
	board.n == 8;
	board.pieces == new Set();
	functionBoard.is(board.n, 8);
	// compare objects? 
	functionBoard.deepEqual(board.pieces, new Set());
})

const test_constructor_negative_number_error = test;

test_constructor_negative_number_error('test_constructor_negative_number_error', negative => {
	// don't forget to add negative in front of 1000. 
	let board = new Board(1000);
	let boardNumber = board.n;
	negative.assert(boardNumber > 0);
})

const test_constructor_infinity_error = test;

test_constructor_infinity_error('test_constructor_infinity_error', infinity => {
	let board = new Board(Infinity);
	let boardNumber = board.n;
	// don't forget to add ! front of the bracket
	infinity.assert((boardNumber == Infinity));
})

const test_size_ok8 =  test;

test_size_ok8('test_size_ok8', size => {
	let board = new Board(8);
	size.assert(board.size() == 8);
})

const test_size_ok1000 =  test;

test_size_ok1000('test_size_ok1000', size => {
	let board = new Board(1000);
	size.assert(board.size() == 1000);
})

const test_add_ok = test;

test_add_ok('test_add_ok', testAdd => {
	let board = new Board(3);
	let piece = new Piece();
	board.add(piece)
	testAdd.assert(board.pieces.size == 1)
	testAdd.assert(board.pieces.has(piece))
})



const test_adminissiblePlacementFor_true = test; 

test_adminissiblePlacementFor_true('test_adminissiblePlacementFor_true', placement => {
	let board = new Board(3);
	let piece1 = new Piece();
	piece1.attacks = Sinon.mock(false);
	board.add(piece1);

	let piece2 = new Piece();
	piece2.attacks = Sinon.mock(false);
	let actual = board.admissiblePlacementFor(piece2)

	placement.assert(actual == true);
});

const test_adminissiblePlacementFor_false1 = test;

test_adminissiblePlacementFor_false1('test_adminissiblePlacementFor_false1', placement => {
	let board = new Board(3);
	let piece1 = new Piece();
	piece1.attacks = Sinon.mock(true);
	board.add(piece1);

	let piece2 = new Piece();
	piece2.attacks = Sinon.mock(false);
	let actual = board.admissiblePlacementFor(piece2);

	placement.assert(actual == false);
});


const test_adminissiblePlacementFor_false2 = test; 

test_adminissiblePlacementFor_false2('test_adminissiblePlacementFor_false2', placement => {
	let board = new Board(3);
	let piece1 = new Piece();
	piece1.attacks = Sinon.mock(false);
	board.add(piece1);

	let piece2 = new Piece();
	piece2.attacks = Sinon.mock(true);
	let actual = board.admissiblePlacementFor(piece2);
	placement.assert(actual == false);
});

const test_adminissiblePlacementFor_false3 = test;

test_adminissiblePlacementFor_false3('test_adminissiblePlacementFor_false3', placement => {
	let board = new Board(3);
	let piece1 = new Piece();
	piece1.attacks = Sinon.mock(true);
	board.add(piece1);

	let piece2 = new Piece();
	piece2.attacks = Sinon.mock(true);
	let actual = board.admissiblePlacementFor(piece2);

	placement.assert(actual == false);
})








// extras, test_remove_ok
// test_adminissiblePlacementFor (when the board is empty)
