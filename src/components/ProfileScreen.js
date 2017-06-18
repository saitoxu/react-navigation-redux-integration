import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Container, Header, Left, Body, Title, Right, Button, Content, Icon } from 'native-base'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  }
})

class ProfileScreen extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.props.navigation.navigate('DrawerOpen')
  }

  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={this.handleClick}>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Profile</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Text>Profile</Text>
        </Content>
      </Container>
    )
  }
}

ProfileScreen.navigationOptions = {
  drawerLabel: 'Profile'
}

export default ProfileScreen
