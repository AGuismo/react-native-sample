import React from 'react'
import { AppLoading, Font } from 'expo'
import AppNav  from './src/AppNav'

type State = {
  appReady: boolean,
}

export default class App extends React.Component<{}, State> {
  state = {
    appReady: false,
  }

  async componentWillMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
    })
    this.setState({ appReady: true })
  }

  render() {
    return this.state.appReady ? <AppNav />
      : <AppLoading startAsync={null} onError={null} onFinish={null} />
  }
}
