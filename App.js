import React from 'react'
import { AppLoading } from 'expo'

import AppNav from './src/AppNav'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { appReady: false }
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    })
    this.setState({ appReady: true })
  }

  render() {
    return this.state.appReady ? <AppNav /> : <AppLoading />
  }
}
