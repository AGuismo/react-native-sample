import React from 'react'
import { Footer, FooterTab, Button, Icon, Text } from 'native-base'
import { createBottomTabNavigator, createAppContainer } from 'react-navigation'

import Test from './Test'
import GMap from './GMap'


class NavFooter extends React.Component {
  getActiveRouteName = () => {
    return this.props.navigation.state.routes[this.props.navigation.state.index].routeName
  }

  render() {
    return (
      <Footer>
        <FooterTab>
          <Button
            active={this.getActiveRouteName() === 'Test'}
            onPress={() => this.props.navigation.navigate('Test')}
          >
            <Icon name='apps' />
            <Text>Test</Text>
          </Button>
          <Button
            active={this.getActiveRouteName() === 'GMap'}
            onPress={() => this.props.navigation.navigate('GMap')}
          >
            <Icon name="navigate" />
            <Text>GMap</Text>
          </Button>
        </FooterTab>
      </Footer>
    )
  }
}

const AppNav = createBottomTabNavigator({
  Test,
  GMap,
},{
  tabBarComponent: NavFooter,
  tabBarPosition: 'bottom',
})

export default createAppContainer(AppNav)