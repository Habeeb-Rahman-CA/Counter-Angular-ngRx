import { createReducer, on } from "@ngrx/store"
import { decrementCounter, incrementCounter, reset } from "./counter.action"

export interface CounterState {
    count: number
}

export const initialCount: CounterState = {
    count: 0
}

export const reducer = createReducer(
    initialCount,
    
    on(incrementCounter, state => ({
        ...state,
         count: state.count + 1
    })),
    on(decrementCounter, state => ({
        ...state, count: state.count - 1
    })),
    on(reset, state => ({
        ...state, count: 0
    }))
)