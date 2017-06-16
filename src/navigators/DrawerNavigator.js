import React from 'react'
import { connect } from 'react-redux'
import { addNavigationHelpers, DrawerNavigator } from 'react-navigation'
import MainScreen from '../components/MainScreen'
import ProfileScreen from '../components/ProfileScreen'

export const MyDrawerNavigator = DrawerNavigator({
  // Main: { screen: MainScreen },
  Profile: { screen: ProfileScreen }
})

const DrawerWithNavigationState = ({ dispatch, nav }) => (
  <MyDrawerNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
)

const mapStateToProps = state => ({
  nav: state.nav
})

// export default connect(mapStateToProps)(DrawerWithNavigationState)
export default MyDrawerNavigator
