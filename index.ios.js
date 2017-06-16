/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import { AppRegistry } from 'react-native'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk'
import AppReducer from './src/reducers'
import AppWithNavigationState from './src/navigators/AppNavigator'

console.disableYellowBox = true

const middlewares = [thunkMiddleware]

if (process.env.NODE_ENV === 'development') {
  const { logger } = require('redux-logger')
  middlewares.push(logger)
}

export default class ReactNavigationReduxIntegration extends Component {
  store = createStore(AppReducer, {}, applyMiddleware(...middlewares))

  render() {
    return (
      <Provider store={this.store}>
        <AppWithNavigationState />
      </Provider>
    )
  }
}

AppRegistry.registerComponent('ReactNavigationReduxIntegration', () => ReactNavigationReduxIntegration)
