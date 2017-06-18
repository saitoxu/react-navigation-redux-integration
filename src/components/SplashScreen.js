import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Container, Header, Left, Body, Title, Right, Button, Content, Icon } from 'native-base'

class SplashScreen extends React.Component {
  constructor(props) {
    super(props)
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

export default SplashScreen
