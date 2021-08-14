import rockPaperOrScissors from '../src/rockPaperOrScissors';

describe('Test suite of game rock, paper or scissors 🪨 📄  ✂️ ', () => {

    test('Should show a tie if player1 and player2 send de same option', () => {
        const player1Option = 'rock';
        const player2Option = 'rock';

        const result = rockPaperOrScissors(player1Option, player2Option);

        expect(result).toBe('Player1 and Player2 are tie')
    })
    test('Should send player1 option with rock and player2 scissors and the winner should be player 1', () => {
        const player1Option = 'rock';
        const player2Option = 'scissors';

        const result = rockPaperOrScissors(player1Option, player2Option);

        expect(result).toBe('The winner is player 1 with rock option')
    })

    test('Should send player1 option with paper and player2 scissors and the winner should be player 2', () => {
        const player1Option = 'paper';
        const player2Option = 'scissors';

        const result = rockPaperOrScissors(player1Option, player2Option);

        expect(result).toBe('The winner is player 2 with scissors option')
    })

    test('Should send player1 option with scissors and player2 rock and the winner should be player 2', () => {
        const player1Option = 'scissors';
        const player2Option = 'rock';

        const result = rockPaperOrScissors(player1Option, player2Option);

        expect(result).toBe('The winner is player 2 with rock option')
    })

    test('Should send player1 option with scissors and player2 paper and the winner should be player 1', () => {
        const player1Option = 'scissors';
        const player2Option = 'paper';

        const result = rockPaperOrScissors(player1Option, player2Option);

        expect(result).toBe('The winner is player 1 with scissors option')
    })

    test('Should send player1 option with paper and player2 scissors and the winner should be player 2', () => {
        const player1Option = 'paper';
        const player2Option = 'scissors';

        const result = rockPaperOrScissors(player1Option, player2Option);

        expect(result).toBe('The winner is player 2 with scissors option')
    })

    test('Should send player1 option with paper and player2 rock and the winner should be player 1', () => {
        const player1Option = 'paper';
        const player2Option = 'rock';

        const result = rockPaperOrScissors(player1Option, player2Option);

        expect(result).toBe('The winner is player 1 with paper option')
    })

    test('Should send player1 option with rock and player2 paper and the winner should be player 2', () => {
        const player1Option = 'rock';
        const player2Option = 'paper';

        const result = rockPaperOrScissors(player1Option, player2Option);

        expect(result).toBe('The winner is player 2 with paper option')
    })

})