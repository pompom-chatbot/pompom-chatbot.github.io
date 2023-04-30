import {createStore, combineReducers} from 'redux'
import {State as ScreenState, Action as ScreenAction, construct as constructScreen, reducer as screenReducer} from './screen'

export interface State {
  screen: ScreenState
}
type Action = ScreenAction
const reducers = combineReducers({
  screen: screenReducer
})
const store = createStore<State, Action, {}, {}>(reducers)
constructScreen(store)

export type Store = typeof store
export default store