import React from 'react'
import { View, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import { addNavigationHelpers, DrawerNavigator, DrawerItems } from 'react-navigation'
import HomeScreen from '../components/HomeScreen'
import ProfileScreen from '../components/ProfileScreen'

export const MyDrawerNavigator = DrawerNavigator({
  Home: { screen: HomeScreen },
  Profile: { screen: ProfileScreen }
}, {
  drawerPosition: 'left',
  contentComponent: props => (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <ScrollView><DrawerItems {...props} /></ScrollView>
    </View>
  )
})

const DrawerWithNavigationState = ({ dispatch, nav }) => (
  <MyDrawerNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
)

const mapStateToProps = state => ({
  nav: state.nav
})

// export default connect(mapStateToProps)(DrawerWithNavigationState)
export default MyDrawerNavigator
