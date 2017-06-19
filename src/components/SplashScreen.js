import React from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text, View, AsyncStorage } from 'react-native'
import { NavigationActions } from 'react-navigation'
import { Container, Header, Left, Body, Title, Right, Button, Content, Icon } from 'native-base'

class SplashScreen extends React.Component {
  componentWillReceiveProps(nextProps) {
    const { auth } = nextProps
    const { isLoggedIn } = auth
    // console.log(`isLoggedIn = ${isLoggedIn}`)
    let routeName = 'Login'
    if (isLoggedIn) {
      routeName = 'Main'
    }
    const action = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName })
      ]
    })
    this.props.navigation.dispatch(action)
  }

  render() {
    return (
      <Container>
        <Content>
          <Text>Splash</Text>
        </Content>
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps)(SplashScreen)
