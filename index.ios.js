/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import { AppRegistry, AsyncStorage } from 'react-native'
import { Provider } from 'react-redux'
import { compose, createStore, applyMiddleware, combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk'
import persistState from 'redux-localstorage'
import adapter from 'redux-localstorage/lib/adapters/AsyncStorage'
import filter from 'redux-localstorage-filter'
import AppReducer from './src/reducers'
import AppWithNavigationState from './src/navigators/AppNavigator'

console.disableYellowBox = true

const middlewares = [thunkMiddleware]

const storage = compose(
  filter(['auth'])
)(adapter(AsyncStorage))

if (process.env.NODE_ENV === 'development') {
  const { logger } = require('redux-logger')
  middlewares.push(logger)
}

const enhancer = compose(
  applyMiddleware(...middlewares),
  persistState(storage, 'auth')
)

const store = createStore(AppReducer, {}, enhancer)

export default class ReactNavigationReduxIntegration extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    )
  }
}

AppRegistry.registerComponent('ReactNavigationReduxIntegration', () => ReactNavigationReduxIntegration)
