import React from 'react'
import { Platform, StyleSheet } from 'react-native'
import { Constants } from 'expo'
import {
  Header,
  Left,
  Body,
  Right,
  Title,
  Subtitle,
} from 'native-base'

const IOS_STATUS_BAR_HEIGHT = 20

type Props = {
  title: string,
  subtitle?: string,
  left?: JSX.Element,
  right?: JSX.Element,
}

export default class PageHeader extends React.Component<Props> {

  render() {
    return (
      <Header style={styles.header}>
      <Left>{this.props.left}</Left>
      <Body>
        <Title style={styles.title}>{this.props.title}</Title>
        {this.props.subtitle ? <Subtitle>{this.props.subtitle}</Subtitle> : null}
      </Body>
      <Right>{this.props.right}</Right>
    </Header>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    paddingTop: Platform.OS === 'ios' ? IOS_STATUS_BAR_HEIGHT : Constants.statusBarHeight,
  },
  title: {
    width: 250,
  },
})
