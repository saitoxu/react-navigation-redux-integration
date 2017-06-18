import React from 'react'
import { connect } from 'react-redux'
import { addNavigationHelpers, StackNavigator } from 'react-navigation'
import SplashScreen from '../components/SplashScreen'
import MainScreen from '../components/MainScreen'
import LoginScreen from '../components/LoginScreen'
import MyDrawerNavigator from './DrawerNavigator'

export const AppNavigator = StackNavigator({
  Splash: {
    screen: SplashScreen,
    navigationOptions: {
      header: null
    }
  },
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      header: null
    }
  },
  Main: {
    screen: MyDrawerNavigator,
    navigationOptions: {
      header: null
    }
  }
  // Main: { screen: MainScreen }
})

const AppWithNavigationState = ({ dispatch, nav }) => (
  <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
)

const mapStateToProps = state => ({
  nav: state.nav
})

export default connect(mapStateToProps)(AppWithNavigationState)
