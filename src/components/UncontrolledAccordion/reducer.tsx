export type ActionType = {
    type: string
}

export const TOGGLE_COLLAPSED = 'TOGGLE_COLLAPSED'

export type StateType = {
    collapsed: boolean
}

export const reducer = (state: StateType, action: ActionType): StateType => {
    switch (action.type) {
        case TOGGLE_COLLAPSED:
            return {
                ...state,
                collapsed: !state.collapsed
            }
        default:
            return state
    }
}