import { compose, combineReducers } from 'redux';
import { NavigationActions } from 'react-navigation'
import { mergePersistedState } from 'redux-localstorage'
import { AppNavigator } from '../navigators/AppNavigator'

const initialNavState = {
  index: 0,
  routes: [
    { key: 'Splash', routeName: 'Splash' },
    { key: 'Login', routeName: 'Login' },
    {
      key: 'Main',
      routeName: 'Main',
      index: 0,
      routes: [{
        key: 'Close',
        routeName: 'DrawerClose',
        index: 0,
        routes: [
          { key: 'Home', routeName: 'Home' },
          { key: 'Profile', routeName: 'Profile' }
        ]
      }, {
        key: 'Open',
        routeName: 'DrawerOpen'
      }]
    }
  ]
}

const initialAuthState = { isLoggedIn: false }

function nav(state = initialNavState, action) {
  switch (action.type) {
    case 'Login':
      // return AppNavigator.router.getStateForAction(NavigationActions.navigate({ routeName: 'Main' }), state)
      return AppNavigator.router.getStateForAction(
        NavigationActions.reset({
          index: 0,
          actions: [
            NavigationActions.navigate({ routeName: 'Main' })
          ]
        }),
        state
      )
    case 'Logout':
      return AppNavigator.router.getStateForAction(
        NavigationActions.reset({
          index: 0,
          actions: [
            NavigationActions.navigate({ routeName: 'Login' })
          ]
        }),
        state
      )
    default:
      return AppNavigator.router.getStateForAction(action, state)
  }
}

function auth(state = initialAuthState, action) {
  switch (action.type) {
    case 'Login':
      return { ...state, isLoggedIn: true }
    case 'Logout':
      return { ...state, isLoggedIn: false }
    default:
      return state
  }
}

const reducers = combineReducers({
  nav,
  auth
})
const AppReducer = compose(
  mergePersistedState()
)(reducers)

export default AppReducer
