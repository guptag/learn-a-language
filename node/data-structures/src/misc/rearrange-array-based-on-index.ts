/*
   Re-Arrange Array based on the index
*/
export function reArrange<T>(collection: T[], newIndices: number[]) {
    while (true) {
        newIndices.forEach((moveIndex: number, index: number) => {
            if (moveIndex === -1) {
                return
            }

            const temp: T = collection[moveIndex]
            collection[moveIndex] = collection[index]
            collection[index] = temp

            newIndices[index] = newIndices[moveIndex]
            newIndices[moveIndex] = -1
        })

        if (!newIndices.find((item: number) => item !== -1)) {
            break
        }
    }
    return collection
}
