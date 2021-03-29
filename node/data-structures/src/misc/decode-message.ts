/*
[
    ['I', 'B', 'C', 'A', 'K', 'E', 'A'],
    ['D', 'R', 'F', 'C', 'A', 'E', 'A'],
    ['G', 'H', 'O', 'E', 'L', 'A', 'D']
]

Output - IROCKED
*/

export function decodeMessage(code: string[][]) {
    const totalColumns = code[0].length;
    const totalRows = code.length;
    const output: string[] = [];

    let movingDown: boolean = true;
    let currentRow: number = 0;
    let currentCol: number = 0;

    while (currentCol < totalColumns) {
        output.push(code[currentRow][currentCol]);

        if (movingDown) {
            if (currentRow + 1 >= totalRows) {
                movingDown = false;
                currentRow -= 1;
            } else {
                currentRow += 1;
            }
        } else {
            if (currentRow - 1 < 0) {
                movingDown = true;
                currentRow += 1;
            } else {
                currentRow -= 1;
            }
        }
        currentCol += 1;
    }

    return output.join('');
}
