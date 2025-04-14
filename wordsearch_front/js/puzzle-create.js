import { modify } from "./functions.js";

(
    _ => {
        const letters = [...document.querySelectorAll('.letter')];
        let query = 'insert into Letter (puzzleId, letter, posX, posY) values ';

        // Guard for incomplete puzzle
        for (const letter of letters) {
            if (letter.value === '') {
                return;
            }
        }

        let count = 0;
        for (let row = 0; row < 10; row++) {
            for (let col = 0; col < 10; col++) {
                query += `(1, '${letters[count++].value}', ${col}, ${row}),`;
            }
        }
        const lastIndex = query.lastIndexOf(',');
        query = query.slice(0, lastIndex) + ';' + query.slice(lastIndex + 1);

        modify(query);
    }
)();