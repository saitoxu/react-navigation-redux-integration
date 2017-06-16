import React from 'react'
import { connect } from 'react-redux'
import { addNavigationHelpers, StackNavigator } from 'react-navigation'
import MainScreen from '../components/MainScreen'
import LoginScreen from '../components/LoginScreen'
import MyDrawerNavigator from './DrawerNavigator'

export const AppNavigator = StackNavigator({
  Login: { screen: LoginScreen },
  Main: { screen: MyDrawerNavigator }
  // Main: { screen: MainScreen }
})

const AppWithNavigationState = ({ dispatch, nav }) => (
  <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
)

const mapStateToProps = state => ({
  nav: state.nav
})

export default connect(mapStateToProps)(AppWithNavigationState)
