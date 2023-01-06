export const counterAction = {
    increase: () => {
        return { type: 'INCREASE' }
    },
    empty: () => {
        return { type: 'EMPTY' }
    }
}