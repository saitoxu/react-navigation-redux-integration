import React, { PropTypes } from 'react'
import { Container, Content } from 'native-base'
import AuthButton from './AuthButton'

class LoginScreen extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Container>
        <Content>
          <AuthButton />
        </Content>
      </Container>
    )
  }
}

LoginScreen.propTypes = {
  navigation: PropTypes.object.isRequired
}

export default LoginScreen
