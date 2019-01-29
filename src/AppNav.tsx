import React from 'react'
import { Footer, FooterTab, Button, Icon, Text } from 'native-base'
import { createBottomTabNavigator, createAppContainer,
  NavigationNavigator } from 'react-navigation'

import Math from './Math'
import GMap from './GMap'

class NavFooter extends React.Component<{navigation: any}> {
  getActiveRouteName = () => {
    return this.props.navigation.state.routes[this.props.navigation.state.index].routeName
  }

  render() {
    return (
      <Footer>
        <FooterTab>
          <Button
            active={this.getActiveRouteName() === 'Math'}
            onPress={() => this.props.navigation.navigate('Math')}
          >
            <Icon name='apps' />
            <Text>Math</Text>
          </Button>
          <Button
            active={this.getActiveRouteName() === 'GMap'}
            onPress={() => this.props.navigation.navigate('GMap')}
          >
            <Icon name='navigate' />
            <Text>GMap</Text>
          </Button>
        </FooterTab>
      </Footer>
    )
  }
}

const AppNav = createBottomTabNavigator({
  Math,
  GMap,
},                                      {
  tabBarComponent: NavFooter,
  tabBarPosition: 'bottom',
})

export default createAppContainer(AppNav)
