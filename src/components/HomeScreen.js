import React from 'react'
import { connect } from 'react-redux'
import { StyleSheet, View, Text } from 'react-native'
import { Container, Header, Left, Body, Title, Right, Button, Content, Icon } from 'native-base'
import AuthButton from './AuthButton'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
})

class HomeScreen extends React.Component {
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
            <Title>Home</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Text>Home</Text>
          <AuthButton />
        </Content>
      </Container>
    )
  }
}

const mapStateToProps = state => null

HomeScreen.navigationOptions = {
  drawerLabel: 'Home'
}

// export default connect(mapStateToProps)(HomeScreen)
export default HomeScreen
