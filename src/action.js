
const incrementAction = {
    type: 'counter/increment'
}

const decrementAction = {
    type: 'counter/decrement'
}

const setNumberAction = (number) => {
    return (
        type: 'counter/set-number',
        payload:number
    )
}

export {
    incrementAction, 
    decrementAction,
    setNumberAction

}