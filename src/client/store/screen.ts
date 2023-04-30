import {Dispatch} from 'redux'
import {useSelector, useDispatch} from 'react-redux'
import {State as GlobalState, Store} from './'

export type ScreenType = 'xl-desktop' | 'lg-desktop' | 'md-desktop' | 'sm-tablet' | 'xs-phone'

export interface State {
  type: ScreenType
}
export type Action = {
  type: 'screen-resize'
  screenType: ScreenType
}

export const useScreenState = () => {
  const state = useSelector<GlobalState, State>(state => state.screen)
  const dispatch = useDispatch<Dispatch<Action>>()
  const actions = {}
  return [
    state,
    actions
  ] as [
    State,
    typeof actions
  ]
}

const trackScreenType = () => {
  const width = window.innerWidth
  const type:ScreenType = width >= 1920? 'xl-desktop'
    : width >= 1280? 'lg-desktop'
    : width >= 960? 'md-desktop'
    : width >= 600? 'sm-tablet'
    : 'xs-phone'
  return type
}
export const reducer = (state:State = {type:trackScreenType()}, action:Action) => {
  switch (action.type) {
    case 'screen-resize':
      return {
        ...state,
        type: action.screenType
      }
    default:
      return state
  }
}
export const construct = (store:Store) => {
  window.addEventListener('resize', () => {
    const screenState = store.getState()?.screen
    const screenType = trackScreenType()
    if(screenState?.type !== screenType) {
      store.dispatch({type:'screen-resize', screenType})
    }
  })
}