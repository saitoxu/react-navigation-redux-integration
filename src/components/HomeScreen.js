import React from 'react'
import { connect } from 'react-redux'
import { StyleSheet, View, Text, Button } from 'react-native'
import AuthButton from './AuthButton'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
})

const HomeScreen = () => (
  <View style={styles.container}>
    <Text>Home</Text>
    <AuthButton />
    <Button title="Open Drawer" onPress={() => console.log('hoge')} />
  </View>
)

const mapStateToProps = state => null

HomeScreen.navigationOptions = {
  title: 'Home Screen',
  drawerLabel: 'Home'
}

// export default connect(mapStateToProps)(HomeScreen)
export default HomeScreen
