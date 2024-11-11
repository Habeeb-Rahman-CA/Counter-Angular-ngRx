import { createAction } from "@ngrx/store";

export const incrementCounter = createAction('Counter incremented')

export const decrementCounter = createAction('Counter decremented')

export const reset = createAction('counter reseted')