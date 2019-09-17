import { INCREMENT, DECREMENT, HYAKUBAI } from '../actions'

const initialState = { value: 0 }

export default (state = initialState, action) => {
    // eslint-disable-next-line default-case
    switch(action.type) {
        case INCREMENT:
            return { value: state.value + 1 }
        case DECREMENT:
            return { value: state.value - 1 }
        case HYAKUBAI:
            return { value: state.value * 100 }
        default:
            return state
    }
}