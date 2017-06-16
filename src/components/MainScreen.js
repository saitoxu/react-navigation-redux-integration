import React from 'react'
import { connect } from 'react-redux'
import { StyleSheet, View, Button } from 'react-native'
import LoginStatusMessage from './LoginStatusMessage'
import AuthButton from './AuthButton'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
})

const MainScreen = () => (
  <View style={styles.container}>
    <LoginStatusMessage />
    <AuthButton />
  </View>
)

const mapStateToProps = state => null

MainScreen.navigationOptions = {
  title: 'Home Screen',
  drawerLabel: 'Home'
}

// export default connect(mapStateToProps)(MainScreen)
export default MainScreen
