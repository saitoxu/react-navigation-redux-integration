import React from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text, View, AsyncStorage } from 'react-native'
import { NavigationActions } from 'react-navigation'
import { Container, Header, Left, Body, Title, Right, Button, Content, Icon } from 'native-base'

class SplashScreen extends React.Component {
  constructor(props) {
    super(props)
    AsyncStorage.getItem('auth', (error, result) => {
      console.log(result)
    })
  }

  componentDidMount() {
    const { auth } = this.props
    const { isLoggedIn } = auth
    console.log(`isLoggedIn = ${isLoggedIn}`)
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
    setTimeout((splash, action) => {
      splash.props.navigation.dispatch(action)
    }, 1000, this, action)
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
